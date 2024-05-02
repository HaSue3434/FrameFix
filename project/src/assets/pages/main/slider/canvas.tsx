import React,{useState} from "react";
import { motion } from 'framer-motion';
import { ReactComponent as FrameLogo } from "../../../img/logo/frame-logo.svg";



import { ReactComponent as Template} from "../../../img/icons/framefix-plugin-icons/template.svg";
import { ReactComponent as Layer} from "../../../img/icons/framefix-plugin-icons/layer.svg";
import { ReactComponent as Text } from "../../../img/icons/framefix-plugin-icons/text.svg";
import { ReactComponent as Menus } from "../../../img/icons/framefix-plugin-icons/menus.svg";
import { ReactComponent as Header} from "../../../img/icons/framefix-plugin-icons/header.svg";
import { ReactComponent as Footer} from "../../../img/icons/framefix-plugin-icons/footer.svg";
import { ReactComponent as Slides} from "../../../img/icons/framefix-plugin-icons/slides.svg";
import { ReactComponent as Button} from "../../../img/icons/framefix-plugin-icons/button.svg";
import { ReactComponent as Icons} from "../../../img/icons/framefix-plugin-icons/icons.svg";
import { ReactComponent as Magic} from "../../../img/icons/framefix-plugin-icons/magic.svg";
import { ReactComponent as Locked } from '../../../img/icons/framefix-plugin-icons/locked.svg';
import { ReactComponent as Close } from '../../../img/icons/framefix-plugin-icons/close.svg';
import { ReactComponent as AssetsBottomArrow } from '../../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg';
import { ReactComponent as PageIcon } from '../../../img/icons/framefix-plugin-icons/page-icon.svg';
import { ReactComponent as Add } from '../../../img/icons/framefix-plugin-icons/add.svg';
import { ReactComponent as FrameIcon } from '../../../img/icons/framefix-plugin-icons/frame.svg';
import { ReactComponent as Rect } from '../../../img/icons/framefix-plugin-icons/Rect.svg';
import { ReactComponent as Folder } from '../../../img/icons/framefix-plugin-icons/folder.svg';
import { ReactComponent as Settings } from '../../../img/icons/framefix-plugin-icons/settings.svg';
import { ReactComponent as Preview } from '../../../img/icons/framefix-plugin-icons/view.svg';
 
import { ReactComponent as Contrains } from '../../../img/icons/framefix-style-icons/constrain.svg';
import { ReactComponent as Rotation } from '../../../img/icons/framefix-style-icons/rotation.svg';
import { ReactComponent as HorizontalFlip } from '../../../img/icons/framefix-style-icons/flip-horizontal.svg';
import { ReactComponent as VerticalFlip } from '../../../img/icons/framefix-style-icons/flip-vertical.svg';
import { ReactComponent as Eye } from '../../../img/icons/framefix-style-icons/eye.svg';


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
                            <div className="p-logo"><FrameLogo/></div>
                            <div className="file-name"><p><span>Drafts / </span>Project name</p></div>
                        </div>
                        <div className="tools"></div>
                        <div className="settings">
                            <div className="user">
                                <div className="profile">U</div>
                                <div><AssetsBottomArrow/></div>
                            </div>
                            <div className="m-preview common"><Settings/></div>
                            <div className="m-settings common"><Preview/></div>
                            <div className="m-publish">Publish</div>
                            <div className="zoom-in">
                                <span>100%</span>
                                <AssetsBottomArrow/>
                            </div>
                        </div>
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
                            <div className="assets">
                                <div className="t-layer">
                                    <div><h4>Layer</h4></div>
                                    <div className="close-btn"><Close/></div>
                                </div>
                                <div className="pages">
                                    <div className="t-page">
                                        <div><h4>Page</h4></div>
                                        <div className="pbi"><Add/><AssetsBottomArrow/></div>
                                    </div>
                                    <div className="files">
                                        <div className="page p1 current">
                                            <div><PageIcon/></div>
                                            <div><p>page1</p></div>
                                        </div>
                                        <div className="page p2">
                                            <div><PageIcon/></div>
                                            <div><p>page2</p></div>
                                        </div>
                                        <div className="page folder p2">
                                            <div><Folder/></div>
                                            <div><p><span>/</span>New Folder</p></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="layer">
                                    <div><h4>Layer</h4></div>
                                    <div className="layer-e">
                                        <div className="frame-1">
                                            <div className="frame-e"><AssetsBottomArrow/><FrameIcon/><p>Frame</p></div>
                                            <div className="frame-wrap">
                                                <div className="rect rect-1">
                                                    <div>
                                                        <Rect/>
                                                        <p>Rectangle1</p>
                                                    </div>
                                                    <div className="check">
                                                        <Locked/>
                                                    </div>
                                                    
                                                </div>
                                                <div className="rect rect-2">
                                                    <div>
                                                        <Rect/>
                                                        <p>Rectangle2</p>
                                                    </div>
                                                    <div className="check">
                                                        <Locked/>
                                                    </div>
                                                </div>
                                                <div className="rect rect-3">
                                                    <div>
                                                        <Rect/>
                                                        <p>Rectangle3</p>
                                                    </div>

                                                </div>
                                                <div className="rect rect-4">
                                                    <div>
                                                        <Rect/>
                                                        <p>Rectangle4</p>
                                                    </div>

                                                </div>
                                                <div className="rect rect-5">
                                                    <div>
                                                        <Rect/>
                                                        <p>Rectangle5</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="styles">
                            <div className="tabs">
                                <div>Design</div>
                                <div>Interactive</div>
                                <div>Handoff</div>
                            </div>
                            <div className="breakpoint">
                                <div className="breakpoint-option">
                                    <h4>Breakpoint</h4>
                                    <AssetsBottomArrow/>
                                </div>
                                <div className="apply">
                                    <div className="position">
                                        <div className="LP"><p>Position </p></div>
                                        <div className="p-value">
                                            <div><p><span>X : </span>100</p></div>
                                            <div><p><span>Y : </span>100</p></div>
                                        </div>
                                    </div>
                                    <div className="size">
                                        <div className="SP"><p>Size </p></div>
                                        <div className="s-value">
                                            <div className="common"><p><span>W : </span>1920</p></div>
                                            <div className="common"><p><span>H : </span>1080</p></div>
                                            <div><Contrains/></div>
                                        </div>
                                    </div>
                                    <div className="rotation">
                                        <div className="RP"><p>Rotation</p></div>
                                        <div className="r-value">
                                            <div className="rotate"><Rotation/><p>0</p></div>
                                            <div className="flip">
                                                <div className="horizontal-flip"><HorizontalFlip/></div>
                                                <div className="vertical-flip"><VerticalFlip/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="layer-apply">
                                <div className="pass-through">
                                    <div className="">
                                        <h4>Layer</h4>
                                    </div>
                                    <div className="option">
                                        <p>Pass Through</p>
                                        <AssetsBottomArrow/>
                                    </div>
                                </div>
                                <div className="opacity-value">
                                    <div className="v-h"><Eye/></div>
                                    <div className="opacity-range"></div>
                                    <div className="percents">100%</div>
                                </div>
                            </div>
                            <div className="style-apply">
                                <div className="style-add">
                                    <div><h4>Styles</h4></div>
                                    <div className="style-add-icon"><Add/></div>
                                </div>
                                <div className="fill-color">
                                    <div className="t"><p>FillColor</p></div>
                                    <div className="color-p">
                                        <div className="color-value">
                                            <div className="hex">
                                                <div className="fill"></div>
                                                <p>#000000</p>
                                            </div>
                                            <div><AssetsBottomArrow/></div>
                                        </div>
                                        <div className="alpha-percents">100%</div>
                                    </div>
                                </div>
                                <div className="overflow">
                                    <div><p>Overflow</p></div>
                                    <div className="overflow-option">
                                        <div><p>Visible</p></div>
                                        <div><AssetsBottomArrow/></div>
                                    </div>
                                </div>
                                <div className="layout">

                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
export default Canvas;
