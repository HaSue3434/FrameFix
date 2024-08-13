import React,{ useState,useEffect,useRef } from "react";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as Close } from "./project-maker-icons/close.svg";
import { ReactComponent as Open } from "./project-maker-icons/open-imgview.svg";
import { ReactComponent as FramefixAI } from "./project-maker-icons/Framefix AI.svg";
import styles from './create-project.module.css';
import { Link } from "react-router-dom";
import { motion,AnimatePresence } from 'framer-motion';
import { 

    FileUpload,
    ImagePreview,
    SideImgViewsR,

} from './file-upload';
const CreateProject:React.FC = ()=>{

    const [isOpen, setIsOpen] = useState(true); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen); 
    };
    
    const [files, setFiles] = useState<ImagePreview[]>([]); 

    
    return(
        <>
        <AnimatePresence>
        <motion.div 
        initial = {{opacity : 0}}
        animate = {{opacity : 1}}
        transition={{duration : 1, ease : "anticipate"}}
        className={styles.createContain}>
            <div className={styles.createWrapper}>
                <div className={`${styles.projectInit} ${styles.common}`}>
                    <div className={styles.createHead}>
                        <div className={styles.logo}>
                            <Link to={"/"}>
                                <Logo/>
                            </Link>
                        </div> 
                    </div>
                    <div className={styles.userPrompt}>
                        <div className={styles.titles}>

                            <div>
                                <FramefixAI/>
                            </div>
                            
                            <div className={`${styles.title} ${styles.tCommon}`}>
                                <h1>Generate Reference</h1>
                            </div>
                            <div className={`${styles.subTitle} ${styles.tCommon}`}>
                                <p>Create a fast and high-quality UI using simple prompts and images. </p>
                            </div>

                        </div>
                        <div className={styles.form}>
                            <div className={styles.userCommentForm}>
                                <div className={styles.comment}>

                                </div>

                            </div>
                        </div>
                        <motion.div
                            className={styles.openButton}
                            onClick={toggleSidebar}
                            initial={{ x: '-150%' }}
                            animate={{ x: isOpen ? '-150%' : 0 }} 
                            transition={{ duration: 0.25 }}>
                          <div><p>Click to open the menu and delete images!</p></div>
                          <Open />
                        </motion.div>
                        <motion.div 

                        initial={{ x: 0 }}
                        animate={{ x: isOpen ? 0 : '-100%' }}
                        transition={{ duration: 0.25}} 

                        className={styles.sideImgView}>
                            <motion.div className={styles.close}>
                                <div className={styles.icon} onClick={toggleSidebar}><Close/></div>
                            </motion.div>
                            <div className={styles.sideImgViews}>
                                <SideImgViewsR files={files} setFiles={setFiles} />
                                {files.length > 0 ? '' : <div className={styles.emptyViews}><p>No images yet. Click to upload! </p></div>}
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
                <div className={`${styles.SelectIndustry} ${styles.common}`}>
                    <div className={styles.createHeader}>
                        <div className={styles.prevBtn}></div>
                        <div className={styles.headLogo}><Logo/></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>
        </>
    )
}
export default CreateProject;