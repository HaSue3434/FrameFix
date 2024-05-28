import React from "react";
import { Link } from "react-router-dom";

const Seo = () =>{
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
                <div className="img">
                    <img src={require("../../../img/sample-img.jpg")} alt="" />
                </div>
           </div>
           <div className="animation-content">
                <div className="title">
                    <h1>Hosting</h1>
                </div>
                <div className="sub-txt">
                    <p>FrameFix enables swift and effortless discovery through an optimized search engine.</p>
                </div>

                <div className="content-view-hosting-box">
                    <div className="view-box">
                        <div className="hosting-domain">

                        </div>
                        <div className="view-box-head"></div>
                        <div className="view-box-main"></div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Seo;