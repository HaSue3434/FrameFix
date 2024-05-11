import React, { useEffect, useRef, useState } from "react";
import Canvas from './canvasProps';
import Styles from './framefix.module.css';
import Cusor from './icons/cursor-icon/cursor.svg';

export const IframeCanvas:React.FC = () =>{
    const [position, setPosition] = useState({ top: 0, left: 0, width: '100%', height: '100%' });
    const posRef = useRef({ x: 0, y: 0 });
    const draggingRef = useRef(false);
    const draggCursor = useRef<HTMLDivElement>(null);
    const zIndexCanvasEditor = useRef<HTMLDivElement>(null);
    const drawingCanvas  = useRef<HTMLDivElement>(null);


    const handleMouseDown = (e: any) => {
        if (e.button === 1) {  
            
            e.preventDefault();
            e.stopPropagation(); 
            posRef.current = {
                x: e.clientX - position.left,
                y: e.clientY - position.top
            };
            draggingRef.current = true;
            if(draggCursor.current){
                const current  = draggCursor.current;
                current.style.cursor = "grab";
            }
        }
        if (e.button === 0) { // Left mouse button
            e.preventDefault();
            if (drawingCanvas.current && zIndexCanvasEditor.current) {
                drawingCanvas.current.style.zIndex = "3";
                zIndexCanvasEditor.current.style.zIndex = "0";
            }
        }
        
    };

    const handleMouseMove = (e: any) => {
        if (draggingRef.current) {
            const newLeft = e.clientX - posRef.current.x;
            const newTop = e.clientY - posRef.current.y;
            const newWidth = Math.max(100, 100 + newLeft); 
            const newHeight = Math.max(100, 100 + newTop); 
            setPosition({ left: newLeft, top: newTop, width: `${newWidth}%`, height: `${newHeight}%` });
        }
    };

    const handleMouseUp = () => {

        draggingRef.current = false;
        if(draggCursor.current){
            const current  = draggCursor.current;
            current.style.cursor = `url(${Cusor}), auto`;
        }
        if (drawingCanvas.current && zIndexCanvasEditor.current) {
            drawingCanvas.current.style.zIndex = "0";
            zIndexCanvasEditor.current.style.zIndex = "1";
        }
    };

    useEffect(() => {
        const handleMouseLeave = () => {

            draggingRef.current = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return(
        <>
        <div className={Styles.canvasEditorContain} ref={draggCursor}>
            <div className={Styles.drawingCanvas} ref={drawingCanvas}>
                <Canvas/>
            </div>
            <div className={Styles.stylesLayer}>
                
                <div className={Styles.layerSC}
                ref={zIndexCanvasEditor} 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp} >
                    
                    <div className={Styles.canvasEditor} 
                        style={{ top: `${position.top}px`, left: `${position.left}px` }}>
                        <div className={Styles.editor}>
                            <div className={`${Styles.frame}`} data-frame = "frame" data-frame-layer = "frame1">

                            </div>
                            <div className={`${Styles.frame}`} data-frame = "frame" data-frame-layer = "frame1">

                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
            
        </>
    )
}
export default IframeCanvas