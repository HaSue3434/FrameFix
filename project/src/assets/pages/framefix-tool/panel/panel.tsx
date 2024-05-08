import React, { useRef, useState } from "react";
import Styles from '../framefix.module.css';

// icon plugin //
import {ReactComponent as Template } from "../../../img/icons/framefix-plugin-icons/template.svg";
import {ReactComponent as Layer } from "../../../img/icons/framefix-plugin-icons/layer.svg";
import {ReactComponent as Frame } from "../../../img/icons/framefix-plugin-icons/frame.svg";
import {ReactComponent as Shape } from "../../../img/icons/framefix-plugin-icons/shape.svg";
import {ReactComponent as Text } from "../../../img/icons/framefix-plugin-icons/text.svg";
import {ReactComponent as Menus } from "../../../img/icons/framefix-plugin-icons/menus.svg";
import {ReactComponent as Header } from "../../../img/icons/framefix-plugin-icons/header.svg";
import {ReactComponent as Footer } from "../../../img/icons/framefix-plugin-icons/footer.svg";
import {ReactComponent as Slides } from "../../../img/icons/framefix-plugin-icons/slides.svg";
import {ReactComponent as Button } from "../../../img/icons/framefix-plugin-icons/button.svg";
import {ReactComponent as Icons } from "../../../img/icons/framefix-plugin-icons/icons.svg";
import {ReactComponent as Images } from "../../../img/icons/framefix-plugin-icons/images.svg";
import {ReactComponent as Magic } from "../../../img/icons/framefix-plugin-icons/magic.svg";

import { motion,AnimatePresence } from 'framer-motion';


// icon plugin //

import { PluginsCommon } from "./plugin";
import { 
    
    TemplateModule,
    LayerModule,
    TextModule,

} from "./items/items";       

const variantsPlugin = [
    
    {plugin: Template,  text : "template"   },
    {plugin: Layer,     text : "layer"      },
    {plugin: Frame,     text : "frame"      },
    {plugin: Shape,     text : "shape"      },
    {plugin: Text,      text : "text"       },
    {plugin: Menus,     text : "menus"      },
    {plugin: Header,    text : "header"     },
    {plugin: Footer,    text : "footer"     },
    {plugin: Slides,    text : "slides"     },
    {plugin: Button,    text : "button"     },
    {plugin: Icons,     text : "icons"      },
    {plugin: Magic,     text : "magic"      },
     
];


export const LeftPanel: React.FC = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const sideRef = useRef<HTMLDivElement>(null);
    const [assetsVisible, setAssetsVisible] = useState(false);
    const [activePluginText, setActivePluginText] = useState("");
    const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const newItem = event.currentTarget;
        const itemHeight = newItem.offsetHeight;
        const itemTop = newItem.offsetTop;

        if (lineRef.current) {
            lineRef.current.style.height = `${itemHeight}px`;
            lineRef.current.style.top = `${itemTop}px`;
            lineRef.current.style.transition = `top 0.15s ease, height 0.15s ease`;
        }

        setAssetsVisible(true);
        
        if (activeElement) {
            activeElement.classList.remove(Styles.activePlugin);
        }

        newItem.classList.add(Styles.activePlugin);
        setActiveElement(newItem);

        const pluginText = newItem.querySelector('p')?.textContent || "";
        setActivePluginText(pluginText);
    };

    const handleOver = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const item = event.currentTarget;
        if (lineRef.current) {
            lineRef.current.style.height = `${item.offsetHeight}px`;
            lineRef.current.style.top = `${item.offsetTop}px`;
            lineRef.current.style.transition = `top 0.15s ease, height 0.15s ease`;
            lineRef.current.style.opacity = "1";
        }
    };

    const handleOut = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if (lineRef.current && activeElement) {
            lineRef.current.style.opacity = "0";
        }
    };

    return (
        <>
            <div className={Styles.panel}>
                <div className={Styles.plugins}>
                    <ul>
                        {variantsPlugin.map((item, index) => {
                            const Icon = item.plugin;
                            return (
                                <li key={index} 
                                    onClick={handleClick}
                                    onMouseOver={handleOver}
                                    onMouseOut={handleOut}>
                                    
                                    <Icon />
                                    <p>{item.text}</p>
                                </li>
                            );
                        })}
                        <div id={Styles.moveLine} ref={lineRef}></div>
                    </ul>
                </div>
                <div className={Styles.leftSideComponents} style={{ display: assetsVisible ? 'block' : 'none' }} ref={sideRef}>
                    <AnimatePresence>
                        <PluginsCommon activePluginText={`${activePluginText}`} sideElement={sideRef.current as HTMLDivElement} setAssetsVisible={setAssetsVisible}/>
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};




export const RightPanel:React.FC = () =>{

    

    return(
        <>
            <div>
                
            </div>
        </>
    )
}