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
const PreferVariants1 = {
    hidden: {opacity : 0, y : 50},
    
    visible: (i : number) => ({
        opacity : 1, y : 0,
        transition : { ease : "anticipate", duration : 1}
    }),
    exit: (i : number) => ({
        opacity : 0,
        y : 0,
        transition : {duration : 1, ease : "anticipate"}
    })
}
const PreferVariants2 = {
    hidden: {opacity : 0, y : 50},
    
    visible:{
        opacity : 1, y : 0,
        transition : { ease : "anticipate", duration : 1, delay : 0.15}
    },
    exit:{
        opacity : 0,
        y : 0,
        transition : {duration : 1, ease : "anticipate", delay : 0.15}
    }
}

const PreferredListEx = { 
    noneSize: {height : 0},
    size : {
        height : '500px',
        transition : {duration : 1, ease : "anticipate", delay : 0.15,}
    },
    exit : {
        height : 0,
        transition : {duration : 1, ease : "anticipate", delay : 0.15,}
    }
}

const listItems = [1,2,3,4,5,6,7];

const PreferredList = (index:number) => ({
    noneSize: { height: 0 },
    size: {
      height: '500px',
      transition: { duration: 1, ease: "anticipate", delay: 0.25+index * 0.10 }
    },
    exit: {
      height: 0,
      transition: { delay: (8 - index) * 0.1 },
    }
  });

const items = [
    { id: 1, Icon: Finance, text: "Finance" },
    { id: 2, Icon: Medical, text: "Medical" },
    { id: 3, Icon: Sports, text: "Leisure & Sports" },
    { id: 4, Icon: Tech, text: "Technology" },
    { id: 5, Icon: Beauty, text: "Beauty" },
    { id: 6, Icon: Food, text: "Food & Drink" },
    { id: 7, Icon: Edu, text: "Education" },
    { id: 8, Icon: Travel, text: "Travel & Tourism" },
    { id: 9, Icon: Furniture, text: "Home & Interior" },
    { id: 10, Icon: Build, text: "Build & Land" },
    { id: 11, Icon: Group, text: "Group & Company" },
    { id: 12, Icon: Internet, text: "Internet" },
    { id: 13, Icon: Flim, text: "Entertainment" },
    { id: 14, Icon: Retail, text: "E-Commerce" },
    { id: 15, Icon: Arts, text: "Arts & Culture" },
    { id: 16, Icon: Automotive, text: "Flight & Shipping" },
    { id: 17, Icon: Science, text: "Science & Research" },
    { id: 18, Icon: Other, text: "Other..." },
];

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