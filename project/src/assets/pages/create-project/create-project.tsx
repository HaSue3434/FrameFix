import React,{ useState,useEffect,useRef } from "react";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as Close } from "./project-maker-icons/close.svg";
import { ReactComponent as Open } from "./project-maker-icons/open-imgview.svg";
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

    useEffect(()=>{
        
    },[])

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
                    <div className={styles.createHeader}>
                        <div className={styles.prevBtn}>
                            <Link to='../../'>
                                
                            </Link>
                        </div>
                        <div className={styles.headLogo}>
                        <Link to='../../'>
                            <Logo/>
                        </Link>
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.userPrompt}>
                        <div className={styles.titles}>
                            <div className={`${styles.title} ${styles.tCommon}`}>
                                <h1>Upload References</h1>
                            </div>
                            <div className={`${styles.subTitle} ${styles.tCommon}`}>
                                <p>The more references you provide<br></br>the better and more accuarate result you will get </p>
                            </div>

                        </div>
                        <div className={styles.form}>
                            <div className={styles.inputprojectName}>
                                <input type="text" placeholder="Enter your project name" name="project-name" id={styles.projectName} maxLength={30}/>
                                
                            </div>
                            <div className={styles.uploaderFile}>
                                
                                <div className={styles.upload}>
                                    <FileUpload files={files} setFiles={setFiles} />
                                </div>
                                <div className={styles.next}>
                                    {files.length > 0 ? 'Continue' : 'Skip'}
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
            <div className={styles.Blur}></div>
        </motion.div>
        </AnimatePresence>
        </>
    )
}
export default CreateProject;