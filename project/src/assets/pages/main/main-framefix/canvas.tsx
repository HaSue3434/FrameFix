import React,{useEffect, useRef} from "react";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import {ReactComponent as MainCanvas} from "../../../img/main-canvas.svg"


const Canvas: React.FC = ()=>{
      
    const canvasFrame = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        if(!canvasFrame.current) return;

        const t1 = gsap.timeline();

        let ctx = gsap.context(()=>{


        })
        return () => ctx.revert();
    },[])

    return(
        <>
            <motion.div className="canvas">
                <div className="main-editor">
                    <MainCanvas/>
                </div>
                
            </motion.div>
        </>
    )
}
export default Canvas;
