import React, { useEffect,useRef} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as Logo } from "../../../img/logo/logo.svg";
import { motion } from 'framer-motion';
import { ReactComponent as Community } from '../../../img/icons/community-icon.svg';
import { ReactComponent as Deploy } from '../../../img/icons/deploy-icon.svg';
import { Link } from 'react-router-dom';

import {
    useDefaultFadeOut
} from "../script";
gsap.registerPlugin(ScrollTrigger);

const FrameFixGuide: React.FC = () => {

    const sectionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionsRef.current) {
            const sections = gsap.utils.toArray<Element>('.section-i', sectionsRef.current);

            gsap.set(sections, { autoAlpha: 0,});

            sections.forEach((section, index) => {
                const progressBar = section.querySelector('.progress-contain .progress') as HTMLElement;
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top", 
                    end: "bottom top", 
                    pin : true,
                    pinSpacing: false,
                    pinType : "transform",
                    onEnter: () => gsap.to(section, { autoAlpha: 1, zIndex : 5, duration : 0.5, }),
                    onLeave: () => gsap.to(section, { autoAlpha: 0, zIndex : -11, duration : 0.5  }), 
                    onEnterBack: () => gsap.to(section, { autoAlpha: 1, zIndex : 5, duration : 0.5 }),
                    onLeaveBack: () => gsap.to(section, { autoAlpha: 0, zIndex : -11, duration : 0.5  }),
                    onUpdate: (self) => {

                        if (progressBar) {
                            progressBar.style.height = `${self.progress * 100}%`;
                        }
                    }
                });
            });
        }
    }, []);

    return (
        <>  
            <div className="titles">
                <div className="logo"><Logo/></div>
                <div>
                    <h1>FrameFix supports various plugins.</h1>
                </div>
            </div>
            <div ref={sectionsRef}>
                <motion.div className="section-i f-a">
                  <div>
                    <div className="txt">
                        
                        <div>
                            <div className='type-icon'>
                                <div className="icon"><Deploy/></div>
                                <div className="txt">ai-powered</div>
                            </div>
                            <h1> <span>Quick and Precise</span>  Layouts with AI.</h1>
                        </div>
                        <div className="m-expl">
                            <div className="progress-contain">
                                <div className="progress"></div>
                            </div>
                            <div className="explain">
                                <p className="sub-title">Utilize</p>
                                <p>FrameFix utilizes AI technology to allow for precise and quick adjustments in layouts. This tool supports efficient workflow, enhancing project completion speeds. Experience perfect layouts with the help of AI.</p>
                            </div>
                        </div>
                        <div className="see-all">
                            <Link to="./">
                                See all AI
                            </Link>
                           
                        </div>
                    </div>
                    <div className="framefix">
                        <div className="box">
                            <div className="contents">
                                <div className="head">
                                    
                                </div>
                                <div className="ins-ai">
                                    <div className="block-1 block">
                                        <div><img src={require("../../../img/orange.jpg")} alt="" /></div>
                                        <div><img src={require("../../../img/red.jpg")} alt="" /></div>
                                    </div>
                                    <div className="block-2 block">
                                        <div><img src={require("../../../img/purple.jpg")} alt="" /></div>
                                        <div><img src={require("../../../img/dark.jpg")} alt="" /></div>
                                    </div>
                                    <div className="block-3 block">
                                        <div><img src={require("../../../img/blue.jpg")} alt="" /></div>
                                        <div><img src={require("../../../img/mint.jpg")} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="out-box">

                        </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="section-i f-b">
                    <div>
                        <div className="txt">
                        <div>
                            <div className='type-icon'>
                                <div className="icon"><Deploy/></div>
                                <div className="txt">effects</div>
                            </div>
                            <h1> <span>Add effects</span> to delight your audience.</h1>
                        </div>
                        <div className="m-expl">
                            <div className="progress-contain">
                                <div className="progress"></div>
                            </div>
                            <div className="explain">
                                <p className="sub-title">Effects</p>
                                <p>Effective visual effects guide user focus, enhance interaction with websites and apps, and enrich the user experience.</p>
                            </div>
                        </div>
                        <div className="see-all">
                            <Link to="./">
                                See all Effects
                            </Link>
                           
                        </div>
                        </div>
                        <div className="framefix">
                            <div className="box">
                                <div className="contents">
                                    <div className="head"></div>
                                </div>
                            </div>
                            <div className="out-box">

                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="section-i f-c">
                    <div>
                        <div className="txt">
                        <div>
                            <div className='type-icon'>
                                <div className="icon"><Deploy/></div>
                                <div className="txt">ai-powered</div>

                            </div>
                            <h1> <span>Quick and Precise</span>  Layouts with AI.</h1>
                        </div>
                        <div className="m-expl">
                            <div className="progress-contain">
                                <div className="progress"></div>
                            </div>
                            <div className="explain">
                                <p className="sub-title">Utilize</p>
                                <p>FrameFix utilizes AI technology to allow for precise and quick adjustments in layouts. This tool supports efficient workflow, enhancing project completion speeds. Experience perfect layouts with the help of AI.</p>
                            </div>
                        </div>
                        <div className="see-all">
                            <Link to="./">
                                See all AI
                            </Link>
                           
                        </div>
                        </div>
                        <div className="framefix">
                            <div className="box">
                                <div className="contents">
                                    <div className="head"></div>
                                </div>
                            </div>
                            <div className="out-box">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FrameFixGuide