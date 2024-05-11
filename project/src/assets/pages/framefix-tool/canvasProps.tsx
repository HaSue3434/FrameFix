import React, { useRef, useEffect, useState } from 'react';
import Cursor from './icons/cursor-icon/cursor.svg';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isMiddleButtonDown, setIsMiddleButtonDown] = useState(false);

  useEffect(() => {
    const updateCanvasSize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = canvasSize.width * devicePixelRatio;
      canvas.height = canvasSize.height * devicePixelRatio;
      canvas.style.width = `${canvasSize.width}px`;
      canvas.style.height = `${canvasSize.height}px`;

      ctx.fillStyle = 'rgba(69,154,255,.15)';
      ctx.strokeStyle = 'rgba(69,154,255,1)';
      ctx.lineWidth = 1;
    }
  }, [canvasSize]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (event.button === 1) { // Middle button
      setIsMiddleButtonDown(true);
      return; // Prevent drawing
    }

    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setIsDrawing(true);
      setStartPos({
        x: (event.clientX - rect.left) * window.devicePixelRatio,
        y: (event.clientY - rect.top) * window.devicePixelRatio,
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing && !isMiddleButtonDown && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const rect = canvasRef.current.getBoundingClientRect();
        const devicePixelRatio = window.devicePixelRatio || 1;
        const currentX = (event.clientX - rect.left) * devicePixelRatio;
        const currentY = (event.clientY - rect.top) * devicePixelRatio;
  
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.beginPath();
        ctx.rect(startPos.x, startPos.y, currentX - startPos.x, currentY - startPos.y);
        ctx.fill();
        ctx.stroke();
      }
    }
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (event.button === 1) { 
      setIsMiddleButtonDown(false);
      canvasRef.current!.style.cursor = `url(${Cursor}), auto`;
    }

    setIsDrawing(false);
    
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
      style={{ position: "absolute" }}  // 초기 zIndex 설정
    />
  );
};
export default Canvas;