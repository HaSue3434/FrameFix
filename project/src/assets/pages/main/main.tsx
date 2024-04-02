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
// svg 

/* page import */
import DefaultUI from "./slider/project-maker";
import "./slider/project-maker.css";

/* page import */

/* module */
import { useTypingEffect } from './script';
/* module */

gsap.registerPlugin(ScrollTrigger);

function Main(){    
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const mainFrameFixAnimation = useRef<HTMLDivElement>(null);

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

        gsap.to(scrollContainerRef.current,{
            scrollTrigger : {
                trigger : scrollContainerRef.current,
                start  : "25% 50%",
                end : "80% 80%",
                onEnter : ()=>{
                    setTriggerMeta1(true);
                    setTriggerMeta2(true);
                    setTriggerMeta3(true);
                    setTriggerMeta4(true);
                },
                onLeaveBack : ()=>{
                    setTriggerMeta1(false);
                    setTriggerMeta2(false);
                    setTriggerMeta3(false);
                    setTriggerMeta4(false);
                },
                onEnterBack : ()=>{
                    setTriggerMeta1(true);
                    setTriggerMeta2(true);
                    setTriggerMeta3(true);
                    setTriggerMeta4(true);
                }
            }
            
            
        });
    },[])

    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                scale: 1,
                
                transition: { type: 'spring', stiffness: 100, damping: 10}
            });
        } else {
            controls.start({ opacity: 0, scale: 0.5 });
        }
    }, [controls, inView]);

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
                            <Link to="/">
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
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                className="main-framefix">
                    <div className="frame">
                        <DefaultUI />
                    </div>
                </motion.div>
                <div className='back'>
                    
                </div>
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
                                <h1><strong>AI-Powered</strong> prompt support</h1>
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
                                <h1><strong>Quickly</strong> build design</h1>
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
                </div>
                <div className='framefix-designtool' data-scroll 
                
                >

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
        <section className='publish' data-scroll data-scroll-section
        >
            <div className='wrapper'>
                <div className="publish-txt"
                    data-scroll
                    data-scroll-class = "is-inview"
                >
                    <div className='publish-icon'>
                        <div className='icon'>
                            <Publish />
                        </div>
                        <div className='tag'>
                            <span>Publish</span>
                        </div>
                    </div>
                    <div className='txt'>
                        <h1>
                            <span>Deploy Your Website</span>  Effortlessly With Just a Single Click
                        </h1>
                    </div>
                    <div className='start-framefix'>
                        <Link to="/">
                            <div className="btn">
                                Start FrameFix
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='publish-ex'>
                <div className='contents'>
                    <div className='left-content'></div>
                    <div className='right-content'></div>
                </div>
            </div>
        </section>
        <section className='seo-contain'  data-scroll data-scroll-section  ref={scrollContainerRef}>
            <div className="contents"
                >
                <div id='pin'>
                    <div className='seo-t' id = "pin-seo"
                        data-scroll
                        data-scroll-speed ="-4"
                        data-scroll-class = "is-inview">
                        <div className="title">
                            <h1>Search Engine Optimization</h1>
                        </div>
                        <div className="sub-title">
                            <p>FrameFix enables swift and effortless discovery through an optimized search engine.</p>
                        </div>
                        <div className="lead-more">
                            <Link to="/">
                                <div className="btn">
                                    <div>Lead More</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='framefix-cards' id='framefix-seo'
                        data-scroll
                    >

                        <div className='wrapper'

                            data-scrorll
                            data-scroll-speed = "-4">
                            
                            <div className='left contain'>
                                <Link to={'/'}>
                                <div className='small'>
                                    <p className='sementics'>Sementics</p>
                                    <div className='view-ex'>
                                        <div>
                                            <div
                                                data-scroll
                                                data-scroll-speed="-1"
                                                data-scroll-direction = "horizontal"
                                                data-scroll-class = "is-inview"
                                                className='horizontal-sementics'
                                            >
                                                <span>h1 </span><span>h2 </span><span>h1</span><span>div</span><span>header</span>
                                            </div>
                                            
                                            <div className="blur left"></div>
                                            <div className="blur right"></div>
                                        </div>
                                        
                                    </div>
                                </div>
                                </Link>
                                <Link to={'/'}>
                                <div className="big metadata-contain" data-scroll data-scroll-call="typing">
                                    <p className='metadata'>Metadata</p>
                                    <div className="meta-settings">
                                        <div className='head'>
                                            <div className='title fadeout' data-scroll data-scroll-class =  "is-inview">
                                                <p>Settings</p>
                                            </div>
                                            <div className='save'>Save</div>
                                        </div>
                                        <div className='setting'>
                                            <div className='meta-title-url'>
                                                <div className='meta-title'>
                                                    <p>Title</p>
                                                    <div className='user-input'>
                                                        <input type="text"  data-scroll data-scroll-call = "trigger1" value={metaTitle} readOnly/>
                                                    </div>
                                                </div>
                                                <div className='meta-url'>
                                                    <p>URL</p>
                                                    <div className='user-input'>
                                                        <input type="text" value={metaUrl} readOnly data-scroll data-scroll-call = "trigger2"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='meta-description'>
                                                <p>Meta Description</p>
                                                <div className='textarea'>
                                                    <textarea  value={metaDescription} readOnly data-scroll data-scroll-call = "trigger3"/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='ex-view '>
                                        
                                        <div className="txt-box"></div>
                                        <div className="txt-box"></div>
                                        <div className='open-graph'>
                                            <div className="txt">
                                                <div className='head'>
                                                    <div className='favicon'>
                                                        <img src={require("../../img/meta-data.png")} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className='site-title'>FrameFix</p>
                                                        <p className='site-url'>www.framefix.com</p>
                                                    </div>
                                                    
                                                </div>
                                                <div className='site-infor'>
                                                    <div className='sub-title'><p>{metaSubTitle}</p></div>
                                                    <div className='description'><p>{metaDescription}</p></div>
                                                </div>
                                            </div>
                                            <div className='graph'>
                                                <div className='meta-image'>
                                                    <img src={require('../../img/sample-img.jpg')} alt="" />
                                                </div>
                                                <div className='infor'>
                                                    <p className='title'>FrameFix</p>
                                                    <p className='description'>Framefix is at the forefront of revolut...</p>
                                                    <p className='url'>framefix.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='right contain'>
                                <Link to={'/'}>
                                <div className='big'>
                                    <p className='editing'>Simple editing</p>
                                    <div className='open-img'>
                                        <div className='img'>
                                            <img src={require("../../img/sample-img.jpg")} alt="" />
                                        </div>
                                        <div className='editing-content-box scale'
                                        >
                                            <div>
                                                <div className="head">
                                                    <div className="t">
                                                        <p>Image Settings</p>
                                                    </div>
                                                    <div className="save">
                                                        Save
                                                    </div>
                                                </div>
                                                <div className='settings'>
                                                    <div className='image'>
                                                        <div className='t'>
                                                            <p>Image</p>
                                                        </div>
                                                        <div className='img-contain'>
                                                            <div className='img-set'>
                                                                <div className='img'>
                                                                    <img src={require("../../img/sample-img.jpg")} alt="" />
                                                                </div>
                                                                <div className="set">
                                                                    <p className='img-name'>FrameFix</p>
                                                                    <p className='size'>1200 X 627px</p>
                                                                    <p className='b'>230.1KB</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="replace">
                                                                <p>Replace image</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='img-alt'>
                                                        <div className='t'>
                                                            <p>Alt name</p>
                                                            <div className='text-input'>
                                                                Open Graph
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='img-type'>
                                                        <div className='t'>
                                                            <p>Img type</p>
                                                            <div className='type-selections'>
                                                                <div>JPEG</div>
                                                                <div className='select'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
<path opacity="0.2" d="M6.34782 7.64449C5.9561 8.27078 5.0439 8.27078 4.65218 7.64449L0.827968 1.53028C0.411388 0.864244 0.890207 1.75746e-08 1.67579 -5.11034e-08L9.32421 -7.19749e-07C10.1098 -7.88427e-07 10.5886 0.864244 10.172 1.53028L6.34782 7.64449Z" fill="#D9D9D9"/>
</svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to={'/'}>
                                <div className='small'>
                                    <p className='sitemap'>Sitemap</p>
                                    <div className='view-ex'>
                                        <div>
                                            <div className='header'>
                                                <p>Sitemap Settings</p>
                                                <div className='save-btn'>
                                                      <div>Save</div>  
                                                </div>
                                            </div>
                                            <div className='check'>
                                                 <div className='checkbox'></div>
                                                 <div className='t'>Auto Sitemap</div>   
                                            </div>
                                            <div className='user-input'>
                                                <p>Custom Sitemap.xml</p>
                                                <div className="textarea">
                                                    <pre>
                                                            &lt;?xml version = "1.0" encoding = "UTF-8"? &gt; <br/>
                                                            &lt;urlset xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9"&gt;<br/>
                                                                &emsp;&lt;url&gt;<br/>
                                                                &emsp;&emsp;&lt;loc&lt;http://www.example.com/&lt;loc&gt;<br/>
                                                                &emsp;&emsp;&lt;lastmod&lt;2005-01-01&lt;lastmod&gt;<br/>
                                                                &emsp;&emsp;&lt;changefreq&lt;monthly&lt;changefreq&gt;<br/>
                                                                &emsp;&emsp;&lt;priority&lt;0.8&lt;priority&gt;<br/>
                                                                &emsp;&lt;url&gt;<br/>
                                                            &lt;/urlset&gt;
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="community" data-scroll data-scroll-section>
            <div className = "title">
                <center>
                    <h1>
                        <p
                            className='flip-event'
                            data-scroll
                            data-scroll-class= "is-inview">

                            Use the community to 
                        </p> 

                        <p
                            className='flip-event'
                            data-scroll
                            data-scroll-class= "is-inview">
                                
                               improve branding
                        </p>
                    </h1>
                </center>
            </div>
            <div className='contain'>
                <div className = "wrapper">
                    <div className='contain'>
                        <div className='contents'>
                            <div className='back'>
                                <div className='circle'></div>
                                <div className='circle'></div>
                                <div className='circle'></div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="back-tile" 
                data-scroll 
                data-scroll-class = "is-inview"

                >
                    <div className='logo'>
                        <ColLogo/>
                    </div>
                    <div className='btn'>
                        <Link to='/'>
                            <div>
                                Open Community
                            </div>
                        </Link>
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