import React, { useEffect, useState } from "react";
import Styles from "../framefix.module.css";
import {ReactComponent as Toolbar} from "../../../img/frame-toolbar-icon.svg"
import { Layer } from "../types";


const Frame = () =>{

    
    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('board-names') || '{}');
        setInputValues(storedValues);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const newValue = e.target.value;
        setInputValues(prev => {
            const updatedValues = { ...prev, [key]: newValue };
            localStorage.setItem('board-names', JSON.stringify(updatedValues));
            return updatedValues;
        });
    };

    return(
        <>
            {/* block */}
            <div className={`${Styles.frame1} ${Styles.frame}`}  data-frame-layer = "frame1">
                <div className={Styles.board}>
                    <div className={Styles.boardName}>
                        <input

                        type="text"
                        placeholder="Untitled frame name"
                        name={"frame"}
                        value={inputValues['frame'] || ''}
                        onChange={(e) => handleInputChange(e, 'frame')}
                        
                        />
                    </div>
                    <div className={Styles.boardOption}>
                        <Toolbar/>
                    </div>
                </div>

                <div data-node-type = "frame" className={Styles.boardFrame}></div>
            </div>
            {/* block */}
        </>
    )
}
export default Frame;