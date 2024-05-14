import React, { useImperativeHandle, forwardRef, useRef, useState, useEffect, CSSProperties, RefObject} from "react";
import Styles from './framefix.module.css';
import Cusor from './icons/cursor-icon/cursor.svg';
import Cursor from './icons/cursor-icon/cursor.svg';




export const IframeCanvas:React.FC = () =>{
    
    const [position, setPosition] = useState({ top: 0, left: 0, width: '100%', height: '100%' });
    const posRef = useRef({ x: 0, y: 0 });
    const draggingRef = useRef(false);
    const draggCursor = useRef<HTMLDivElement>(null);
    const zIndexCanvasEditor = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);
    const [pointer,setPointer] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        
        if (e.button === 1) {
            
            e.preventDefault();

            posRef.current = {
                x: e.clientX - position.left,
                y: e.clientY - position.top
            };
            draggingRef.current = true;
            draggCursor.current!.style.cursor = "grab";
        
        } else if (e.button === 0) {

            setPointer(true);
        }
        

    };
    
    const handleMouseMove = (e: MouseEvent) => {
        if (draggingRef.current) {
            const newLeft = e.clientX - posRef.current.x;
            const newTop = e.clientY - posRef.current.y;
            setPosition({ left: newLeft, top: newTop, width: '100%', height: '100%' });
        }
        if(pointer){
            
            
        }
    };

    const handleMouseUp = () => {
        draggingRef.current = false;
        draggCursor.current!.style.cursor = `url(${Cursor}),auto`;
        setPointer(false)
    };

    const handleWheel = (e: WheelEvent) => {
        
        const delta = e.deltaY * 0.5;
        console.log(delta)
        setPosition(prev => ({
            ...prev, 
            top: prev.top - delta, width: '100%', height: '100%'
        }));
        
    };

    useEffect(() => {
        const currentDraggCursor = draggCursor.current;
        const handleMouseLeave = () => {
            draggingRef.current = false;
            setPointer(false);
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
    }, [pointer]);


    return(
        <>
        <div className={Styles.canvasEditorContain} 
        ref={draggCursor}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}>
            
            <Canvas ref={canvasRef}/>
            
            <div className={Styles.stylesLayer} >
                
                <div className={Styles.layerSC} ref={zIndexCanvasEditor}>
                    <div className={Styles.canvasEditor} 
                        style={{ top: `${position.top}px`, left: `${position.left}px` }}>
                        <div className={Styles.editor}>
                            <div className={`${Styles.frame}`} data-frame = "frame" data-frame-layer = "frame1">

                            </div>
                            <div className={`${Styles.frame}`} data-frame = "frame" data-frame-layer = "frame2">

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