import React from "react";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as PrevArrow } from "../../img/icons/prev-arrow.svg";
import axios from 'axios';
import styles from './create-project.module.css';
import { Link } from "react-router-dom";


function CreateProject(){
    return(
        <>
        <div className={styles.createContain}>
            <div className={styles.createWrapper}>
                <div className={styles.projectInit}></div>
                <div className={styles.SelectIndustry}></div>
            </div>
        </div>
            
        </>
    )
}
export default CreateProject;