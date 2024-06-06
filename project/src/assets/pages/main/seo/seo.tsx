import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as FrameLogo} from '../../../img/logo/fill-logo.svg';
import { ReactComponent as CanvasImg } from '../../../img/canvas-hosting.svg';
import { useSeoAnimation } from '../animation-script';
import { motion } from "framer-motion";

const Seo = () =>{
    const [animation,setAnimation] = useSeoAnimation();

    return(
        <>
           <div className="txt-content">
                <div className="title">
                    <h1>SEO</h1>
                </div>
                <div className="sub-txt">
                    <p>FrameFix enables swift and effortless discovery through an optimized search engine.</p>
                </div>
                <div className="link-to-framefix">
                    <Link to={'./'}>
                        Start Framefix 
                    </Link>
                </div>  

           </div>
           <div className="animation-content">
                <div className="title">
                    <h1>Hosting</h1>
                </div>
                <div className="sub-txt">
                    <p>FrameFix enables swift and effortless discovery through an optimized search engine.</p>
                </div>

                <motion.div 
                ref={animation as React.Ref<HTMLDivElement> }
                initial = {{x : 0, y : 0,}}
                animate = {setAnimation}
                className="content-view-hosting-box">
                    <div className="view-box">
                        <div className="hosting-domain">
                            <p>https://www.framefix.com</p>
                        </div>
                        <div className="view-box-head">
                            <div className="framefix-logo"><FrameLogo/></div>
                            <div className="navbar">
                                <div>Resource</div>
                                <div>Features</div>
                                <div>Partner with us</div>
                                <div>About us</div>
                            </div>
                            <div className="sign">
                                <div className="login">Login</div>
                                <div className="sign-up">Sign up</div>
                            </div>
                        </div>
                        <div className="view-box-main">
                            <CanvasImg/>
                            <div className="top-right-blur"></div>
                            <div className="bottom-left-blur"></div>
                        </div>
                    </div>
                </motion.div>
           </div>
        </>
    )
}
export default Seo;