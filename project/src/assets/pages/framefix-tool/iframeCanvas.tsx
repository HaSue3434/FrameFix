import React, { useImperativeHandle, forwardRef, useRef, useState, useEffect, CSSProperties, RefObject} from "react";
import Styles from './framefix.module.css';
import Cusor from './icons/cursor-icon/cursor.svg';
import Cursor from './icons/cursor-icon/cursor.svg';




export const IframeCanvas:React.FC = () =>{
    
    const [position, setPosition] = useState({ top: 0, left: 0, scale: 1, originX: 0, originY: 0 });
    const posRef = useRef({ x: 0, y: 0 });
    const layerSCRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef(false);
    const draggCursor = useRef<HTMLDivElement>(null);

    const updatePosition = (scale: number, clientX: number, clientY: number, rect: DOMRect, oldOriginX: number, oldOriginY: number) => {
        const newOriginX = (clientX - rect.left) / rect.width;
        const newOriginY = (clientY - rect.top) / rect.height;
        
        const newLeft = (rect.width * scale - rect.width) * -newOriginX;
        const newTop = (rect.height * scale - rect.height) * -newOriginY;
    
        return { newLeft, newTop, originX: newOriginX, originY: newOriginY };
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        if (e.button === 1 && layerSCRef.current) {
            const rect = layerSCRef.current.getBoundingClientRect();
            posRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
            draggingRef.current = true;
            draggCursor.current!.style.cursor = "grab";
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (draggingRef.current && layerSCRef.current) {
            const rect = layerSCRef.current.getBoundingClientRect();

            const deltaX = e.clientX - (rect.left + posRef.current.x);
            const deltaY = e.clientY - (rect.top + posRef.current.y);
            console.log("Mouse Move Delta:", { deltaX, deltaY }); 
            setPosition(prev => ({
                ...prev,
                left: prev.left + deltaX,
                top: prev.top + deltaY,
            }));
            posRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        }
    };

    const handleMouseUp = () => {
        draggingRef.current = false;
        draggCursor.current!.style.cursor = 'auto';
        
    };

    const handleWheel = (e: WheelEvent) => {
        if (e.ctrlKey && canvasRef.current) {
            e.preventDefault();
            const rect = canvasRef.current.getBoundingClientRect();
            const scaleDelta = e.deltaY > 0 ? 0.9 : 1.1;
            
            const { newTop,newLeft,originX, originY } = updatePosition(
                position.scale * scaleDelta, 
                e.clientX,
                e.clientY,
                rect, 
                position.originX,
                position.originY
            );
            setPosition(prev => ({
                ...prev,
                top: prev.top,
                left: prev.left,
                scale: prev.scale * scaleDelta,
                originX : originX * 100,
                originY : originY * 100,
            }));
        }
    };

    useEffect(() => {
        const currentDraggCursor = draggCursor.current;
        const handleMouseLeave = () => {
            draggingRef.current = false;
        };

        currentDraggCursor?.addEventListener('wheel', handleWheel);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            currentDraggCursor?.removeEventListener('wheel', handleWheel);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return(
        <>
        <div className={Styles.canvasEditorContain} 
        ref={draggCursor}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}>
            
            <Canvas ref={canvasRef}/>
            
            <div className={Styles.stylesLayer} >
                
                <div className={Styles.layerSC} ref={layerSCRef}>
                    <div className={Styles.canvasEditor} 
                        style={{
                            top: `${position.top}px`,
                            left: `${position.left}px`,
                            transform: `scale(${position.scale}) translateZ(0px)`,
                            transformOrigin: `${position.originX}px ${position.originY}px`
                        }}>
                        <div className={Styles.editor}>
                            <div className={`${Styles.frame1}`}  data-frame-layer = "frame1">
                                <div className={Styles.boardName}><p>frame1</p></div>
                                <div data-frame = "frame" className={Styles.boardFrame}></div>
                            </div>
                            <div className={`${Styles.frame2}`}  data-frame-layer = "frame2">
                                <div className={Styles.boardName}><p>frame2</p></div>
                                <div data-frame = "frame" className={Styles.boardFrame}></div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
            
        </>
    )
}

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