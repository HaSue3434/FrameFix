import React from "react";
import { ReactComponent as HeadSvg } from "../../../img/head-svg.svg";
import { ReactComponent as LeftPanelSvg } from "../../../img/left-panel.svg";
import { ReactComponent as RightPanelSvg } from "../../../img/right-panel.svg";
import { ReactComponent as AnimationFromToSvg } from "../../../img/animation-from-to-svg.svg";
import { ReactComponent as DesktopFrame } from "../../../img/desktop-frame.svg";


const FrameFixFooter = () =>{
    return(
        <>
            <div className="wrapper">
                <div className="head">
                    <HeadSvg/>
                </div>
                <div className="main-contents">
                    <div className="left">
                        <LeftPanelSvg/>
                    </div>
                    <div className="right">
                        <RightPanelSvg/>
                    </div>
                </div>
                <div 
                data-scroll
                data-scroll-speed = "-1"
                className="animation-from-to">
                    <AnimationFromToSvg/>
                </div>
                <div className="contents-frame">
                    <div className="desktop-frame">
                        <DesktopFrame/>
                    </div>
                    <div className="mobile-frame"></div>
                </div>
            </div>
        </>
    )
}
export default FrameFixFooter;