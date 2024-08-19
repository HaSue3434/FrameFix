import React, { useEffect, useState } from "react";
import Styles from "../framefix.module.css";
import StylesMOdule from "../panel/modules/module-styles.module.css";
import {ReactComponent as Toolbar} from "../../../img/canvas-editor/frame-toolbar-icon.svg"
import { Layer } from "../types";
import { analytics,app,db } from "../../../../firebaseConfig";

const Frame = () =>{
    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
    const [boardClick, setBoardClick] = useState(false);
    const [name, setName] = useState<string>('');


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const newValue = e.target.value;
        setInputValues(prev => {
            const updatedValues = { ...prev, [key]: newValue };
            return updatedValues;
        });
    };

    return(
        <>
            {/* block 1 */}
            <div className={`${Styles.frame1} ${Styles.frame}`}  data-frame-layer = "frame1">
                {/* board */}
                <div className={Styles.board} >
                    <div className={Styles.boardName}>
                        <input

                        type="text"
                        placeholder="Untitled frame name"
                        value={inputValues['fr-frame1'] || ''}
                        onChange={(e) => handleInputChange(e, 'fr-frame1')}
                        
                        />
                    </div>
                    <div className={Styles.boardOption}>
                        <Toolbar/>
                    </div>
                </div>
                {/* board */}
                <div 
                data-node-type = "frame" 
                className={Styles.boardFrame}
                style={{width : "900px", height : "1800px", background : "#fff", }}
                ></div>
            </div>
            {/* block 1 */}
            {/* block 2 */}
            <div className={`${Styles.frame2} ${Styles.frame}`}  data-frame-layer = "frame2" style={{left : "1500px", top : "1500px"}}>
                {/* board */}
                <div className={Styles.board} >
                    <div className={Styles.boardName}>
                        <input

                        type="text"
                        placeholder="Untitled frame name"
                        value={inputValues['fr-frame2'] || ''}
                        onChange={(e) => handleInputChange(e, 'fr-frame2')}
                        
                        />
                    </div>
                    <div className={Styles.boardOption}>
                        <Toolbar/>
                    </div>
                </div>
                {/* board */}
                <div 
                data-node-type = "frame" 
                className={Styles.boardFrame}
                style={{width : "900px", height : "1800px", background : "red", }}
                ></div>
            </div>
            {/* block 2 */}
            
            {/* shape */}
            <div 
            className={StylesMOdule.shape}
            data-node-type = "shape" data-type-shape = "rectangle"
            style={{left : "3000px", top : "1300px", background : "red",width : "500px", height:"500px"}}>
            
            </div>
            {/* shape */}
        </>
    )
}
export default Frame;