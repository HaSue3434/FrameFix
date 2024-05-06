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
    const context = canvas?.getContext('2d');
    if (canvas && context) {
        canvas.width = canvasSize.width;
        canvas.height = canvasSize.height;
        context.fillStyle = 'rgba(69,154,255,.15)';  
        context.strokeStyle = 'rgba(69,154,255,1)';


        context.beginPath(); 
        context.rect(10, 10, 100, 50); 
        context.fill();  
        context.stroke();
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
      const currentX = event.clientX - rect.left;
      const currentY = event.clientY - rect.top;
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
        ctx.fillRect(startPos.x, startPos.y, currentX - startPos.x, currentY - startPos.y);
        ctx.beginPath();
        ctx.lineWidth =1; // 테두리 두께 설정
        ctx.fillStyle = 'rgba(69,154,255,.05)'; // 내부 채울 색 지정
        ctx.strokeStyle = 'rgba(69,154,255,1)'; // 테두리 색 지정
        ctx.rect(startPos.x, startPos.y, currentX - startPos.x, currentY - startPos.y);
        ctx.stroke(); // 테두리 그리기
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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
    />
  );
};

export default Canvas;