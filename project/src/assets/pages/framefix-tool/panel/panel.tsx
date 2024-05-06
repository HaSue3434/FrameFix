import React from "react";
import Styles from '../framefix.module.css';


export const LeftPanel:React.FC = () =>{
    return(
        <>
        <div className={Styles.panel}>
            <div className={Styles.plugins}>
                
            </div>
            <div className={Styles.assets}></div>
        </div>
        </>
    )
} 
export const RightPanel:React.FC = () =>{
    return(
        <>
            <div>

            </div>
        </>
    )
}