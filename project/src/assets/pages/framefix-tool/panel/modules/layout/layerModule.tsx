import React, { useEffect, useRef, useState } from "react";
import styles from "../module-styles.module.css";
import {ReactComponent as Add} from "../../../../../img/icons/add.svg";
import { motion } from "framer-motion";

import { ReactComponent as RectangleIcon } from "../../../../../img/icons/framefix-plugin-icons/Rect.svg"; 
import { ReactComponent as FrameIcon } from "../../../../../img/icons/framefix-plugin-icons/layer-frame.svg"; 
import { ReactComponent as ListArrow } from "../../../../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg"; 
import { ReactComponent as Rock } from "../../../../../img/icons/framefix-plugin-icons/rock.svg"; 
import { ReactComponent as UnRock } from "../../../../../img/icons/framefix-plugin-icons/unrock.svg"; 
import Frame from "../../../canvas-editor/canvas-editor";

const LayerModule  = () =>{

    const [openAdd, setOpenAdd] = React.useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handlerOpenAdd = () =>{
        setOpenAdd(true);
    }
    

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpenAdd(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <>
            <motion.div  className={`${styles.pageFiles}`}>
                <div className={styles.title}>
                    <h4>Page</h4>
                    <div className={styles.addFile} onClick={handlerOpenAdd} ref={dropdownRef}>
                        <Add/>

                        {/* file option */} 
                        { openAdd ?

                        <div className={styles.openFileAddOptions}>
                            <ul className={styles.wrap}>
                                <li className={`${styles.option} ${styles.newPage}`}>New Page</li>
                                <li className={`${styles.option} ${styles.newFolder}`}>New Folder</li>
                            </ul>
                        </div>

                        : null }
                        {/* file option */} 
                        <div className={`${styles.files}`}>
                            
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className={styles.layers}>
                <div className={styles.title}><h4>Layers</h4></div>

                <div className={styles.layerEditing}>
                    <ul className={`${styles.layerList}`}>
                        <li className={`${styles.layerFrame} ${styles.frame}`}>
                            

                            <div className={styles.icon}>
                                {/* <div className={styles.iconArrow}><ListArrow/></div> */}
                                
                                <div className={styles.frameIcon}><FrameIcon/></div>
                            </div>
                            <div className={styles.layerName}><span>framefix</span></div>
                            {/* ui / contents */}

                            {/* ui / contnets */}
                        </li>

                        <li className={`${styles.layerShape} ${styles.shape}`}>
                            <div className={styles.icon}><RectangleIcon/></div>
                            <div className={styles.layerFunc}>
                                <div className={styles.layerName}><span>Rectangle1feasd_sdadeasdgasdd</span></div>
                                <div className={styles.layerRockAndOpen}>
                                    <div className={styles.openIcon}><UnRock/></div>
                                    {/* <div className={styles.rockIcon}></div>*/}
                                    
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </>
    )
}
export default LayerModule;