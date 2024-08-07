import React, { useEffect, useRef, useState } from "react";
import styles from "../module-styles.module.css";
import { motion } from "framer-motion";
import { ReactComponent as FrameIcon} from "../../edit/layer-module-edit/frame-icon.svg";
import { ReactComponent as RectIcon} from "../../edit/layer-module-edit/Rect-icon.svg";
import { ReactComponent as Add} from "../../edit/layer-module-edit/add.svg";
import { ReactComponent as Folder} from "../../edit/layer-module-edit/folder-icon.svg";
import { ReactComponent as PageFile} from "../../edit/layer-module-edit/page-file-icon.svg";



const LayerModule  = () =>{

    const [openAdd, setOpenAdd] = React.useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isLock, setIsLock] = useState(false);

    {/* file add */}
    const handlerOpenAdd = () =>{
        setOpenAdd(true);
    }
    

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpenAdd(false);
        }
    };
    
    const inputValue = ( e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    {/* file add */}

    {/* file list */}

    const files = useRef<HTMLDivElement>(null);

    {/* file list */}


    

    return (
        <>
            <motion.div  className={`${styles.pageFiles}`}>
                <div className={styles.title}>
                    <h4>Page</h4>
                    <div className={styles.addFile} onClick={handlerOpenAdd} ref={dropdownRef}>
                        {/* add */}
                        <div className={styles.addBtn}>
                            <Add/>
                        </div>
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

                        
                    </div>
                </div>
                <div className={`${styles.List}`}>
                    <div className={`${styles.CommonFile} ${styles.page}`}>
                        <div className={`${styles.icon}`}>
                            <PageFile/>
                        </div>
                        <div className={`${styles.name}`}>

                        </div>                                                                                                                                                                                                                
                    </div>
                    <div className={`${styles.CommonFile} ${styles.folder}`}>

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
                            <div className={styles.layerFunc}>
                                <div className={styles.layerName}>
                                    <input type="text" />
                                </div>
                            </div>


                            {/* ui / contents */}
                            
                            
                            
                            {/* ui / contnets */}
                        </li>

                        <li className={`${styles.layerShape} ${styles.shape}`}>

                            <div className={styles.icon}><RectIcon/></div>

                            <div className={styles.layerFunc}>
                                <div className={styles.layerName}>
                                    <input type="text"
                                    onChange={(e) => inputValue(e)}
                                    
                                    />
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