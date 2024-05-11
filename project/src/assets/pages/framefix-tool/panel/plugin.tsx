import React, { useEffect, useState } from "react";
import Styles from "../framefix.module.css";
import { motion,AnimatePresence } from 'framer-motion';
import {ReactComponent as Close} from '../../../img/icons/framefix-plugin-icons/close.svg';

// module import //
import LayerModule from './modules/layout/layerModule';
import FrameModule from './modules/layout/frameModule';
import ShapeModule from './modules/features/shapeModule';
import TextModule from './modules/features/textModule';
import MenuModule from './modules/features/menuModule';

// module import //

interface PluginsCommonProps {
    activePluginText: string;
    sideElement : HTMLDivElement;
    setAssetsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PluginsCommon: React.FC<PluginsCommonProps> = ({activePluginText,sideElement,setAssetsVisible}) => {
    if (!sideElement) return null;

    const handleClickClose = () => {
        //sideElement.animate([
        //    { opacity: 1 },
        //    { opacity: 0 }
        //], { duration: 150, easing: "ease-in-out" });

        //setTimeout(() => {
            setAssetsVisible(false);
       //}, 150); 
    }

    return(
        <>
            <div className={Styles.assetsWrapperPlugin}>
                <div className={Styles.T_H}>
                    <motion.h4
                        key={activePluginText} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activePluginText}
                    </motion.h4>

                    <div className={Styles.closeBtn} onClick={handleClickClose}>
                        <Close/>
                    </div>

                </div>
                <div className={Styles.contentsPlugins}>
                    <PluginItems activePluginText={`${activePluginText}`}/>
                </div> 
            </div>
        </>
    )
}


interface ComponentMap {
    [key: string]: React.FC<any> | undefined;
}

const componentMap: ComponentMap = {
    layer: LayerModule,
    frame: FrameModule,
    shape: ShapeModule,
    text: TextModule,
    menu: MenuModule,
};

const PluginItems: React.FC<{ activePluginText: string }> = ({ activePluginText }) => {
    const [moduleSwitch, setModuleSwitch] = useState<string[]>([]);

    useEffect(() => {
        const elements = document.querySelectorAll(".framefix_plugins__SWWXE ul li p");
        const texts = Array.from(elements).map(element => element.textContent || '');
        setModuleSwitch(texts);
    }, []);

    const ActiveComponent = componentMap[activePluginText.toLowerCase()];

    return (
        
        <>
            <motion.div
            key={activePluginText}
            initial = {{opacity : 0, visibility : "hidden"}}
            animate = {{opacity : 1, visibility : "visible"}}>
            </motion.div>

            {ActiveComponent ? (
                <ActiveComponent />
            ) : (
                <div>모듈을 찾을 수 없습니다: {activePluginText}</div>
            )}
        </>
    )
}