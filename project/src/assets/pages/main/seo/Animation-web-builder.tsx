import React, { useState, useEffect,useRef } from 'react';
import { motion, useAnimation, AnimationControls, } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const UseBuilderAnimations = (x : number = 0, y : number = 0, delay : number = 0, opacity : number = 1): [React.RefObject<HTMLDivElement>, AnimationControls] =>{
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView();

    useEffect(()=>{
        if(inView){

            controls.start({
                x : 0,
                y : 0,
                opacity : 1,
                transition : { delay : delay, ease : "anticipate"}
            });

        } else {
            controls.start({
                x : x,
                y : y,
                opacity : opacity,  
            })
        }
    },[controls, inView]);


    return [ref, controls];
}
export const UseBuilderAIAnimation = () =>{
    const controls = useAnimation();
    const ref = useRef<null[] | HTMLDivElement[]>([]);


    

}