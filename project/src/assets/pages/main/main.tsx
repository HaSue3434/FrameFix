import React, {useEffect, useState,useRef} from 'react';
import ScrollSmootherComponent from "./ScrollSmoother"
import './main.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// svg
import {ReactComponent as ColLogo } from "../../img/logo/column-logo.svg";
import {ReactComponent as Prompt  }  from '../../img/icons/prompt.svg';
import {ReactComponent as Create  }  from '../../img/icons/create.svg';
import {ReactComponent as Keyword }  from '../../img/icons/keyword.svg';
import {ReactComponent as Element }  from '../../img/icons/element.svg';
import {ReactComponent as Publish }  from '../../img/icons/publish.svg';
import {ReactComponent as Home }  from '../../img/icons/home.svg';
import {ReactComponent as Pencil }  from '../../img/icons/pencil.svg';
import {ReactComponent as Community }  from '../../img/icons/community.svg';
import {ReactComponent as Library }  from '../../img/icons/library icon.svg';
import {ReactComponent as Favorite }  from '../../img/icons/favorite.svg';
import {ReactComponent as Flows }  from '../../img/icons/flows icon.svg';
import {ReactComponent as Share }  from '../../img/icons/share.svg';
import {ReactComponent as URL }  from '../../img/icons/url.svg';
import {ReactComponent as Heart }  from '../../img/icons/heart.svg';
import {ReactComponent as View }  from '../../img/icons/user-view.svg';
import {ReactComponent as Substract }  from '../../img/Subtract.svg';
// svg 

/* page import */
import DefaultUI from "./slider/project-maker";
import "./slider/project-maker.css";

/* page import */

/* module */
import {
    useTypingEffect,
    TxtAnimation,
    useInViewMainSpring,
    useInViewExContentSpring,
} from './script';
/* module */

gsap.registerPlugin(ScrollTrigger);

function Main(){  

    const [ref1, controls1] = useInViewMainSpring(); 
    const [ref2, controls2] = useInViewExContentSpring(); 



    const [triggerMetaTitle, setTriggerMeta1] = useState(false);
    const [triggerMetaURL, setTriggerMeta2] = useState(false);
    const [triggerMetaDescription, setTriggerMeta3] = useState(false);
    const [triggerMetaSubTitle, setTriggerMeta4] = useState(false);

    const { typedText: metaTitle, isCompleted: isCompleted1 } = useTypingEffect(triggerMetaTitle ? "FrameFix" : "", 50);
    const { typedText: metaUrl, isCompleted: isCompleted2 } = useTypingEffect(triggerMetaURL ? "FrameFix.com" : "", 50);
    const { typedText: metaDescription, isCompleted: isCompleted3 } = useTypingEffect(
        triggerMetaDescription ? "Framefix leads in revolutionizing web design by leveraging AI to provide unique design references and innovative creations inspired by these insights." : "", 10
    );
    const { typedText: metaSubTitle, isCompleted: isCompleted4 } = useTypingEffect(triggerMetaSubTitle ? "FrameFix canvas tool" : "", 10);

    useEffect(()=>{

       
    },[])

    const [startAnimation, setStartAnimation] = useState(false);
    const items = ['ai-powered', 'canvas', 'code-Converts', 'publish'];
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: custom * 0.1, duration: 1, ease: "anticipate" }
        }),
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 600); 
        return () => clearTimeout(timer);
    }, []);


    const [scale, setScale] = useState(1);

    return (
        <ScrollSmootherComponent>
        <>
        

        <section className='main' data-scroll data-scroll-section>
            <div className='wrapper'>
                <div className='main'>
                    <div className='title'>
                        <div>
                            <motion.h1
                                initial={{ 
                                    opacity: 0,
                                    y : 50
                                }} 
                                animate={{ 
                                    opacity: 1,
                                    y : 0,
                                    
                                }}
                                transition={{ 
                                    duration: 1,
                                    ease: "anticipate",
                                }}
                            >the
                            </motion.h1>
                        </div>
                        <div>
                            <motion.h1
                            initial={{ 
                                opacity: 0,
                                y : 50
                            }} 
                            animate={{ 
                                opacity: 1,
                                y : 0,
                                
                            }}

                            transition={{ 
                                duration: 1,
                                delay : 0.2,
                                ease: "anticipate",
                            }}
                            >smarter.</motion.h1>
                        </div>
                    </div>
                    <motion.div
                    initial={{ 
                        opacity: 0,
                        x : -50
                    }} 
                    animate={{ 
                        opacity: 1,
                        x : 0,
                        
                    }}
                    transition={{ 
                        duration: 1,
                        delay : 0.5,
                        ease: "anticipate",
                    }}
                    className='description'>
                        <div className='txt'>
                            <p>Leverage AI for a transformative design workflow: create effortlessly and deploy with a single click, streamlining your process and speeding up idea realization.</p>
                        </div>
                        <div className='start-framefix'>
                            <Link to="/file/framefix">
                                Start FrameFix
                            </Link>
                        </div>
                    </motion.div>
                    <div className='slider'>
                        {items.map((item, index) => (
                        <motion.div
                            key={item}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate={startAnimation ? "visible" : "hidden"}
                            onClick={() => setActiveIndex(index)} 
                            className={`item ${activeIndex === index ? 'active' : ''}`} 
                        >
                            {item}
                        </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                ref={ref1 as React.Ref<HTMLDivElement>}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={controls1}

                className="main-framefix">
                    <div className="frame">
                        <DefaultUI />
                    </div>
                </motion.div>
                
            </div>
            <div className="background"></div>
            <div className='txt-back-contain'>
                <TxtAnimation text='AI-POWERED BUILD WEBSITES'/>
            </div>
        </section>
        <section className='ai-powered-contain' 
        data-scroll 
        data-scroll-section 
        
        >
            
            <div className='wrapper'>
                <div className='txt-contents' id='ai-powered' data-scroll-call = "pinTrigger">
                    <div className="ai-powered wrap">
                        <div className="side-contain "
                             data-scroll
                             data-scroll-sticky
                             data-scroll-target = "#ai-powered"
                             data-scroll-class = "is-inview"
                        >

                            <div className="title">
                                <h1>AI-Powered prompt support</h1>
                            </div>
                            <div className="features">
                                <div className='feature active'>
                                    <div className="content">
                                        <div className='icon'>
                                           <Prompt />
                                        </div>
                                        <div className='prompt txt'>
                                            <p>prompt</p>
                                        </div>
                                    </div>
                                    <div className='description'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>

                                </div>
                                <div className='feature'>
                                    <div className="content">
                                        <div className='icon'>
                                            <Create />
                                        </div>
                                        <div className='create txt'>
                                            <p>create image</p>
                                        </div>
                                    </div>
                                    <div className='description'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className='feature'>
                                    <div className="content">
                                        <div className='icon'>
                                            <Keyword />
                                        </div>
                                        <div className='keyword txt'>
                                            <p>keyword</p>
                                        </div>
                                    </div>
                                    <div className='description'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="start-framefix">

                                <div className='btn'>
                                    <Link to='/'>
                                        <div>
                                         Start FrameFix
                                        </div>
                                   </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='quickly wrap' id='quickly'>
                        <div className="side-contain"
                             data-scroll
                             data-scroll-call = "quicklyTrigger"
                             data-scroll-class = "is-inview">

                            <div className="title">
                                <h1>Quickly build design</h1>
                            </div>
                            <div className="features">
                                <div className='feature active'>
                                    <div className="content">
                                        <div className='icon'>
                                           <Prompt />
                                        </div>
                                        <div className='prompt txt'>
                                            <p>prompt</p>
                                        </div>
                                    </div>
                                    <div className='description'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>

                                </div>
                                <div className='feature'>
                                    <div className="content">
                                        <div className='icon'>
                                            <Create />
                                        </div>
                                        <div className='create txt'>
                                            <p>create image</p>
                                        </div>
                                    </div>
                                    <div className='description'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className='feature'>
                                    <div className="content">
                                        <div className='icon'>
                                            <Keyword />
                                        </div>
                                        <div className='keyword txt'>
                                            <p>keyword</p>
                                        </div>
                                    </div>
                                    <div className='description'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='framefix-designtool' data-scroll>

                    <div id='first'  className='framefix-tool' data-scroll
                data-scroll-sticky
                data-scroll-target = ".txt-contents"></div>
                    <div id='second' className='framefix-tool' data-scroll
                data-scroll-sticky
                data-scroll-target = ".txt-contents"></div>
                    <div id='last'   className='framefix-tool' data-scroll
                data-scroll-sticky
                data-scroll-target = ".txt-contents"></div>
                </div>
                
            </div>
        </section>
        <section className='publish' data-scroll data-scroll-section>
            <div className='wrapper'>
                <div className='txt'>
                    <div className='title'
                    data-scroll
                    data-scroll-speed = "2">
                        <motion.h1
                        >Quickly Deploy with a Single Click.</motion.h1>
                    </div>
                </div>

                <div className='description'>
                    <p>Experience swift and efficient website deployment with just a click. Launch your online presence easily without hassle.</p>
                </div>
            </div>
            
            <div className='publish-ex'>
                <div className='contents'>
                    <div className='left-content'></div>
                    <div className='right-content'></div>
                </div>
            </div>
        </section>
        <section className='seo-contain' data-scroll data-scroll-section>
            <div className='wrapper'>
                <div className='txt-contain'
                data-scroll
                data-scroll-speed = "-3"
                >
                    <div className='wrap'>
                        <div className='title'
                        data-scroll
                        data-scroll-call = "seoTriggerLink">

                            <h1>Search Engine Optimization</h1>
                        </div>
                        <div className='explain'>
                            <p>FrameFix enables swift and effortless discovery through an optimized search engine.</p>
                        </div>
                    </div>
                </div>
                <div className='seo-contents'>
                    <div className='contain'>
                        <div className="in">
                            <div>
                                
                            </div>
                        </div>
                        <div className="out"></div>
                    </div>
                </div>
                <div className="deco-f">

                </div>
            </div>
        </section>
        <section className="community" data-scroll data-scroll-section>
            <div className='wrapper'>
                <div className="community-title">
                    <div className="txt"
                    data-scroll
                    data-scroll-speed = "2">
                        <motion.h1
                        
                        >Boost brand with community.</motion.h1>
                    </div>
                </div>
                
                <div className="contents">
                    <div className="description">
                        <p>Strengthen your branding in just seconds through community engagement.</p>
                    </div>
                    <div className='wrap'>
                        <div className='item1'>
                            <div className='user-project-contain'>
                                <div>
                                    <div className="content-main-txt">
                                        <div className='content-title'><h1>The Smarter</h1></div>
                                        <div className='content-explain'>
                                            <div className='t'>
                                                <p>Leverage AI for a transformative design workflow: create effortlessly and deploy with a single click, streamlining your process and speeding up idea realization.</p>
                                            </div>
                                            <div className='btn'>Start FrameFix</div>
                                        </div>
                                        <div className='content-slider'>
                                            <div>AI-powered</div>
                                            <div>Canvas</div>
                                            <div>Code-converts</div>
                                            <div>Publish</div>
                                        </div>
                                    </div>
                                    <motion.div 
                                    ref={ref2 as React.Ref<HTMLDivElement>}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={controls2}

                                    className='content-main-banner'>
                                        <div>
                                            <div className="banner-title">
                                                <motion.h1
                                                data-scroll
                                                data-scroll-call = "triggerScale"
                                                data-scroll-repeat
                                                >AI-powered the smarter</motion.h1>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div>d2</div>
                            <div>d3</div>
                        </div>
                        <div className='item3'>
                            <div className='contents'>
                               <div>

                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className='framefix-footer' data-scroll data-scroll-section>
            
        </section>
        
        </>
        </ScrollSmootherComponent>
    );
}
export default Main