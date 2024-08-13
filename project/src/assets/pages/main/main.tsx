import React, { useEffect, useState, useRef} from 'react';

import ScrollSmootherComponent from "./ScrollSmoother";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

import { ReactComponent as Logo } from '../../img/logo/logo.svg';

// framfix icon //
import { ReactComponent as PinkCursor } from '../../img/pink-cursor.svg';
import { ReactComponent as BlueCursor } from '../../img/blue-cursor.svg';
// framfix icon //

import "./main-framefix/canvas.css"
import "./publish/publish.css"
import "./seo/web-builder-styles.css"
import "./framefix-footer/framefix-footer.css";

import Canvas from "./main-framefix/canvas";
import Seo from './seo/web-builder';
import FrameFixFooter from './framefix-footer/framefix-footer';


import {

    TxtAnimation,
    useInViewCursorScale,

} from './main-animation-script';
import Particles from './particle';

const Main = () => {



    const fullScreenRef = useRef<HTMLDivElement>(null);
    const f = useRef<SVGSVGElement>(null);
    const frameElement = useRef<HTMLDivElement>(null);
    const mainFrameFixWrapperRef = useRef<HTMLDivElement>(null);
    
    const [rotationX, setRotationX] = useState(7);
    const [rotationY, setRotationY] = useState();

    const t1 = gsap.timeline();

    
useEffect(() => {
    

    let tx = gsap.context(() => {

        t1.from(frameElement.current, {
            rotationX: 6,
            translateY: -200,
            scaleX : 0.85,
            scaleY : 0.85,
            scrollTrigger: {
                trigger: frameElement.current,
                start: "-65% 50%",
                end: "80% 50%",
                scrub: 10,
                toggleActions : "play none none restart"
                
            },
        });
    });
    
    return () => {
        
        tx.revert();
    };
    }, []);

    useEffect(() => {
        

        let ctx = gsap.context(() => {
           
            t1.to(f.current, {
                scrollTrigger: {
                    trigger: f.current,
                    start: "20% 50%",
                    end: "bottom 50%",
                    scrub: 1,
                    refreshPriority: 1,
                },
            });

            t1.from(fullScreenRef.current, {
                background: "rgba(0,0,0,0)",
                scrollTrigger: {
                    trigger: fullScreenRef.current,
                    start: "top 50%",
                    end: "40% 50%",
                    scrub: true,
                }
            });

            ScrollTrigger.refresh();
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };

        });
        return () => ctx.revert();
    }, []);


    return (
        <ScrollSmootherComponent>
            <>
                <section className='main' data-scroll data-scroll-section >
                    <div id="background">
                        <Particles/>
                    </div>
                    <div className='wrapper' ref={mainFrameFixWrapperRef}>
                        <div className="main-contents-txt">
                            <div className="title">
                                <div className='ai-powered'>
                                    <motion.div 
                                    initial = {{opacity : 0, y : 80}}
                                    animate = {{opacity : 1, y : 0}}
                                    transition={{duration : 1, ease : "backInOut"}}
                                    className='t'>
                                        <h1 className='color'>AI-POWERED</h1>
                                        <div className="d"></div>
                                    </motion.div>
                                    
                                    <motion.h1 
                                    initial = {{opacity : 0, y : 80}}
                                    animate = {{opacity : 1, y : 0}}
                                    transition={{duration : 1, ease : "backInOut",delay : 0.2,}}
                                    ><span>Turning</span> </motion.h1>
                                </div>
                                
                                <h1 className='ideas'>
                                <motion.span
                                initial = {{opacity : 0, y : 80}}
                                animate = {{opacity : 1, y : 0}}
                                transition={{duration : 1, ease : "backInOut",delay : 0.25,}}
                                >Ideas </motion.span> <motion.span
                                initial = {{opacity : 0, y : 80}}
                                animate = {{opacity : 1, y : 0}}
                                transition={{duration : 1, ease : "backInOut",delay : 0.3,}}>into</motion.span> <motion.span
                                initial = {{opacity : 0, y : 80}}
                                animate = {{opacity : 1, y : 0}}
                                transition={{duration : 1, ease : "backInOut",delay : 0.35,}}
                                >  Reality.</motion.span> </h1>
                            </div>
                            <div className="sub-title">
                                <motion.p
                                initial = {{opacity : 0, y : 50}}
                                animate = {{opacity : 1, y : 0}}
                                transition={{duration : 1, ease : 'backInOut', delay : 0.35}}
                                >With Framefix's canvas tool, you can easily <br></br> design and publish your work.</motion.p>
                            </div>
                            <motion.div 
                            initial = {{opacity : 0, y : 50}}
                            animate = {{opacity : 1, y : 0}}
                            transition={{duration : 1, ease : 'backInOut', delay : 0.45}}
                            className="link-to-dashboard">
                                <Link to={'./'}>
                                    Go to dashboard
                                </Link>
                            </motion.div>
                        </div>
                        {/* 
                        <motion.div
                            initial = {{rotateX : -10, }}
                            animate = {{rotateX : 10,}}
                            transition={{duration : 1, ease : "anticipate",}}
                            className="main-framefix">
                            <div className="frame" ref={frameElement} style={{ 
                                transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) `,
                                backfaceVisibility : "hidden",
                                willChange : "transform",
                                WebkitFontSmoothing : "subpixel-antialiased",
                                }}>
                                <Canvas/>
                            </div>
                        </motion.div>
                        */}
                        <div className="canvas-blur-back"><div></div></div>
                    </div>
                </section>

                <section data-scroll data-scroll-section className='f-g' id='f-g' ref={fullScreenRef}>
                    <div className="wrapper">
                        <div className="contain ref-c">

                        </div>
                    </div>
                </section>

                <section className="seo-contain" data-scroll data-scroll-section id='seo'>
                    <div className="wrapper">
                        <div className='contents'>
                            <Seo/>
                        </div>
                    </div>
                </section>

                <section className='framefix-footer' data-scroll data-scroll-section>

                    <div className='title'>
                        <div>
                            <div className="logo"><Logo/></div>
                            <h1>Get Started FrameFix</h1>
                            <p>Try using the FrameFix tool to easily build a website.</p>
                            <div className='btn'>
                                <Link to='./'>
                                    Start FrameFix
                                    <div className='next'></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='contents'>
                        <FrameFixFooter/>
                    </div>
                    
                    <div className="bottom-blur"></div>
                </section>
            </>
        </ScrollSmootherComponent>
    );
}
export default Main;
