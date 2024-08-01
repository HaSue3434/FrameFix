import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FBlur } from "../../../img/f-bl.svg";
import { ReactComponent as SEO } from "./canvas-img/site-canvas.svg";
import { ReactComponent as AI } from "./canvas-img/ai-icon.svg";
import { ReactComponent as AIGenerate } from "./canvas-img/ai-generate-icon.svg";
import { ReactComponent as CMS } from "./canvas-img/cms-svg.svg";
import { motion } from "framer-motion";



const Seo = () =>{
    const [percentage, setPercentage] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      if (percentage < 100) {
        intervalRef.current = setInterval(() => {
          setPercentage((prev) => prev + 1);
        }, 50);
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
  
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [percentage]);
    return(
        <>
        <div>
           <div className="website-builder-title">
                <h1>Website Builder</h1>
                <h1>Accelerates Growth</h1>

                <div className="go-to-dashboard">
                    <Link to={'./'}>
                        Go to dashboard
                    </Link>
                </div>
           </div>
           <div className="web-builder-container">
                <div className="grid-left-1 common-features common-contain">
                    <div id="feature-seo">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>SEO built into the system</h1>
                                <p>SEO optimization is automatically included in the system design.</p>
                            </div>
                            <div className="site-view-seo">
                                <SEO/>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background">
                            <div className="fancy-border-blur"></div>
                        </div>
                    </div>
                    <div id="feature-ai">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>AI features for <br></br> rapid building</h1>
                            </div>
                            <div className="box">
                                <div className="ai-icon"><AI/></div>
                                <div className="ai-create-imgs">
                                    <div className="create-a create">
                                        <div className="create-img-idx-1 common">
                                            <img src={require("./canvas-img/img-idx-1.jpg")} alt="" />
                                        </div>
                                        <div className="create-img-idx-2 common">
                                            <img src={require("./canvas-img/img-idx-2.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="create-b create">
                                        <div className="create-img-idx-3 common">
                                            <img src={require("./canvas-img/img-idx-3.jpg")} alt="" />
                                        </div>
                                        <div className="create-img-idx-4 common">
                                            <img src={require("./canvas-img/img-idx-4.jpg")} alt="" />

                                        </div>
                                    </div>
                                    <div className="create-c create">
                                        <div className="create-img-idx-5 common">
                                            <img src={require("./canvas-img/img-idx-5.jpg")} alt="" />
                                        </div>
                                        <div className="create-img-idx-6 common">
                                            <img src={require("./canvas-img/img-idx-6.jpg")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ai-generate">
                                    <div className="comment"><span>comment...</span></div>
                                    <div className="btn">
                                        <div className="ex-btn">Try Example</div>
                                        <div className="generate">
                                            <AIGenerate/>
                                            <span>Generate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background">
                            <div className="fancy-border-blur"></div>
                        </div>
                    </div>
                </div>
                <div className="grid-right-2 common-features common-contain">
                    <div id="feature-cms">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>Built-in CMS</h1>
                                <p>Real-time management with built-in CMS.</p>
                                <div className="cms-management">
                                    <div className="cms"><CMS/></div>
                                </div>
                                <div className="cms-settings">
                                        <div className = "title">
                                            <p>Title</p>
                                            <div className="text-box">
                                                Navigation Componnents
                                            </div>
                                        </div>
                                        <div className = "slug">
                                            <div className = "title">
                                                <p>Slug</p>
                                                <div className="text-box">
                                                    navigation-comoponents
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "description">
                                            <div className = "title">
                                                <p>Description</p>
                                                <div className="text-box">
                                                    Description....
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background">
                            <div className="fancy-border-blur"></div>
                        </div>
                    </div>
                    <div id="feature-responsive">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>Responsive web</h1>
                                <p>Make a responsive design <br></br>with just a few clicks.</p>
                            </div>
                            <div className="mobile-web">
                                <div className="common-mobile-web">
                                    <img src={require("./canvas-img/main-responsive.png")} alt="" />
                                </div>
                                <div className="common-mobile-web">
                                    <img src={require("./canvas-img/live-responsive.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background">
                            <div className="fancy-border-blur"></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="grid-bottom-3 common-contain">
                <div id="feature-layouts">
                    <div className="contents">
                        <div className="feature-title">
                            <h1>Familiar canvas.</h1>
                            <p>Create your layout on a familiar canvas.</p>
                        </div>   
                        <div className="layouts">
                            <div className="layout-1">
                                <img src = {require("./canvas-img/layout-1.jpg")} alt="" />
                            </div>
                            <div className="layout-2">
                                <img src = {require("./canvas-img/layout-2.jpg")} alt="" />
                            </div>
                            <div className="layout-3">
                                <img src = {require("./canvas-img/layout-3.jpg")} alt="" />
                            </div>
                        </div>
                    </div>
                    <Link to={"./"}></Link>
                    <div className="absolutly-white-background">
                        <div className="fancy-border-blur"></div>
                    </div>
                </div>
                <div id="loading">
                    <div className="contents">
                        <div className="feature-title">
                            <h1>Faster Loading</h1>
                        </div>   
                        <div className="circle">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Seo;