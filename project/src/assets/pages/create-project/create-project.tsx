import React,{ useState,useEffect,useRef } from "react";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as FramefixAI } from "./project-maker-icons/Framefix AI.svg";
import { ReactComponent as PromptIcon } from "./project-maker-icons/icon-prompt.svg";
import { ReactComponent as AIGenerateIcon } from "./project-maker-icons/ai-generate-icon.svg";
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

    
    return(
        <>
        <AnimatePresence>
        <motion.div 
            initial = {{opacity : 0}}
            animate = {{opacity : 1}}
            transition={{duration : 1, ease : "anticipate"}}
            className={styles.createContain}>

            <div className={styles.createHead}>
                <div className={styles.logo}>
                    <Link to={"/"}>
                        <Logo/>
                    </Link>
                </div> 
            </div>
            <motion.div 
            initial = {{top : 100}}
            animate = {{top : -100}}
            transition={{duration : 2, ease : "anticipate"}}
            className={styles.userPrompt}>
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
                    <form action="#" id={styles.form}>
                        <div className={styles.userCommentForm}>
                            <div className={styles.comment}>
                                <input type="text" placeholder="comment.." 
                                className={`${styles.prompt}`}
                                id={styles.prompt}/>
                                <div>
                                    <PromptIcon/>
                                </div>
                            </div>

                        </div>
                        <div className={styles.interaction}>
                            <div className={`${styles.fileUploader} ${styles.plan}`}>
                                <div className={styles.imageUploadBtn}>
                                    <FileUpload files={files} setFiles={setFiles} />
                                </div>
                            </div>
                            <div className={styles.generate}>
                                
                                <button type="submit" className={styles.send}>
                                    <AIGenerateIcon/>
                                    <span>Generate</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    
                </div>

            </motion.div>
            
                <motion.div 
                initial = {{height : "0vh"}}
                animate = {{height : "25vh"}}
                transition={{ease : "anticipate", duration : 2}}
                className={styles.viewContain}>
                    
                    <motion.div 
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    transition={{duration : 2, ease : "anticipate"}}
                    className={styles.viewWrapper}>
                        <SideImgViewsR files={files} setFiles={setFiles} />

                        {files.length > 0 ? '' : <div className={styles.emptyText}><p>No images yet. Click to upload! </p></div>}

                    </motion.div>
                    
                </motion.div>
        </motion.div>
        </AnimatePresence>
        </>
    )
}
export default CreateProject;