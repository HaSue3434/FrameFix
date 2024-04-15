import React, { useEffect,useRef,useState} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ReactComponent as Deploy } from '../../../img/icons/deploy-icon.svg';
import { ReactComponent as OutContentAI } from '../../../img/icons/out content.svg';

import { ReactComponent as Logo } from "../../../img/logo/logo.svg";
import { ReactComponent as FrameLogo } from "../../../img/logo/frame-logo.svg";
import { ReactComponent as AiPoweredIcon } from "../../../img/icons/ai-powered-icon.svg";
import { ReactComponent as DropDownArrow } from "../../../img/icons/bottom-arrow.svg";
import { ReactComponent as Star } from "../../../img/icons/star.svg";

// icon tools //

import { ReactComponent as Text } from "../../../img/icons/framefix-plugins-icon/text.svg";
import { ReactComponent as Menus } from "../../../img/icons/framefix-plugins-icon/menus.svg";
import { ReactComponent as Header } from "../../../img/icons/framefix-plugins-icon/header.svg";
import { ReactComponent as Footer } from "../../../img/icons/framefix-plugins-icon/footer.svg";
import { ReactComponent as Slides } from "../../../img/icons/framefix-plugins-icon/slides.svg";
import { ReactComponent as Button } from "../../../img/icons/framefix-plugins-icon/button.svg";
import { ReactComponent as Icons } from "../../../img/icons/framefix-plugins-icon/icons.svg";
import { ReactComponent as Magic } from "../../../img/icons/framefix-plugins-icon/magic.svg";
 
// icon tools //

import { Link } from 'react-router-dom';

import {
    useDefaultFadeOut,
    useInViewPluginsScale
} from "../script";
gsap.registerPlugin(ScrollTrigger);

const FrameFixGuide: React.FC = () => {

    const sectionsRef = useRef<HTMLDivElement>(null);

    const [activate, setActivate] = useState(false);
    const [outBoxRef, outBoxControls] = useInViewPluginsScale(activate);

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
                    onEnter: () => {
                        gsap.to(section, { autoAlpha: 1, zIndex: 5, duration: 0.5 });
                        setActivate(true);  // Activate the effect
                      },
                      onLeave: () => {
                        gsap.to(section, { autoAlpha: 0, zIndex: -11, duration: 0.5 });
                        setActivate(false); // Deactivate the effect
                      },
                      onEnterBack: () => {
                        gsap.to(section, { autoAlpha: 1, zIndex: 5, duration: 0.5 });
                        setActivate(true);  // Reactivate the effect
                      },
                      onLeaveBack: () => {
                        gsap.to(section, { autoAlpha: 0, zIndex: -11, duration: 0.5 });
                        setActivate(false); // Deactivate the effect
                    },
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
                                <div className="icon"><AiPoweredIcon/></div>
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
                                    <div className="frame-logo">
                                        <FrameLogo/>
                                    </div>
                                    <div className="project-name">
                                        <p> <span>Drafts /</span> Project name <DropDownArrow/></p>
                                    </div>
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
                                <div className="assets">
                                    <div className="category">
                                        <div className="plugin">
                                            <div className="icon"><Text/></div>
                                            <div className="txt"><p>Text</p></div>
                                        </div>
                                        <div className="plugin">
                                            <div className="icon"><Menus/></div>
                                            <div className="txt"><p>Menus</p></div>
                                        </div>
                                        <div className="plugin">
                                            <div className="icon"><Header/></div>
                                            <div className="txt"><p>Header</p></div>
                                        </div>
                                        <div className="plugin">
                                            <div className="icon"><Footer/></div>
                                            <div className="txt"><p>Footer</p></div>
                                        </div>
                                        <div className="plugin">
                                            <div className="icon"><Slides/></div>
                                            <div className="txt"><p>Slides</p></div>
                                        </div>
                                        <div className="plugin">
                                            <div className="icon"><Button/></div>
                                            <div className="txt"><p>Button</p></div>
                                        </div>
                                        <div className="plugin">
                                            <div className="icon"><Icons/></div>
                                            <div className="txt"><p>Icons</p></div>
                                        </div>
                                        <div className="plugin magic">
                                            <div className="icon"><Magic/></div>
                                            <div className="txt"><p>magic</p></div>
                                        </div>
                                    </div>
                                    <div className="c-plugins">
                                        <div>
                                            <div className="p-i"></div>
                                            <div className="t"></div>
                                        </div>
                                        <div>
                                            <div className="p-i"></div>
                                            <div className="t"></div>
                                        </div>
                                        <div>
                                            <div className="p-i"></div>
                                            <div className="t"></div>
                                        </div>
                                        <div>
                                            <div className="p-i"></div>
                                            <div className="t"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="generate">
                                    
                                </div>
                            </div>
                        </div>
                        <motion.div 
                        data-scroll
                        ref={outBoxRef as React.Ref<HTMLDivElement>}
                        initial={{ opacity: 0, scale: 0.0 }}
                        animate={outBoxControls}

                        className="out-box"  id="out-box">
                            <OutContentAI/>

                            <div className="create-ai">
                                <div>
                                    <div><Star/></div>
                                    <p>Create AI</p>
                                </div>
                                
                            </div>
                        </motion.div>
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
                                <p>Enhance user interactions and focus by adding effects to websites and apps, enriching the overall user experience. These visual enhancements encourage intuitive navigation and a more user-friendly environment.</p>
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
                                <div className="txt">layouts</div>

                            </div>
                            <h1> Structure with a few <span>clicks.</span></h1>
                        </div>
                        <div className="m-expl">
                            <div className="progress-contain">
                                <div className="progress"></div>
                            </div>
                            <div className="explain">
                                <p className="sub-title">Layouts</p>
                                <p>Effective visual effects guide user focus, enhance interaction with websites and apps, and enrich the user experience.</p>
                            </div>
                        </div>
                        <div className="see-all">
                            <Link to="./">
                                See all Layout
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