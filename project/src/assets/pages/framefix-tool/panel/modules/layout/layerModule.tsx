import React, { useEffect, useRef, useState } from "react";
import styles from "../module-styles.module.css";
import {ReactComponent as Add} from "../../../../../img/icons/add.svg";
import { motion } from "framer-motion";

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
            <div className={styles.layer}>
                <div className={styles.title}><h4>Layer</h4></div>
            </div>
        </>
    )
}
export default LayerModule;