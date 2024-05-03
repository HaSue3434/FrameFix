import React, {useEffect,useState,useRef} from "react";

import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as Logo } from "../../../img/logo/logo.svg";
import { ReactComponent as ImageIcon } from "../../../img/icons/img-icon.svg";
import { ReactComponent as PrevIcon } from "../../../img/icons/prev-arrow.svg";

/*icon import */

import { ReactComponent as Finance } from "../../../img/icons/finance.svg";
import { ReactComponent as Medical } from "../../../img/icons/medical.svg";
import { ReactComponent as Sports } from "../../../img/icons/sports.svg";
import { ReactComponent as Tech } from "../../../img/icons/tech.svg";
import { ReactComponent as Beauty } from "../../../img/icons/beauty.svg";
import { ReactComponent as Food } from "../../../img/icons/food.svg";
import { ReactComponent as Edu } from "../../../img/icons/education.svg";
import { ReactComponent as Travel } from "../../../img/icons/travel.svg";
import { ReactComponent as Furniture } from "../../../img/icons/sofa.svg";
import { ReactComponent as Build } from "../../../img/icons/build.svg";
import { ReactComponent as Group } from "../../../img/icons/group.svg";
import { ReactComponent as Internet } from "../../../img/icons/internet.svg";
import { ReactComponent as Retail } from "../../../img/icons/retail.svg";
import { ReactComponent as Flim } from "../../../img/icons/film.svg";
import { ReactComponent as Arts } from "../../../img/icons/arts.svg";
import { ReactComponent as Automotive } from "../../../img/icons/automotive.svg";
import { ReactComponent as Science } from "../../../img/icons/science.svg";
import { ReactComponent as Other } from "../../../img/icons/other.svg";
import { ReactComponent as Guide } from "../../../img/icons/guide.svg";

/*icon import */

/*
const variants = {
    hidden: { scale: 0 },
    visible: (i : number) => ({
        
        scale: 1,
        transition: { delay : Math.random() * 0.5 , type: "spring", stiffness: 90, damping : 10 },
    }),
    exit: (i : number) => ({
      scale: 0,
      transition: { delay: (8 - i) * 0.1 },
    }),
};
*/

const DefaultUI: React.FC = ()=>{

    return(
        <div className="project-maker-init">
            <AnimatePresence>
                <motion.div
                   
                    className="slide">

                    <div className="default">
                        <motion.div 
                        initial={{ 
                            height: 0,
                        }} 
                        animate={{ 
                            height: 80,
                            y : 0,
                        }}
                        transition={{ 
                            duration: 1,
                            ease: "anticipate",
                        }}
                        className="head">  

                        <motion.div 
                            initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{duration : 1, ease : "easeInOut", delay : 0.5,}}
                            className="head-logo"><Logo />
                        </motion.div>

                        </motion.div>  

                        <motion.div 
                        initial = {{opacity : 0, }}
                        animate = {{opacity : 1,}}
                        transition={{duration : 1.5, ease : "anticipate"}}
                        className="contents">
                            <div className="t">
                                <h1>Desired Design References</h1>
                                <p>The more references you desire, the higher the probability of obtaining the references you want.</p>
                            </div>
                            <div className="user-interaction">
                                <div>
                                    <div className="name">
                                        Enter your project name
                                    </div>
                                    <div className="file">
                                        <div className="upload-img">
                                            <div className="upload-txt">Upload Image</div>
                                            <div className="img-icon">
                                                <ImageIcon/>
                                                <div className="guide">
                                                    <Guide/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skip">
                                            Skip 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default DefaultUI;