import React, { useEffect, useState, useRef } from 'react';

import ScrollSmootherComponent from "./ScrollSmoother";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

import { ReactComponent as Logo } from '../../img/logo/logo.svg';

import { ReactComponent as Share } from '../../img/icons/share.svg';
import { ReactComponent as URL } from '../../img/icons/url.svg';
import { ReactComponent as Heart } from '../../img/icons/heart.svg';
import { ReactComponent as View } from '../../img/icons/user-view.svg';
import { ReactComponent as Deploy } from '../../img/icons/deploy-icon.svg';
import { ReactComponent as SEO } from '../../img/icons/seo-icon.svg';
import { ReactComponent as Community } from '../../img/icons/community-icon.svg';
import { ReactComponent as NoneTxtLogo } from '../../img/icons/none-txt-logo.svg';
import { ReactComponent as F } from '../../img/icons/f.svg';

import { ReactComponent as FrameLogo } from "../../img/logo/frame-logo.svg";
import { ReactComponent as NextArrow } from '../../img/icons/next-arrow.svg';

// framfix icon //
import { ReactComponent as Template } from '../../img/icons/framefix-plugin-icons/template.svg';
import { ReactComponent as Layer } from '../../img/icons/framefix-plugin-icons/layer.svg';
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
import { ReactComponent as Minus } from '../../img/icons/framefix-plugin-icons/minus.svg';
import { ReactComponent as AssetsBottomArrow } from '../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg';
import { ReactComponent as PageIcon } from '../../img/icons/framefix-plugin-icons/page-icon.svg';
import { ReactComponent as FrameIcon } from '../../img/icons/framefix-plugin-icons/frame.svg';
import { ReactComponent as Rect } from '../../img/icons/framefix-plugin-icons/Rect.svg';
import { ReactComponent as CursorIcon } from '../../img/icons/framefix-plugin-icons/cursor.svg';
import { ReactComponent as Locked } from '../../img/icons/framefix-plugin-icons/locked.svg';
import { ReactComponent as Open } from '../../img/icons/framefix-plugin-icons/opened.svg';
import { ReactComponent as Hand } from '../../img/icons/framefix-plugin-icons/hand.svg';
import { ReactComponent as Settings } from '../../img/icons/framefix-plugin-icons/settings.svg';
import { ReactComponent as Preview } from '../../img/icons/framefix-plugin-icons/view.svg';


// framfix icon //

// framefix style icons //

import { ReactComponent as Left } from '../../img/icons/framefix-style-icons/left.svg';
import { ReactComponent as Center } from '../../img/icons/framefix-style-icons/center.svg';
import { ReactComponent as Right } from '../../img/icons/framefix-style-icons/right.svg';
import { ReactComponent as AlignTop } from '../../img/icons/framefix-style-icons/align-top.svg';
import { ReactComponent as AlignVerticalCenter } from '../../img/icons/framefix-style-icons/align-vertical-center.svg';
import { ReactComponent as AlignBottom } from '../../img/icons/framefix-style-icons/align-bottom.svg';
import { ReactComponent as VerticalSpacing } from '../../img/icons/framefix-style-icons/vertical-spacing.svg';
import { ReactComponent as HorizontalSpacing } from '../../img/icons/framefix-style-icons/horizontal-spacing.svg';

// framefix style icons //

import "./slider/project-maker.css"
import "./framefix-g.css"
import DefaultUI from "./slider/project-maker";

import FrameFixGuide from './slider/framefix-g';

import {
    useTypingEffect,
    TxtAnimation,
    useInViewMainSpring,
    useInViewExContentSpring,
    useDescriptionFadeOut,
    useDefaultFadeOut
} from './script';

function Main() {

    const [ref1, controls1] = useInViewMainSpring();
    const [ref2, controls2] = useInViewExContentSpring();
    const [seoRef, seo1] = useInViewExContentSpring();
    const [quicklyDescriptionRef1, controlDescription1] = useDescriptionFadeOut();
    const [quicklyDescriptionRef2, controlDescription2] = useDescriptionFadeOut();

    const [defaultFadeOut1, constrolFadeOut1] = useDefaultFadeOut();
    const [defaultFadeOut2, constrolFadeOut2] = useDefaultFadeOut();
    const [defaultFadeOut3, constrolFadeOut3] = useDefaultFadeOut();
    const [defaultFadeOut4, constrolFadeOut4] = useDefaultFadeOut();

    const [triggerMetaTitle, setTriggerMeta1] = useState(false);
    const [triggerMetaURL, setTriggerMeta2] = useState(false);
    const [triggerMetaDescription, setTriggerMeta3] = useState(false);

    const { typedText: metaTitle, isCompleted: isCompleted1 } = useTypingEffect(triggerMetaTitle ? "FrameFix" : "", 50);
    const { typedText: metaUrl, isCompleted: isCompleted2 } = useTypingEffect(triggerMetaURL ? "FrameFix.com" : "", 50);
    const { typedText: metaDescription, isCompleted: isCompleted3 } = useTypingEffect(
        triggerMetaDescription ? "Framefix leads in revolutionizing web design by leveraging AI to provide unique design references and innovative creations inspired by these insights." : "", 5
    );
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

    const scrollEventIconRef = useRef<HTMLDivElement>(null);
    const scrollEventIconRef2 = useRef<HTMLDivElement>(null);
    const scrollEventNonePin = useRef<HTMLDivElement>(null);
    const fullScreenRef = useRef<HTMLDivElement>(null);
    const f = useRef<SVGSVGElement>(null);
    const typingContents = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const t1 = gsap.timeline();

        let ctx = gsap.context(() => {
            t1.to(scrollEventIconRef.current, {
                x: 2000,
                opacity: 1,
                scrollTrigger: {
                    trigger: scrollEventIconRef.current,
                    start: "50% 50%",
                    end: "800% 80%",
                    scrub: true,
                    toggleActions: "play none none none",
                    refreshPriority: 1,
                    pinType: "transform",
                },
            });

            t1.to(scrollEventIconRef2.current, {
                x: -2000,
                opacity: 1,
                scrollTrigger: {
                    trigger: scrollEventIconRef2.current,
                    start: "50% 50%",
                    end: "800% 80%",
                    scrub: true,
                    toggleActions: "play none none none",
                    refreshPriority: 1,
                    pinType: "transform",
                },
            });

            t1.to(scrollEventNonePin.current, {
                x: 2000,
                opacity: 1,
                scrollTrigger: {
                    trigger: scrollEventNonePin.current,
                    start: "top 50%",
                    end: "800% 80%",
                    scrub: true,
                    toggleActions: "play none none none",
                    refreshPriority: 1,
                    pinType: "transform",
                },
            });
            t1.to(f.current, {
                scrollTrigger: {
                    trigger: f.current,
                    start: "20% 50%",
                    end: "bottom 50%",
                    scrub: 1,
                    refreshPriority: 1,
                },
            });
            t1.to(typingContents.current, {
                scrollTrigger: {
                    trigger: typingContents.current,
                    start: "top 50%",
                    end: "top 50%",
                    onEnter: () => {
                        setTriggerMeta1(true);
                        setTriggerMeta2(true);
                        setTriggerMeta3(true);
                    }
                }
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
                <section className='main' data-scroll data-scroll-section>
                    <div className='wrapper'>
                        <div className='main'>
                            <div className='title'>
                                <div>
                                    <motion.h1
                                        initial={{
                                            opacity: 0,
                                            y: 50
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
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
                                            y: 50
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}

                                        transition={{
                                            duration: 1,
                                            delay: 0.2,
                                            ease: "anticipate",
                                        }}
                                    >smarter.</motion.h1>
                                </div>
                            </div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -50
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
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
                    <div ref={scrollEventIconRef} className="scrollEventIcon" id='internet-icon'>
                        <div>deploy website</div>
                    </div>
                    <div className='scrollEvent' ref={scrollEventIconRef2}>
                        <div>deploy website</div>
                    </div>
                    <div
                        className='none-pin' ref={scrollEventNonePin}>
                        <div>deploy website</div>
                    </div>
                    <div className='wrapper' data-scroll>

                        <div className='txt'>
                            <div
                                data-scroll
                                data-scroll-speed="-3"
                                className='title'>

                                <div className='type-icon'>
                                    <div className="icon"><Deploy /></div>
                                    <div className="txt">Deploy</div>
                                </div>
                                <motion.h1
                                    ref={defaultFadeOut1 as React.Ref<HTMLDivElement>}
                                    initial={{ opacity: 0 }}
                                    animate={constrolFadeOut1}
                                >In a click Website Deploy.</motion.h1>
                            </div>
                        </div>

                        <motion.div
                            ref={quicklyDescriptionRef1 as React.Ref<HTMLDivElement>}
                            initial={{ opacity: 0, x: -100 }}
                            animate={controlDescription1}

                            className='description'>
                            <p>Experience swift and efficient website deployment with just a click. Launch your online presence easily without hassle.</p>
                        </motion.div>


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
                        <div className="deco">
                            <F ref={f} className='f-svg' />
                        </div>
                        <div className='txt-contain'
                            data-scroll
                            data-scroll-speed="-5">

                            <motion.div
                                ref={defaultFadeOut2 as React.Ref<HTMLDivElement>}
                                initial={{ opacity: 0 }}
                                animate={constrolFadeOut2}
                                className='wrap'>
                                <div className='type-icon'>
                                    <div className="icon"><SEO /></div>
                                    <div className="txt">SEO</div>
                                </div>
                                <div className='title'>
                                    <h1>Search Engine Optimization</h1>
                                </div>
                                <div className='explain'>
                                    <p>FrameFix enables swift and effortless discovery through an optimized search engine.</p>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            ref={defaultFadeOut4 as React.Ref<HTMLDivElement>}
                            initial={{ opacity: 0 }}
                            animate={constrolFadeOut4}
                            className='seo-contents'>
                            <div className='contain'>
                                <div className="in">
                                    <div className="title"><h1>Page Settings</h1></div>
                                    <div className="meta">
                                        <div className="meta-txt" ref={typingContents}>
                                            <div className="title-url">
                                                <div>
                                                    <div className='t'>Title</div>
                                                    <div className='input-box'>{metaTitle}</div>
                                                </div>
                                                <div>
                                                    <div className='t'>URL</div>
                                                    <div className='input-box'>{metaUrl}</div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <div className='t'>Description</div>
                                                <div className='textarea'>{metaDescription}</div>
                                            </div>
                                        </div>
                                        <div className="meta-img-setting">
                                            <div className='t'>Image settings</div>
                                            <div className="favicon">
                                                <div className='guide'>
                                                    <div className='i'>Favicon</div>
                                                    <div className='guide-txt'>It is recommended that the favicon for browser tabs has a resolution of 32x32 pixels.</div>
                                                    <div className='upload'>Upload</div>
                                                </div>
                                                <div className='preview-favicon'>
                                                    <NoneTxtLogo />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='open-graph'>
                                        <div className="img">
                                            <img src={require("../../img/sample-img.jpg")} alt="" />
                                            <p>Preview open graph</p>
                                        </div>
                                        <div className="txt">
                                            <div className="og-title-url">
                                                <div className='title og'>
                                                    <div className="t">Title</div>
                                                    <div className="input-box">{metaTitle}</div>
                                                </div>
                                                <div className='url og'>
                                                    <div className="t">URL</div>
                                                    <div className="input-box">{metaUrl}</div>
                                                </div>
                                            </div>
                                            <div className="og-description">
                                                <div className='description'>Description </div>
                                                <div className='txtarea'>{metaDescription}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="out">
                                    <div
                                        data-scroll
                                        data-scroll-direction="vertical"
                                        data-scroll-speed="-1"
                                        className='top'>
                                        <div className="sementics">
                                            <p>Sementics</p>
                                            <div className="tag">
                                                <div
                                                    data-scroll
                                                    data-scroll-speed="2"
                                                    className='t'>h1</div>
                                                <div
                                                    data-scroll
                                                    data-scroll-speed="2"
                                                    className='t'>h2</div>
                                                <div
                                                    data-scroll
                                                    data-scroll-speed="2"
                                                    className='t'>div</div>
                                                <div
                                                    data-scroll
                                                    data-scroll-speed="2"
                                                    className='t'>h3</div>
                                                <div
                                                    data-scroll
                                                    data-scroll-speed="2"
                                                    className='t'>h4</div>

                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        ref={seoRef as React.Ref<HTMLDivElement>}
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={seo1}

                                        className='bottom'>
                                        <div className="meta-img-setting">
                                            <div className='t'><p>Simple Editing</p></div>
                                            <div className='img'>
                                                <img src={require("../../img/sample-img.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div
                                            data-scroll
                                            data-scroll-direction="horizontal"
                                            data-scroll-speed="-0.5"
                                            className='content-box'>
                                            <div className='wrap'>
                                                <div className="h">
                                                    <p>Image settings</p>
                                                    <div className="save">save</div>
                                                </div>
                                                <div className="image">
                                                    <div className="t">
                                                        <p>Image</p>
                                                    </div>
                                                    <div className='img-view'>
                                                        <div className="img-infor">
                                                            <div className='view'>
                                                                <img src={require("../../img/sample-img.jpg")} alt="" />
                                                            </div>
                                                            <div className='infor'>
                                                                <p>FrameFix</p>
                                                                <p>1200 x 627px</p>
                                                                <p>230.1KB</p>
                                                            </div>
                                                        </div>
                                                        <div className="replace-img">Replace Image</div>
                                                    </div>
                                                </div>
                                                <div className='alt gr'>
                                                    <div className='t'>Alt Name</div>
                                                    <div className='name box'><p>Open graph</p></div>
                                                </div>
                                                <div className='type gr'>
                                                    <div className='t'>Img Type</div>
                                                    <div className='type-select box'>
                                                        <p>JPEG</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="deco-f">

                        </div>
                    </div>
                </section>
                <section className="community" data-scroll data-scroll-section>
                    <div className='wrapper'>
                        <div className="community-title">
                            <div className="txt"
                                data-scroll
                                data-scroll-speed="-3">
                                <div className='type-icon'>
                                    <div className="icon"><Community /></div>
                                    <div className="txt">Community</div>
                                </div>
                                <motion.h1
                                    ref={defaultFadeOut3 as React.Ref<HTMLDivElement>}
                                    initial={{ opacity: 0 }}
                                    animate={constrolFadeOut3}
                                >Boost brand with community.</motion.h1>
                            </div>
                        </div>

                        <div className="contents">
                            <motion.div
                                ref={quicklyDescriptionRef2 as React.Ref<HTMLDivElement>}
                                initial={{ opacity: 0, x: -100 }}
                                animate={controlDescription2}
                                className="description">
                                <p>Strengthen your branding in just seconds through community engagement.</p>
                            </motion.div>
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
                                                            data-scroll-call="triggerScale"
                                                            data-scroll-repeat
                                                        >AI-powered the smarter</motion.h1>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div className='items'>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className='item3'>
                                    <div className='contain'>

                                        <div className="user-project-infor">
                                            <div className='user-project-title'>
                                                <div className='top'>
                                                    <div className="title">
                                                        <h1>User Project Titlte <span>2024-03-02</span></h1>
                                                    </div>
                                                    <div className="share">
                                                        <div className='sns'><Share /></div>
                                                        <div className='url-copy'><URL /></div>
                                                    </div>
                                                </div>
                                                <div className='bottom'>
                                                    <div className="profile">
                                                        <div>
                                                            <div className='img'>U</div>
                                                            <p>User_Name</p>
                                                        </div>
                                                    </div>
                                                    <div className='interaction'>
                                                        <div className='view-count icon'><View /><p>365</p></div>
                                                        <div className='heart icon'><Heart /><p>200</p></div>
                                                        <div className='visit'>Visit</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='project-description'>
                                                <div className='title'>
                                                    <div className="t">
                                                        <h2>Description</h2>
                                                    </div>
                                                    <div className="tag">
                                                        <div>Technology</div>
                                                    </div>
                                                </div>
                                                <div className="description-t">
                                                    <p>Leverage AI for a transformative design workflow: create effortlessly and deploy with a single click, streamlining your process and speeding up idea realization.</p>
                                                </div>
                                                <div className="division"></div>
                                                <div className='user-comments'>
                                                    <div className='user-1 u'>
                                                        <div className='u-profile'>U</div>
                                                        <div className='u-chat'>
                                                            <div className='u-name'><p>User1234 <span>30minute ago</span></p></div>
                                                            <div className='u-state'><p>This is very clean!</p></div>
                                                            <div className='reply'><p>Reply</p></div>
                                                        </div>
                                                    </div>
                                                    <div className='user-2 u'>
                                                        <div className='u-profile'>U</div>
                                                        <div className='u-chat'>
                                                            <div className='u-name'><p>User1234 <span>6hour ago</span></p></div>
                                                            <div className='u-state'><p>Amazing!</p></div>
                                                            <div className='reply'><p>Reply</p></div>
                                                        </div>
                                                    </div>
                                                    <div className='user-3 u'>
                                                        <div className='u-profile'>U</div>
                                                        <div className='u-chat'>
                                                            <div className='u-name'><p>User1234 <span>14hour ago</span></p></div>
                                                            <div className='u-state'><p>Inspiring mate</p></div>
                                                            <div className='reply e'>
                                                                <div className='replise'><p>2 Replise</p></div>
                                                                <div><p>Reply</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='comment'>
                                                    <div className='profile'>U</div>
                                                    <div className='input'>
                                                        Enter Your Comments
                                                    </div>
                                                    <div className='submit'>Submit</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rel-category">
                                            <div>
                                                <div className="like-category">
                                                    <div className="title">
                                                        <h2>List like the Category</h2>
                                                    </div>
                                                    <div className="items">
                                                        <div>
                                                            <div className="img">
                                                                <img src={require("../../img/sample2.jpg")} alt="" />
                                                                <p className='project-name'>Project name</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="img">
                                                                <img src={require("../../img/community.jpg")} alt="" />
                                                                <p className='project-name'>Project name</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="img">
                                                                <img src={require("../../img/component-ui.jpg")} alt="" />
                                                                <p className='project-name'>Project name</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='more'>
                                                        <div className="more-title">
                                                            <h2>More by user project</h2>
                                                        </div>
                                                        <div className='more-items'>
                                                            <div>
                                                                <img src={require("../../img/more-sample3.jpg")} alt="" id='communityMoreProjectScale' />
                                                            </div>

                                                            <div><img src={require("../../img/more-sample4.jpg")} alt="" /></div>
                                                            <div><img src={require("../../img/more-sample1.jpg")} alt="" /></div>
                                                            <div><img src={require("../../img/more-sample2.jpg")} alt="" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <div className='next'><NextArrow/></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="background"></div>
                    <div className="wrapper">
                        <div className="contain">
                            <div className="wrap">
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
                                        <div className='cursor'>
                                            <CursorIcon/>
                                        </div>
                                        <div className='frame'>
                                            <FrameIcon/><AssetsBottomArrow/>
                                        </div>
                                        <div className='rect'>
                                            <Rect/><AssetsBottomArrow/>
                                        </div>
                                        <div className='hand'>
                                            <Hand/>
                                        </div>
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
                                            <div>
                                                <div className="icon"><Template/></div>
                                                <div className="t"><span>Template</span></div>
                                            </div>
                                            <div className='layer'>
                                                <div className="icon"><Layer/></div>
                                                <div className="t"><span>Layer</span></div>
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
                                                <div className="icon"><Footer/></div>
                                                <div className="t"><span>Footer</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Slides/></div>
                                                <div className="t"><span>Slides</span></div>
                                            </div>
                                            <div>
                                                <div className="icon"><Button/></div>
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
                                                            
                                                        </div>
                                                        <div className="flip">
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="radius between">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="elements">
                                    <div className='work-contents'>
                                        <div className="desktop" id='desktop-frame'>
                                            <p id='desktop-frame-ti'>Desktop Frame</p>
                                            <div>
                                                <div className="select">
                                                    <div className="b"></div>
                                                    <div className="b"></div>
                                                </div>
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
                                        </div>
                                        <div className="mobile" id='mobile-frame'>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-blur"></div>
                </section>

            </>
        </ScrollSmootherComponent>
    );
}
export default Main;
