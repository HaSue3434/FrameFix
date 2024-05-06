import React, { useRef, useEffect, useState } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const updateCanvasSize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      ctx.fillStyle = 'rgba(69,154,255,.15)';
      ctx.strokeStyle = 'rgba(69,154,255,1)';
      ctx.lineWidth = 1; 

    }
  }, [canvasSize]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setIsDrawing(true);
      setStartPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const devicePixelRatio = window.devicePixelRatio || 1;
        const currentX = (event.clientX - rect.left) * devicePixelRatio;
        const currentY = (event.clientY - rect.top) * devicePixelRatio;
    
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasSize.width * devicePixelRatio, canvasSize.height * devicePixelRatio);
          ctx.fillStyle = 'rgba(69,154,255,.07)'; 
          ctx.fillRect(startPos.x * devicePixelRatio, startPos.y * devicePixelRatio, (currentX - startPos.x * devicePixelRatio), (currentY - startPos.y * devicePixelRatio));
          
          ctx.strokeStyle = 'rgba(69,154,255,1)';
          ctx.lineWidth = 1.5; 
          ctx.beginPath();
          ctx.rect(startPos.x * devicePixelRatio, startPos.y * devicePixelRatio, (currentX - startPos.x * devicePixelRatio), (currentY - startPos.y * devicePixelRatio));
          ctx.stroke();
        }
      }
  };

  const handleMouseUp = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height); 
      }
    }
    setIsDrawing(false);
  };

  return (
    <canvas
        ref={canvasRef}
        style={{ width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
    />  
  );
};

export default Canvas;