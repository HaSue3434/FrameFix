import React from "react";
import styles from './preview.module.css';
import { Link } from "react-router-dom";
import {ReactComponent as FrameLogo } from "../../../img/logo/frame-logo.svg";
import {ReactComponent as PreviewIcon } from "../../../img/icons/framefix-proto-view/preview-icon.svg";
import {ReactComponent as OverviewIcon } from "../../../img/icons/framefix-proto-view/overview-icon.svg";

const Preview:React.FC = () =>{

    return(
        <>
        <div className={styles.prototypeContainer}>
            <div className={styles.headControls}>
                <div className={styles.head}>
                    <div className={styles.headLeftCol}>
                        <div className={styles.framefixLogo}>
                            <Link to={'/'}>
                                <FrameLogo/>
                            </Link>
                        </div>
                        <div className={styles.projectName}><p>Project name</p></div>
                        <div className={styles.plans}>
                            <Link to={'/'}>
                                Free
                            </Link>
                        </div>
                    </div>
                    <div className={styles.headCenterCol}>
                        <div className={`${styles.previewPrototype} ${styles.common} ${styles.activeProtoType}`}>
                            <PreviewIcon/>
                            <div>
                                <p>Preview</p>
                            </div>
                        </div>
                        <div className={styles.hr}></div>
                        <div className={`${styles.overviewPrototype} ${styles.common}`}>
                            <OverviewIcon/>
                            <div>
                                <p>Overview</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.headRightCol}>
                        <div className={styles.user}></div>
                        <div className={styles.settings}></div>
                        <div className={styles.protoView}></div>
                        <div className={styles.publish}>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.viewContainer}>
                <div className={styles.explorerContainer}>
                    <div className={styles.sidePanel}>

                    </div>
                </div>
                <div className={styles.prototypeView}></div>
            </div>
        </div>
            
        </>
    )
}
export default Preview;
