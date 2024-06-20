import React from "react";

import { ReactComponent as LinkToProduct } from '../../../img/link-to-project.svg';
import { ReactComponent as PR } from '../../../img/PR.svg';
import { ReactComponent as Ducts } from '../../../img/ducts.svg';
import { ReactComponent as Design } from '../../../img/design.svg';
import { ReactComponent as Studio } from '../../../img/studio.svg';
import { motion } from 'framer-motion';
import { ReactComponent as FirstTx } from '../../../img/first-tx.svg';
import { ReactComponent as SecondTx } from '../../../img/second-tx.svg';
import { ReactComponent as ThirdTx } from '../../../img/third-tx.svg';

const View = () =>{

    return(
        <>
            <div 
            className="main-img">
                <motion.div 
                
                initial = {{scale : 0.8, opacity:0.5}}
                animate = {{scale : 1, opacity : 1,}}
                transition={{duration : 1, ease : "easeInOut", delay : 1.2}}
                className="img"><img src={require("../../../img/chain.jpg")} alt="" /></motion.div>
            </div>
            <motion.div 
            initial = {{opacity : 0, y : -30,}}
            animate = {{opacity : 1, y : 0,}}
            transition={{duration : 0.55, delay: 2.5, ease: "easeInOut"}}
            className="view-head">
                <div>
                    <div className="designing-logo"><p>DESIGNING</p></div>
                    <div className="start"><p>Let's start</p></div>
                    <div className="menu"><p>Menu</p></div>
                    <div className="about-us"><p>About-us</p></div>
                    <div className="sign-up"><p>Sign up</p></div>
                </div>
            </motion.div>
            <div className="view-main">

                <div className="titles">
                    <div className="product">
                        <div className="PR">
                            <motion.div
                            initial = {{y : 150}}
                            animate = {{y : 0}}
                            transition={{duration : 1, ease : "easeInOut", delay :1,}}
                            >
                                <PR/>
                            </motion.div>
                            
                        </div>
                        <motion.div 
                        initial = {{scale : 0, opacity : 0}}
                        animate = {{scale : 1, opacity : 1,}}
                        transition={{ duration : 1, ease : "circInOut", delay : 2}}
                        className="link-to-product">
                            <LinkToProduct/>
                        </motion.div>
                        <div className="duct">
                            <motion.div
                            initial = {{y : 150}}
                            animate = {{y : 0}}
                            transition={{duration : 1, ease : "easeInOut", delay :1.2,}}
                            >
                                <Ducts/>
                            </motion.div>
                           
                        </div>
                    </div>
                    <div className="studio">
                        <div className="design-h">
                            <motion.div
                            initial = {{y : 150}}
                            animate = {{y : 0}}
                            transition={{duration : 1, ease : "easeInOut", delay :1.4,}}
                            >
                                <Design/>
                            </motion.div>
                            
                        </div>
                        <div className="studio-h">
                            <motion.div
                            initial = {{y : 150}}
                            animate = {{y : 0}}
                            transition={{duration : 1, ease : "easeInOut", delay :1.6,}}
                            >
                                <Studio/>
                            </motion.div>
                            
                        </div>
                    </div>
                    <div className="main-sub-txt">
                    <div>
                        <div className="t">

                            <motion.div
                            initial = {{y : 150, opacity : 0}}
                            animate = {{y : 0, opacity : 1}}
                            transition={{ duration : 1, ease : "easeInOut", delay : 2.5,}}
                            >
                                <FirstTx/>
                            </motion.div>
                            
                        </div>
                        <motion.div 
                        initial = {{opacity : 0,}}
                        animate = {{opacity : 1,}} 
                        transition={{duration : 1, ease : "easeInOut", delay : 2.5,}}
                        className="division"></motion.div>
                        <div className="t">
                            <motion.div
                            initial = {{y : 150, opacity : 0}}
                            animate = {{y : 0, opacity : 1}}
                            transition={{ duration : 1, ease : "easeInOut", delay : 2.7,}}
                            >

                                <SecondTx/>
                            </motion.div>
                            
                        </div>
                        <motion.div 
                        initial = {{opacity : 0,}}
                        animate = {{opacity : 1,}} 
                        transition={{duration : 1, ease : "easeInOut", delay : 2.7,}}
                        className="division"></motion.div>
                        <div className="t">
                            <motion.div
                            initial = {{y : 150, opacity : 0}}
                            animate = {{y : 0, opacity : 1}}
                            transition={{ duration : 1, ease : "easeInOut", delay : 2.9,}}
                            >
                                <ThirdTx/>
                            </motion.div>
                            
                        </div>
                    </div>
                </div>
                </div>
                                
            </div>
        </>
    )
}
export default View;


