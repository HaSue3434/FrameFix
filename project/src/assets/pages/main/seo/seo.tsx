import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FrameLogo } from '../../../img/logo/fill-logo.svg';
import { ReactComponent as CanvasImg } from '../../../img/canvas-hosting.svg';
import { ReactComponent as LinkTo } from '../../../img/link-to-arrow.svg';
import { useSeoAnimation } from '../animation-script';
import { motion } from "framer-motion";



const Seo = () =>{

    return(
        <>
           <div className="website-builder-title">
                <h1>Website Builder</h1>
                <h1>Accelerates Growth</h1>

                <div className="go-to-dashboard">
                    <Link to={'./'}>
                        Go to dashboard
                    </Link>
                </div>
           </div>
           <div className="features-item">
                
           </div>
        </>
    )
}
export default Seo;