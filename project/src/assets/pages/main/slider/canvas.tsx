import React from "react";
import { motion } from 'framer-motion';

const Canvas: React.FC = ()=>{
    return(
        <>
            <div className="framefix-ui">
                <div className="ui-head">
                    <div className="project-name"></div>
                    <div className="tools"></div>
                    <div className="settings"></div>
                </div>
                <div className="ui-body">
                    <div className="plugin">
                        <div className="selection-plugins"></div>
                        <div className="assets"></div>
                    </div>
                    <div className="styles">

                    </div>
                </div>
            </div>
        </>
    )
}
export default Canvas;
