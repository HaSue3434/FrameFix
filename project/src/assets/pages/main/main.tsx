import React, { useEffect, useState, useRef} from 'react';

import ScrollSmootherComponent from "./ScrollSmoother";
import { Link } from 'react-router-dom';
import { gsap,TimelineLite, Power2  } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { frame, motion} from 'framer-motion';

import FooterSection from "../../components/footer";
import { ReactComponent as Logo } from '../../img/logo/logo.svg';
import { ReactComponent as FrameLogo } from "../../img/logo/frame-logo.svg";
import { ReactComponent as NextArrow } from '../../img/icons/next-arrow.svg';

// framfix icon //
import { ReactComponent as Template } from '../../img/icons/framefix-plugin-icons/template.svg';
import { ReactComponent as Text } from '../../img/icons/framefix-plugin-icons/text.svg';
import { ReactComponent as Menus } from '../../img/icons/framefix-plugin-icons/menus.svg';
import { ReactComponent as Header } from '../../img/icons/framefix-plugin-icons/header.svg';
import { ReactComponent as Footer } from '../../img/icons/framefix-plugin-icons/footer.svg';
import { ReactComponent as Slides } from '../../img/icons/framefix-plugin-icons/slides.svg';
import { ReactComponent as Button } from '../../img/icons/framefix-plugin-icons/button.svg';
import { ReactComponent as Icons } from '../../img/icons/framefix-plugin-icons/icons.svg';
import { ReactComponent as Magic } from '../../img/icons/framefix-plugin-icons/magic.svg';
import { ReactComponent as Close } from '../../img/icons/framefix-plugin-icons/close.svg';
import { ReactComponent as Add } from '../../img/icons/framefix-plugin-icons/add.svg';
import { ReactComponent as AssetsBottomArrow } from '../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg';
import { ReactComponent as PageIcon } from '../../img/icons/framefix-plugin-icons/page-icon.svg';
import { ReactComponent as FrameIcon } from '../../img/icons/framefix-plugin-icons/layer-frame.svg';
import { ReactComponent as Rect } from '../../img/icons/framefix-plugin-icons/Rect.svg';
import { ReactComponent as Locked } from '../../img/icons/framefix-plugin-icons/locked.svg';
import { ReactComponent as Open } from '../../img/icons/framefix-plugin-icons/opened.svg';
import { ReactComponent as Settings } from '../../img/icons/framefix-plugin-icons/settings.svg';
import { ReactComponent as Preview } from '../../img/icons/framefix-plugin-icons/view.svg';
import { ReactComponent as Frame } from '../../img/icons/framefix-plugin-icons/frame.svg';
import { ReactComponent as Shape } from '../../img/icons/framefix-plugin-icons/shape.svg';
import { ReactComponent as Section } from '../../img/icons/framefix-plugin-icons/section.svg';
import { ReactComponent as Images } from '../../img/icons/framefix-plugin-icons/images.svg';
import { ReactComponent as PinkCursor } from '../../img/pink-cursor.svg';
import { ReactComponent as BlueCursor } from '../../img/blue-cursor.svg';
// framfix icon //

// framefix style icons //
import { ReactComponent as Rotation } from '../../img/icons/framefix-style-icons/rotation.svg';
import { ReactComponent as FlipVertical } from '../../img/icons/framefix-style-icons/flip-vertical.svg';
import { ReactComponent as FlipHorizontal } from '../../img/icons/framefix-style-icons/flip-horizontal.svg';
import { ReactComponent as Eye } from '../../img/icons/framefix-style-icons/eye.svg';
import { ReactComponent as DefaultAll } from '../../img/icons/framefix-style-icons/default-all.svg';
import { ReactComponent as PerSide } from '../../img/icons/framefix-style-icons/per-side.svg';
// framefix style icons //

import "./slider/canvas.css"
import "./framefix-g.css"
import "./publish/publish.css"
import "./seo/seo.css"

import Canvas from "./slider/canvas";
import Seo from './seo/seo';

import FrameFixGuide from './slider/framefix-g';

import {

    TxtAnimation,
    useInViewExContentSpring,
    useDelaySpring,
    useInViewCursorScale,

} from './animation-script';
import Particles from './particle';

const Main = () => {

    const [ref3, controls3] = useInViewExContentSpring();
    const [ref4, controls4] = useInViewExContentSpring();
    const [ref5, controls5] = useInViewExContentSpring();
    const [ref6, controls6] = useInViewExContentSpring();

    const [delayRef, delayControls] = useDelaySpring(0);

    const [cursorRefMainPink, setCursorPink] = useInViewCursorScale(200,-200);
    const [cursorRefMainBlue, setCursorBlue] = useInViewCursorScale(-250,45);
    
    const fullScreenRef = useRef<HTMLDivElement>(null);
    const f = useRef<SVGSVGElement>(null);
    const frameElement = useRef<HTMLDivElement>(null);
    const mainFrameFixWrapperRef = useRef<HTMLDivElement>(null);

    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState(0.8);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          const wrapper = frameElement.current;
          if (wrapper) {
            const wrapperRect = wrapper.getBoundingClientRect();
            const centerX = wrapperRect.left + wrapperRect.width / 2;
            const centerY = wrapperRect.top + wrapperRect.height / 2;

            const angleX = (event.clientY - centerY) / centerY * 1;
            const angleY = (event.clientX - centerX) / centerX * 1;

            const newRotationX = Math.min(Math.max(-1, angleX), 1) * 2; // Adjust the angle as needed
            const newRotationY = Math.min(Math.max(-1, angleY), 1) * 2; // Adjust the angle as needed

            gsap.to(wrapper, {
              rotationX: newRotationX,
              rotationY: newRotationY,
              duration: 0.5,
              scale : scale,
              ease: 'power2.out',
            });
          }
        };
      
        window.addEventListener('mousemove', handleMouseMove);
      
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, [scale]);

    useEffect(() => {
        const t1 = gsap.timeline();

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
            t1.to(cursorRefMainPink.current,{
                left : 500,
                top : -250,
                scrollTrigger : {
                    trigger : mainFrameFixWrapperRef.current,
                    start : "00% 50%",
                    end : '300% 50%',
                    scrub : 1,
                }
            })
            t1.to(cursorRefMainBlue.current,{
                right : 700,
                top : 700,
                scrollTrigger : {
                    trigger : mainFrameFixWrapperRef.current,
                    start : "00% 50%",
                    end : '300% 50%',
                    scrub : 1,
                }
            })
            t1.to(frameElement.current,{
                
                scrollTrigger : {
                    trigger : frameElement.current,
                    start : "-10% 50%",
                    end : "100% 50%",
                    scrub : true,
                    onEnter : () =>{
                        setScale(0.9);
                        t1.to(frameElement.current,{
                            scale : scale,
                        })
                    },
                    onLeaveBack : () =>{
                        setScale(0.8);
                        t1.to(frameElement.current,{
                            scale : scale,
                        })
                    }
                }
            })
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
                        <div className="bottom-blur"></div>
                    </div>
                    <div className='wrapper' ref={mainFrameFixWrapperRef}>
                        <div className="cursor">
                            <motion.div
                            ref = {cursorRefMainPink as React.Ref<HTMLDivElement>}
                            initial={{ opacity : 0, scale: 0.5 }}
                            animate = {setCursorPink}
                            className='pink-cursor c'><PinkCursor/></motion.div>

                            <motion.div 
                            ref = {cursorRefMainBlue as React.Ref<HTMLDivElement>}
                            initial={{ opacity : 0,scale: 0.5 }}
                            animate = {setCursorBlue}
                            className='blue-cursor c'><BlueCursor/></motion.div>
                        </div>
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
                                >We build easy and fast workflows through AI.</motion.p>
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
                        <motion.div

                            className="main-framefix">
                            <div className="frame" ref={frameElement} style={{ 
                                transform: `scale(${scale}) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
                                }}>
                                <Canvas/>
                            </div>
                        </motion.div>

                        <div className="canvas-blur-back"><div></div></div>
                    </div>
                    <div className='txt-back-contain'>
                        <TxtAnimation text='AI-POWERED BUILD WEBSITES' />
                    </div>
                </section>

                <section data-scroll data-scroll-section className='f-g' id='f-g' ref={fullScreenRef}>
                    <div className="wrapper">
                        <div className="contain ref-c">
                            <FrameFixGuide />
                        </div>
                    </div>
                </section>

                <section className='publish' data-scroll data-scroll-section id='publish'>
                    <div className="wrapper">

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
                    <div className="top-blur"></div>
                    <div className='title'>
                        <div>
                            <div className="logo"><Logo/></div>
                            <h1>Get Started FrameFix</h1>
                            <p>Try using the FrameFix tool to easily build a website.</p>
                            <div className='btn'>
                                <Link to='./'>
                                    Start FrameFix
                                    <div className='next'><NextArrow/></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="contain">
                            <div className="wrap">
                                <div className="out-box">
                                    <motion.div
                                    ref={ref5 as React.Ref<HTMLDivElement>}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={controls5}
                                    className='left-side box ' data-scroll data-scroll-speed = "-1"></motion.div>

                                    <motion.div 
                                    ref={ref6 as React.Ref<HTMLDivElement>}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={controls6}
                                    className='right-side box is-inview' 
                                    data-scroll data-scroll-speed = "1"
                                    ></motion.div>
                                </div>
                                <div className='head'>
                                    <div className='framefix-project'>
                                        <div className='logo'><FrameLogo/></div>
                                        <div className='name'>
                                            <p><span>Drafts / </span>Project Name</p>
                                        </div>
                                        <div className="free">Free</div>
                                        <div className="option"><AssetsBottomArrow/></div>
                                    </div>
                                    <div className='u-interaction'>

                                    </div>
                                    <div className='user-publish'>
                                        <div className='user-infor'>
                                            <div>U</div>
                                            <AssetsBottomArrow/>
                                        </div>
                                        <div className='settings an'><Settings/></div>
                                        <div className='preview  an'><Preview/></div>
                                        <div className='publish-btn'>Publish</div>
                                        <div className='zoom-in'>
                                            <p>100%</p>
                                            <AssetsBottomArrow/>
                                        </div>
                                    </div>
                                </div>
                                <div className='side'>
                                    <div className='left si'>
                                        <div className='category'>
                                            <div className='layer'>
                                                <div className="icon"><Template/></div>
                                                <div className="t"><span>Layer</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Frame/></div>
                                                <div className="t"><span>frame</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Text/></div>
                                                <div className="t"><span>Text</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Menus/></div>
                                                <div className="t"><span>Menus</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Header/></div>
                                                <div className="t"><span>Header</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Section/></div>
                                                <div className="t"><span>section</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Footer/></div>
                                                <div className="t"><span>Footer</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Slides/></div>
                                                <div className="t"><span>Slides</span></div>
                                            </div>
                                            <div>
                                                <div className="icon" id='button'><Button/></div>
                                                <div className="t"><span>Button</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Icons/></div>
                                                <div className="t"><span>Icons</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Magic/></div>
                                                <div className="t magic"><span>Magic</span></div>
                                            </div>
                                        </div>
                                        <div className='assets'>
                                            <div>
                                                <div className="layer-top space">
                                                    <div className='category-title'><h4>Layer</h4></div>
                                                    <div className='close-icon'>
                                                        <Close/>
                                                    </div>
                                                </div>
                                                <div className="pages space">
                                                    <div className='page-top'>
                                                        <div className='pages-title'><h4>Page</h4></div>
                                                        <div className='items'>
                                                            <div className='page'>
                                                                <div className='icon'><PageIcon/></div>
                                                                <div className='t'><p>page1</p></div>
                                                            </div>
                                                            <div className='page'>
                                                                <div className='icon'><PageIcon/></div>
                                                                <div className='t'><p>page2</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='icons'>
                                                        <div><Add/></div>
                                                        <div><AssetsBottomArrow/></div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="layer">
                                                    <div className='layer-title'><h4>Layer</h4></div>
                                                    <div className='frame-contain'>
                                                        <div className="frame">
                                                            <div className='h'><AssetsBottomArrow/><FrameIcon/><p>Frame</p></div>

                                                            <div className="in-e">
                                                                <div className='e-infor'>
                                                                    <Rect/> 
                                                                    <p>Rectangle1</p>
                                                                </div>
                                                                <div className='e-isset-locked'>
                                                                    <Locked/>
                                                                </div>
                                                            </div>
                                                            <div className="in-e">
                                                                <div className='e-infor'>
                                                                    <Rect/> 
                                                                    <p>Rectangle2</p>
                                                                </div>
                                                                <div className='e-isset-locked'>
                                                                    <Open/>
                                                                </div>
                                                            </div>
                                                            <div className="in-e">
                                                                <div className='e-infor'>
                                                                    <Rect/> 
                                                                    <p>Rectangle3</p>
                                                                </div>
                                                            </div>
                                                            <div className="in-e">
                                                                <div className='e-infor'>
                                                                    <Rect/> 
                                                                    <p>Rectangle4</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='right si' id='right'>
                                        <div className="tab">
                                            <div className='tab-active'>
                                                <p>Design</p>
                                            </div>
                                            <div>
                                                <p>Prototype</p>
                                            </div>
                                            <div>
                                                <p>Handoff</p>
                                            </div>
                                        </div>
                                        <div id='breakpoint'>
                                            <div className="breakpoint">
                                                <h4>Breakpoint</h4>
                                                <AssetsBottomArrow/>
                                            </div>
                                            <div className="apply">
                                                <div className='position between'>
                                                    <div className='t'>Position</div>
                                                    <div className='xy'>
                                                        <div className='x'>
                                                            <span>X : </span>100
                                                        </div>
                                                        <div className='y'>
                                                            <span>Y : </span>100
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className='size between'>
                                                    <div className='t'>Size</div>
                                                    <div className='wh'>
                                                        <div className='w'>
                                                            <span>W : </span>1920
                                                        </div>
                                                        <div className='h'>
                                                            <span>H : </span>5000
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='rotation between'>
                                                    <div className='t'>Rotation</div>
                                                    <div className="rotate">
                                                        <div className='apply-rotation'>
                                                            <Rotation/>
                                                            <span>0</span>
                                                        </div>
                                                        <div className="flip">
                                                            <div><FlipHorizontal/></div>
                                                            <div><FlipVertical/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="layer-styles">
                                            <div className="layer">
                                                <div><h4>Layer</h4></div>
                                                <div className='through'>
                                                    <p>Pass Through</p>
                                                    <AssetsBottomArrow/>
                                                    
                                                </div>
                                            </div>
                                            <div className='opacity'>
                                                <div className='view-eye'><Eye/></div>
                                                <div className='range'>
                                                    <div className='range-progress'>
                                                        <div className='circle'></div>
                                                    </div>
                                                </div>
                                                <div className='percents'>100%</div>
                                            </div>
                                        </div>
                                        <div id="styles">
                                            <div className="styles">
                                                <h4>Styles</h4>
                                                <Add/>
                                            </div>
                                            <div className='applys'>
                                                <div className='fill-color'>
                                                    <div className='fillColor'><span>Fill</span></div>
                                                    <div className='color'>
                                                        <div className='rgb'>
                                                            <div className='preview'>
                                                                <div className='view-color'></div>
                                                                <div className='hex'>#000000</div>
                                                            </div>
                                                            <div className='picker'><AssetsBottomArrow/></div>
                                                        </div>
                                                        <div className='alpha'>100%</div>
                                                    </div>
                                                </div>
                                                <div className='overflow'>
                                                    <div className=''><span>Overflow</span></div>
                                                    <div className='propertys'>
                                                        <div className='property'><span>Hidden</span></div>
                                                        <div className='option'><AssetsBottomArrow/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="layout">
                                            <div className="layout">
                                                <h4>Layout</h4>
                                                <Add/>
                                            </div>
                                            <div className='display'>
                                                <div><span>Display</span></div>
                                                <div className='grid'>
                                                    <div className='active-selection'><span>Block</span></div>
                                                    <div><span>Flex</span></div>
                                                    <div><span>Grid</span></div>
                                                    <div><span>None</span></div>
                                                </div>
                                            </div>
                                            <div className='padding common'>
                                                <div><span>Padding</span></div>
                                                <div className='padding-value common-value'>
                                                    <div className='value'><span>0</span><span>PX</span></div>
                                                    <div className='per-side'>
                                                        <div className='active-type-selection'><DefaultAll/></div>
                                                        <div><PerSide/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='margin common'>
                                                <div><span>Margin</span></div>
                                                <div className="margin-value common-value">
                                                    <div className='value'><span>0</span><span>PX</span></div>
                                                    <div className='per-side'>
                                                        <div className='active-type-selection'><DefaultAll/></div>
                                                        <div><PerSide/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stroke other"><div><h4>Stroke</h4><Add/></div></div>
                                        <div className="Effects other"><div><h4>Effects</h4><Add/></div></div>
                                        <div className="Export other"><div><h4>Export</h4><Add/></div></div>
                                    </div>
                                </div>
                                <div className="elements">
                                    <div className='work-contents'>
                                        <motion.div 
                                        ref={ref3 as React.Ref<HTMLDivElement>}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={controls3}
                                        className="desktop" id='desktop-frame'>
                                            <div>
                                                <motion.div

                                                ref={delayRef}
                                                initial = {{scale : 0.5}}
                                                animate={delayControls}

                                                className="select">
                                                <p className='frame-name'>Desktop frame</p>

                                                </motion.div>
                                                <div className="header">
                                                    <div className="nav">
                                                        <div className='logo'>
                                                            <Logo/>
                                                        </div>
                                                        <div className='items'>
                                                            <li>Features</li>
                                                            <li>Updates</li>
                                                            <li>Community</li>
                                                            <li>Pricing</li>
                                                        </div>
                                                        <div className='btn'>Get Started</div>
                                                    </div>
                                                </div>
                                                <div className="ex-section">
                                                    <div className='txt'>
                                                        <div className='title'><h1>The<br/>Smarter.</h1></div>
                                                        <div className='start'>
                                                            <div className="expl">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                            </div>
                                                            <div className="btn">Start FramFix</div>
                                                        </div>
                                                        <div className='slider-items'>
                                                            <div>AI-POWERED</div>
                                                            <div>CANVAS</div>
                                                            <div>CODE-CONVERTS</div>
                                                            <div>PUBLISH</div>
                                                        </div>
                                                    </div>
                                                    <div className='main-banner'>
                                                        <div className='ex-contain'>
                                                            <div className="img">
                                                                <img src={require("../../img/sample-img.jpg")} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            ref={ref4 as React.Ref<HTMLDivElement>}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            
                                            animate={controls4}
                                            className="mobile" id='mobile-frame'>
                                            <p>Mobile Frame</p>
                                            <div>
                                                <div className="header">
                                                    <div className='mobile-logo'><Logo/></div>
                                                    <div className='menu'>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                                <div className="banner">
                                                    <div className="title"><h1>The<br/>Smarter.</h1></div>
                                                    <div className="expl">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                        <div className="btn">Start FrameFix</div>
                                                    </div>
                                                    <div className="img">
                                                        <div>
                                                            <img src={require("../../img/sample-img.jpg")} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-blur"></div>
                </section>
                <FooterSection/>
            </>
        </ScrollSmootherComponent>
    );
}
export default Main;
