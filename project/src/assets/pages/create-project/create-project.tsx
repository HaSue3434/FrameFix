import React,{ useState,useEffect,useRef } from "react";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as PrevArrow } from "../../img/icons/prev-arrow.svg";
import { ReactComponent as Close } from "./project-maker-icons/close.svg";
import axios from 'axios';
import styles from './create-project.module.css';
import { Link } from "react-router-dom";
import { motion,AnimatePresence } from 'framer-motion';
import { 

    FileUpload,
    ImagePreview,
    SideImgViewsR,

} from './file-upload';

const CreateProject:React.FC = ()=>{

    const [files, setFiles] = useState<ImagePreview[]>([]); 

    useEffect(()=>{
        
    },[])

    return(
        <>
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
                                <PrevArrow/>
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
                                <h1>Desired Design References</h1>
                            </div>
                            <div className={`${styles.subTitle} ${styles.tCommon}`}>
                                <p>The more references you provide, the greater the chance <br/>of finding exactly what you're looking for.</p>
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
                        <div className={styles.sideImgView}>
                            <div className={styles.close}>
                                <div className={styles.icon}><Close/></div>
                            </div>
                            <div className={styles.sideImgViews}>
                                <SideImgViewsR files={files} setFiles={setFiles} />
                                {files.length > 0 ? '' : <div className={styles.emptyViews}><p>No images yet. Click to upload! </p></div>}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={`${styles.SelectIndustry} ${styles.common}`}>
                    <div className={styles.createHeader}>
                        <div className={styles.prevBtn}><PrevArrow/></div>
                        <div className={styles.headLogo}><Logo/></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </motion.div>
            
        </>
    )
}
export default CreateProject;