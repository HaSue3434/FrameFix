import React, { useState } from "react";
import styles from './views.module.css';
import { Link } from "react-router-dom";
import { ReactComponent as FrameLogo } from "../../../img/logo/frame-logo.svg";
import { ReactComponent as PreviewIcon } from "../../../img/icons/framefix-proto-view/preview-icon.svg";
import { ReactComponent as OverviewIcon } from "../../../img/icons/framefix-proto-view/overview-icon.svg";
import Overview from "./overview"; 
import { AnimatePresence, motion } from 'framer-motion';
import { ActiveFlowDisplay } from "./activeFlowDisplay";

const Preview: React.FC = () => {
    const [activeTab, setActiveTab] = useState('preview');

    const [activeFlowName, setActiveFlowName] = useState('');
    const [activeFlowIndex, setActiveFlowIndex] = useState(-1);

    const handleFlowChange = (name: string, index: number) => {
        setActiveFlowName(name);
        setActiveFlowIndex(index);
    };
    return (
        <>
            <div className={styles.prototypeContainer}>
                <div className={styles.headControls}>
                    <div className={styles.head}>
                        <div className={styles.headLeftCol}>
                            <div className={styles.framefixLogo}>
                                <Link to={'/'}>
                                    <FrameLogo />
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
                            <div 
                                className={`${styles.previewPrototype} ${styles.common} ${activeTab === 'preview' ? styles.activeProtoType : ''}`}
                                onClick={() => setActiveTab('preview')}
                            >
                                <PreviewIcon />
                                <div><p>Preview</p></div>
                            </div>
                            <div className={styles.hr}></div>
                            <div 
                                className={`${styles.overviewPrototype} ${styles.common} ${activeTab === 'overview' ? styles.activeProtoType : ''}`}
                                onClick={() => setActiveTab('overview')}
                            >
                                <OverviewIcon />
                                <div><p>Overview</p></div>
                            </div>
                        </div>
                        <div className={styles.headRightCol}>
                            <div className={styles.user}>

                            </div>
                            <div className={styles.settings}>
                                
                            </div>
                            <div className={styles.protoView}></div>
                            <div className={styles.publish}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ViewContainer}>
                    <AnimatePresence>
                        {activeTab === 'overview' && (
                            <Overview onFlowChange={handleFlowChange} />
                        )}
                    </AnimatePresence>
                    {activeTab === 'overview' && (
                        <ActiveFlowDisplay activeFlowName={activeFlowName} activeIndex={activeFlowIndex} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Preview;