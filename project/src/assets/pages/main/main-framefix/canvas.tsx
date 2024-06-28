import React,{useEffect, useRef} from "react";
import { motion } from 'framer-motion';
import {ReactComponent as CanvasImg} from "../../../img/main-canvas-img.svg";
import {ReactComponent as FrameToolbar} from "../../../img/frame-toolbar-icon.svg";
import { gsap } from 'gsap';



const Canvas: React.FC = ()=>{
      
    const canvasFrame = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        if(!canvasFrame.current) return;

        const t1 = gsap.timeline();

        let ctx = gsap.context(()=>{

            t1.from(canvasFrame.current,{
                rotateX : 15,
                translateY : -150,
                translateZ : -150,
                opacity : 1,
                scrollTrigger : {
                    trigger : canvasFrame.current,
                    start : "-45% 50%",
                    end : "60% 50%",
                    scrub : 1,
                },
                ease : "power1.InOut"
            })

        })
        return () => ctx.revert();
    },[])

    return(
        <>
            <motion.div 
            
            className="framefix-ui">
                <motion.div
                initial = {{opacity : 0, background : "#000"}}
                animate = {{opacity : 1, background : "#1B1B1B"}}
                transition={{duration : 1, ease : "anticipate"}}
                >
                    <div className="ui-head">

                    </div>
                    <div className="ui-body">
                        <div className="plugins side-comm">
                            
                        </div>
                        <div className="styles side-comm">
                            
                        </div>
                        <motion.div className="canvas-editor">
                            <motion.div 
                            
                            className="frame1" ref={canvasFrame}>
                                <div className="head-selected-frame">
                                    <div className="frame-title">
                                        <p><span className="desktop"></span>Desktop frame</p>
                                        
                                    </div>
                                    <div className="frame-toolbar-selection"><FrameToolbar/></div>
                                </div>
                                <CanvasImg/>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
export default Canvas;
