import React, { Dispatch, SetStateAction} from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './create-project.module.css';
import { ReactComponent as Img } from "../../img/icons/img-icon.svg";
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as Del } from "./project-maker-icons/del.svg";
import { ReactComponent as Replace } from "./project-maker-icons/replace.svg";

interface ImagePreview {
    file: File;
    previewUrl: string;
}
interface FileUploadProps {
    files: ImagePreview[];
    setFiles: Dispatch<SetStateAction<ImagePreview[]>>;
}

export const FileUpload:React.FC<FileUploadProps> = ({files , setFiles }) => {

    const onDrop = (acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map(file => ({
            file,
            previewUrl: URL.createObjectURL(file)
        }));
        
        const totalFiles = [...files, ...newFiles];
        if (totalFiles.length > 20) { 
            setFiles(totalFiles.slice(0, 20));
        } else {
            setFiles(totalFiles);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { 'image/*': [] }
    });

    const count = files.length > 8 ? files.length - 8 : 0;

    return(
        <>
        <div {...getRootProps({ className: styles.dropzone })}>
            <input {...getInputProps()}  disabled={files.length >= 20} />
            <div className={styles.placeholder}>
                <p>{files.length > 0 ? '' : 'Upload Image'}</p>
            </div>
            <div className={styles.imgIcon}><Img/></div>
        </div>
        <div className={styles.desiredReferenced}>
        <AnimatePresence>
                {files.slice(0, 8).map((file, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={styles.img}>

                        <img src={file.previewUrl} alt={`preview ${index}`} style={{
                            position : "relative",
                            objectFit : "cover",
                            borderRadius : 5,
                            width : 35,
                            height : 35,
                            userSelect : "none",
                            marginLeft: index === 0 ? 0 : -25
                        }} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {count > 0 && (
                <div className={styles.count}>
                    <p>...+{count+8}</p>
                </div>
            )}
        </div>
        </>
    )
}

export const SideImgViewsR : React.FC<FileUploadProps> = ({files , setFiles }) => {

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            const newFiles = acceptedFiles.map(file => ({
                file,
                previewUrl: URL.createObjectURL(file)
            }));
            setFiles([...files, ...newFiles]);
        },
        accept: { 'image/*': [] },
        multiple: false 
    });

    const deleteImage = (index: number) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    const replaceInputRef = React.useRef<HTMLInputElement>(null);

    const replaceImage = (index: number, file: File) => {
        const newFile = {
            file,
            previewUrl: URL.createObjectURL(file)
        };
        setFiles(prevFiles => [
            ...prevFiles.slice(0, index),
            newFile,
            ...prevFiles.slice(index + 1)
        ]);
    };

    const handleReplaceClick = (index: number) => {
        const input = replaceInputRef.current;
        if (input) {
            input.onchange = (event: any) => {
                const file = event.target.files[0];
                if (file) {
                    replaceImage(index, file);
                }
            };
            input.click();
        }
    };
    return(
        <>
        <div {...getRootProps({ className: styles.dropzone })}>
            <input {...getInputProps()}  disabled={files.length >= 20} />
            <div className={styles.placeholder}>
                <p>{files.length > 0 ? '' : 'Upload Image'}</p>
            </div>
            <div className={styles.imgIcon}><Img/></div>
        </div>
        <div className={styles.desiredReferenced}>
        <AnimatePresence>
                {files.map((file, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={styles.img}>

                        <img src={file.previewUrl} alt={`preview ${index}`}/>
                        <div>
                            <div className={styles.replace} onClick={() => handleReplaceClick(index)}><Replace/></div>
                            <div className={styles.del} onClick={() => deleteImage(index)}><Del/></div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
        {/* Hidden input for file replacement */}
        <input
        type="file"
        style={{ display: 'none' }}
        ref={replaceInputRef}
        accept="image/*"
        />
        </>
    )
}

export type { ImagePreview };