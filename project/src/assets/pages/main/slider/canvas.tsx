import React,{useState} from "react";
import { motion } from 'framer-motion';
import { ReactComponent as FrameLogo } from "../../../img/logo/frame-logo.svg";



import {ReactComponent as Template} from "../../../img/icons/framefix-plugin-icons/template.svg";
import {ReactComponent as Layer} from "../../../img/icons/framefix-plugin-icons/layer.svg";
import {ReactComponent as Text} from "../../../img/icons/framefix-plugin-icons/text.svg";
import {ReactComponent as Menus} from "../../../img/icons/framefix-plugin-icons/menus.svg";
import {ReactComponent as Header} from "../../../img/icons/framefix-plugin-icons/header.svg";
import {ReactComponent as Footer} from "../../../img/icons/framefix-plugin-icons/footer.svg";
import {ReactComponent as Slides} from "../../../img/icons/framefix-plugin-icons/slides.svg";
import {ReactComponent as Button} from "../../../img/icons/framefix-plugin-icons/button.svg";
import {ReactComponent as Icons} from "../../../img/icons/framefix-plugin-icons/icons.svg";
import {ReactComponent as Magic} from "../../../img/icons/framefix-plugin-icons/magic.svg";

const Canvas: React.FC = ()=>{

    const plugins = [
        { id: 1, Component: Template, text: "Template", pClass : "p-template" },
        { id: 2, Component: Layer, text: "Layer", pClass : "p-layer"  },
        { id: 3, Component: Text, text: "Text", pClass : "p-text"  },
        { id: 4, Component: Menus, text: "Menus", pClass : "p-menus"  },
        { id: 5, Component: Header, text: "Header", pClass : "p-header"  },
        { id: 6, Component: Footer, text: "Footer", pClass : "p-footer"  },
        { id: 7, Component: Slides, text: "Slides", pClass : "p-slides"  },
        { id: 8, Component: Button, text: "Button", pClass : "p-button"  },
        { id: 9, Component: Icons, text: "Icons", pClass : "p-icons"  },
        { id: 10, Component: Magic, text: "Magic", pClass : "p-magic"  }
    ];

    return(
        <>
            <motion.div 
            
            className="framefix-ui">
                <motion.div
                initial = {{opacity : 0, background : "#000"}}
                animate = {{opacity : 1, background : "#1B1B1B"}}
                transition={{duration : 1, ease : "anticipate"}}
                >
                    <div className="ui-head">
                        <div className="project-name">
                            <div><FrameLogo/></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="tools"></div>
                        <div className="settings"></div>
                    </div>
                    <div className="ui-body">
                        <div className="plugins">
                            <div className="option">
                            {plugins.map((plugin, index) => (
                                <motion.div
                                  key={plugin.id}
                                  className={`plugin ${plugin.pClass}`}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.1* index, duration: 0.5, ease : "anticipate"}}
                                >
                                  <plugin.Component />
                                  <p>{plugin.text}</p>
                                </motion.div>
                            ))}
                            </div>
                            <div className="assets"></div>
                        </div>
                        <div className="styles">

                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
export default Canvas;
