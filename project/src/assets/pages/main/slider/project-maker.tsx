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

    const [position, setPosition] = useState(0);
    const [animateInternal, setAnimateInternal] = useState(false);
    const handleNextClick = () => {
      setPosition(prev => prev - 100); 
    };
  
    const handlePrevClick = () => {
      setPosition(prev => prev + 100);
    };
    useEffect(() => {
        setAnimateInternal(false);
    
        const timer = setTimeout(() => {

          setAnimateInternal(true);
        }, 500); 
    
        return () => clearTimeout(timer);
      }, [position]);
    return(
        <div className="project-maker-init">
            <AnimatePresence>
                <motion.div
                    animate={{
                       left: `${position}%`,
                    }}
                    transition={{ 
                        type: 'spring', 
                        stiffness: 120, 
                        damping: 12, 
                    }}
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
                            delay : 0.5
                        }}
                        className="head">  

                        <motion.div 
                            initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{duration : 1, ease : "easeInOut", delay : 1,}}
                            className="head-logo"><Logo />
                        </motion.div>

                        </motion.div>  

                        <div className="contents">
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
                                        <div className="skip"  onClick={handleNextClick}>
                                            Skip 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="researched">
                            <div className="head">
                                <div className="prev" onClick={handlePrevClick}>
                                    <PrevIcon/>
                                </div>
                                <div className="head-logo">
                                    <Logo/>
                                </div>
                            </div>
                            <div className="contents-researched">
                                <div className="title">
                                    <div>
                                        <div><motion.span
                                        variants={PreferVariants1}
                                        initial = "hidden"
                                        animate = {animateInternal ? 'visible' : 'hidden'}
                                        exit='exit'

                                        >Click your preferred</motion.span></div>

                                        <div>
                                            <motion.span
                                            variants={PreferVariants2}
                                            initial = "hidden"
                                            animate = {animateInternal ? 'visible' : 'hidden'}
                                            exit='exit'
                                            >reference.</motion.span>
                                        </div>

                                    </div>
                                </div>
                                <div className="list">
                                    <div className="wrap">
                                        <motion.div 
                                            variants={PreferredListEx}
                                            initial="noneSize"
                                            animate = {animateInternal ? 'size' : {}}
                                            exit='exit'
                                            className="items ex">
                                            <div className="head-ex">
                                                <div className="ex-logo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                                        <path d="M25.77 31.0978H19.3936C19.2614 31.0978 19.1373 31.149 19.0428 31.2435L12.0835 38.2028C11.7705 38.5158 11.9918 39.0501 12.4343 39.0501H35.3198C35.5923 39.0501 35.8163 38.8288 35.8163 38.5536V0.497433C35.8163 0.0548885 35.282 -0.16638 34.969 0.146639L26.4096 8.70609C26.3178 8.79784 26.2638 8.92467 26.2638 9.05689L26.2746 15.2498C26.2746 15.5224 26.0534 15.7463 25.7781 15.7463H22.1568C22.0246 15.7463 21.9005 15.7976 21.806 15.892L14.8467 22.8513C14.5337 23.1643 14.755 23.6986 15.1975 23.6986H25.7781C26.0507 23.6986 26.2746 23.9199 26.2746 24.1951L26.2638 30.6093C26.2638 30.8819 26.0426 31.1059 25.7673 31.1059L25.77 31.0978Z" fill="white"/>
                                                        <path d="M10.0463 13.3996H16.4227C16.5549 13.3996 16.6791 13.3483 16.7735 13.2539L23.7328 6.29457C24.0458 5.98155 23.8245 5.44727 23.382 5.44727H0.496513C0.223971 5.44727 0 5.66854 0 5.94378V43.9999C0 44.4424 0.534291 44.6637 0.84731 44.3507L9.40677 35.7912C9.49851 35.6995 9.55248 35.5727 9.55248 35.4404L9.54169 29.2475C9.54169 28.975 9.76296 28.751 10.0382 28.751H13.6595C13.7917 28.751 13.9159 28.6997 14.0103 28.6053L20.9696 21.646C21.2826 21.333 21.0613 20.7987 20.6188 20.7987H10.0382C9.76566 20.7987 9.54169 20.5774 9.54169 20.3022L9.55248 13.888C9.55248 13.6154 9.77375 13.3915 10.049 13.3915L10.0463 13.3996Z" fill="white"/>
                                                    </svg>
                                                </div>
                                                <div className="ex-nav">
                                                    <div>Features</div>
                                                    <div>Updates</div>
                                                    <div>Community</div>
                                                    <div>Pricing</div>
                                                </div>
                                                <div className="ex-btn">
                                                    Get Started
                                                </div>
                                            </div>
                                            <div className="contain">
                                                <div className="main">
                                                    <div className="ex-title">

                                                        <div className="title">
                                                            <p>The</p>
                                                            <p>Smarter.</p>
                                                        </div>
                                                        <div className="ex-description">
                                                            <p>streamlining your process and speeding up idea realization.</p>
                                                            <div className="btn">
                                                                Start
                                                            </div>
                                                        </div>
                                                        <div className="ex-slider">
                                                            <div>AI-powered</div>
                                                            <div>canvas</div>
                                                            <div>code</div>
                                                            <div>publish</div>
                                                        </div>
                                                    </div>
                                                    <div className="box" id="ex-reference">
                                                        <div onClick={handleNextClick}>
                                                            <img src={require("../../../img/sample-img.jpg")} alt="ex-img" />
                                                        </div>
                                                    </div>
                                                    <div className="box2">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>


                                        </motion.div>
                                        {listItems.map((item, index) => {
                                        const itemVariants = PreferredList(index);

                                        return (
                                          <motion.div
                                            key={item}
                                            className="items"
                                            variants={itemVariants}
                                            initial="noneSize"
                                            animate={animateInternal ? "size" : "noneSize"}
                                            exit="exit" 
                                          >
                                          </motion.div>
                                        );
                                         })}
                                    </div>
                                </div>
                            </div>
                        </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default DefaultUI;