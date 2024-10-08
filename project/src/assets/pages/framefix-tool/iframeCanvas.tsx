import React, { useRef, useState, useEffect } from "react";
import Styles from './framefix.module.css';
import Cursor from './icons/cursor-icon/cursor.svg';
import { Canvas } from './canvasProps';
import Frame from "./canvas-editor/canvas-editor"

export const IframeCanvas:React.FC = () => {
    
    const [position, setPosition] = useState({ top: 0, left: 0, scale: 1, originX: 0, originY: 0 });
    const posRef = useRef<{ x: number; y: number; originX: number; originY: number; }>({ x: 0, y: 0, originX: 0, originY: 0 });
    const layerSCRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef(false);
    const draggCursor = useRef<HTMLDivElement>(null);
    const [ canvasState , setCanvasState ] = useState(false);
    const editor = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).tagName.toLowerCase() === 'input') {
            return; 
        }
        e.preventDefault();
        if (e.button === 1 && layerSCRef.current) {
            const rect = layerSCRef.current.getBoundingClientRect();
            posRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                originX: e.clientX, 
                originY: e.clientY, 
            };
            draggingRef.current = true;
            draggCursor.current!.style.cursor = "grab";
        }
        else if(e.button === 0){
            setCanvasState(true);
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (draggingRef.current && layerSCRef.current) {
            const rect = layerSCRef.current.getBoundingClientRect();
            const deltaX = e.clientX - (rect.left + posRef.current.x);
            const deltaY = e.clientY - (rect.top + posRef.current.y);

            setPosition(prev => ({
                ...prev,
                left: prev.left + deltaX,
                top: prev.top + deltaY,
                originX: prev.originX + deltaX, 
                originY: prev.originY + deltaY, 
            }));
            posRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,

                originX: e.clientX, 
                originY: e.clientY, 
            };
        }
    };

    const handleMouseUp = () => {
        draggingRef.current = false;
        draggCursor.current!.style.cursor = `url(${Cursor}), auto`;
        setCanvasState(false);
    };

    const handleWheel = (e: WheelEvent) => {
        const deltaY = e.deltaY;
        const speedFactor = 0.5; 
    
        if (canvasRef.current && !e.ctrlKey) {
            e.preventDefault(); 
        
            setPosition(prev => ({
                ...prev,
                top: prev.top - (deltaY * speedFactor), 
                originY: prev.originY - (deltaY * speedFactor),  
            }));
        }
        if (e.ctrlKey && canvasRef.current) {
            e.preventDefault(); 
            const rect = canvasRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const scaleDelta = deltaY > 0 ? 0.9 : 1.1; 

            setPosition(prev => {
                const newScale = Math.min(5, Math.max(0.05, prev.scale * scaleDelta));
                return {
                    ...prev,
                    scale: newScale,
                    left: prev.left - (mouseX - prev.left) * (newScale / prev.scale - 1),
                    top: prev.top - (mouseY - prev.top) * (newScale / prev.scale - 1),
                    originX: prev.originX + (mouseX - prev.left) * (1 - newScale / prev.scale),
                    originY: prev.originY + (mouseY - prev.top) * (1 - newScale / prev.scale),
                };
            });
        }
    };

    useEffect(() => {
        const currentDraggCursor = draggCursor.current;
        const handleMouseLeave = () => {
            draggingRef.current = false;
            
        };

        currentDraggCursor?.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            currentDraggCursor?.removeEventListener('wheel', handleWheel);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [canvasState]);

    const handleElementMouseDown = (e: MouseEvent) => {
        if (e.ctrlKey && e.button === 0) {
            const target = e.target as HTMLElement;
    
            const editorElement = editor.current;
            if (editorElement) {
                const elements = editorElement.querySelectorAll('[data-node-type]');
                elements.forEach(element => {
                    console.log(element)
                    element.classList.add(`${Styles.frameActive}`);
                    element.addEventListener('mousedown', handleElementMouseDown as EventListener);
                    
                });
                
            }
        }
    };
    useEffect(() => {
        const editorElement = editor.current;
        if (!editorElement) return;
            const handleMouseDown = (e: MouseEvent) => {
                
            if (e.target && e.target instanceof HTMLElement && e.target.closest('.editor')) {
                return;
            }
            handleElementMouseDown(e);
        };
            editorElement.addEventListener('mousedown', handleMouseDown);
    
        return () => {
            editorElement.removeEventListener('mousedown', handleMouseDown);
        };
    }, [editor]);

    return(
        <>
        <div className={Styles.canvasEditorContain} 
        ref={draggCursor}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}>
            <div className={Styles.stylesLayer} >
                
                <div className={Styles.layerSC} ref={layerSCRef}>
                    <Canvas ref={canvasRef}/>
                    
                    <div className={Styles.canvasEditor} 
                        style={{
                            top: `${position.top}px`,
                            left: `${position.left}px`,
                            transform: `scale(${position.scale}) translateZ(0px)`,
                            transformOrigin: `${position.originX}% ${position.originY}%`
                        }} data-canvas-editor = "canvas-editor">
                        <div className={Styles.editor} ref={editor} data-editor = "editor">
                            <Frame/>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
            
        </>
    )
}