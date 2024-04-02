import React from "react";
import framefixStyles from './framefix.module.css';
import {useDrag} from 'react-dnd';

function FrameFix(){
    return(
        <>
            <div className={framefixStyles.contain}>
                {/*
                    <div>
                        code..
                    </div>
                */}
            </div>
        </>
    )
}
export default FrameFix;