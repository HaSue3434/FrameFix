import React, { useEffect } from "react";
import { useRef, useState } from "react";
import Styles from './framefix.module.css';
import Cursor from './icons/cursor-icon/cursor.svg';

interface CanvasProps {
    containerRef?: React.RefObject<HTMLDivElement>;
}

export const Canvas = React.forwardRef<HTMLDivElement, CanvasProps>((props, ref) => {
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

        const rect = canvasRef.current?.getBoundingClientRect();
        if(event.button === 0){
            if (rect) {
                setIsDrawing(true);
                setStartPos({
                    x: (event.clientX - rect.left) * window.devicePixelRatio,
                    y: (event.clientY - rect.top) * window.devicePixelRatio,
                });
            }
        }
        else if(event.button === 1){
            setIsMiddleButtonDown(true);
            canvasRef.current!.style.cursor = `grab`;
            setIsDrawing(false);
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                if (ctx) {
                    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                }
            }
        }
        
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (isMiddleButtonDown) return;
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
        <>
            <div id={Styles.canvas} ref={ref}>
                <canvas
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseOut={handleMouseUp}
                />
            </div>
        </>
       
    );
});