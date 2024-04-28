import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Application } from '@splinetool/runtime';
import { delay, frame, motion, useAnimation } from 'framer-motion';
import { ReactComponent as FrameLogo } from "../../../img/logo/frame-logo.svg";
import { ReactComponent as AssetsBottomArrow } from '../../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg';
import { ReactComponent as Settings } from '../../../img/icons/framefix-plugin-icons/settings.svg';
import { ReactComponent as Preview } from '../../../img/icons/framefix-plugin-icons/view.svg';


const Publish:React.FC = ()=>{
    const fullScreenRef = useRef<HTMLDivElement>(null);
    const containRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const t1 = gsap.timeline();

        if(fullScreenRef.current && containRef.current){
            const sRef = fullScreenRef.current;
            const cRef = containRef.current;

            let ctx = gsap.context(()=>{
                t1.to(cRef,{
                    width : "100vw",
                    padding : '0px',
                    opacity : 1,
                    transform : "scale(1)",
                    borderRadius : "0",
                    scrollTrigger : {

                        trigger : cRef,
                        start : "top 50%",
                        end : "20% 50%",
                        scrub : true,

                    }
                })
                t1.to(cRef,{
                    scrollTrigger : {
                        trigger  : sRef,
                        start : "41% 50%",
                        end : "200% 50%",
                        scrub : true,
                        pin : true,
                        pinType : "transform"
                    }
                })

                ScrollTrigger.refresh();
                return () => {
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                };
            })
            return () => ctx.revert(); 
        } 
        
    },[])

    return (
        <>
        <div className="publish-ex" ref={containRef}>
            <div className="publish-contain" ref={fullScreenRef}>
                <div className="wrap">
                    <div className="head">
                        <div className="f-project-name">
                            <div className="o-frame-logo"><FrameLogo/></div>
                            <div className="setting-name"><p><span>Drafts / </span>Project Name</p><AssetsBottomArrow/>

                            </div>
                        </div>
                        <div className="publish-settings">
                            <div className="user-profile">
                                <div className="profile">U</div>
                                <div><AssetsBottomArrow/></div>
                            </div>
                            <div className="common"><Preview/></div>
                            <div className="common"><Settings/></div>
                            <div className="publish-btn"><p>Publish</p></div>
                            <div className="zoom-in">
                                <p>100%</p>
                                <AssetsBottomArrow/>
                            </div>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="contents-wrap">
                            <div>
                                <div className="content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}   
export default Publish