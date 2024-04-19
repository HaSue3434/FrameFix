import React, { Dispatch, SetStateAction} from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './create-project.module.css';
import { ReactComponent as Img } from "../../img/icons/img-icon.svg";


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
            <div><Img/></div>
        </div>
        <div className={styles.desiredReferenced}>
            {files.slice(0, 8).map((file, index) => (
                <div key={index} className={styles.img}>
                    <img src={file.previewUrl} alt={`preview ${index}`} style={{
                        width: 35,
                        height: 35,
                        objectFit: "cover",
                        borderRadius: 5,
                        userSelect: "none",
                        position: "relative",
                        marginLeft: index === 0 ? 0 : -25 // Adjust negative margin to stack images
                    }} />
                </div>
                ))}
                {count > 0 && (
                    <div className={styles.count}>
                        <p>...+{count+8}</p>
                    </div>
                )}
        </div>
        </>
    )
}
export type { ImagePreview };