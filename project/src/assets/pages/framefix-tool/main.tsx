import React, { useEffect, useState } from 'react';
import styles from './framefix.module.css';
import FrameFix from './framefix';
import {ReactComponent as FrameLogo} from "../../img/logo/frame-logo.svg";
import {ReactComponent as AssetBottomArrow} from "../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg";
import { Link } from 'react-router-dom';

import { 
    LeftPanel,
    RightPanel
 } from './panel/panel';
import {IframeCanvas} from "./iframeCanvas";

interface CanvasProps {
    width: number;
    height: number;
  }

const MainComponent: React.FC=()=>{
    const [controlPressed, setControlPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Control') {
                setControlPressed(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'Control') {
                setControlPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const handleWheel = (event: React.WheelEvent) => {
        if (controlPressed) {
            event.preventDefault();
        }
    };
    
    return (
      <>
          <div className={styles.container} onWheel={handleWheel}>
              <div className={styles.wrapper}>
                    <div className={styles.headAppPointerFramefix}>
                       <div className={styles.headLeftColPointer}>
                           <div className={styles.projectFrameFix}>
                               <div className={styles.framefixLogo}><FrameLogo/></div>
                               <div className={styles.projectName}><p>Project name</p></div>
                               <AssetBottomArrow/>
                           </div>
                           <div className={styles.plans}>
                               <Link to={'/'}>
                                   Free
                               </Link>
                           </div>
                       </div>
                       <div></div>
                       <div></div>
                    </div>
                    <div className={styles.mainContents}>
                        <div className={styles.wrapperLeftPanel}>
                            
                        </div>
                        <IframeCanvas/>
                        <div className={styles.wrapperRightPanel}>

                        </div>
                    </div>
                    
              </div>
          </div>
          
      </>
    )
}
export default MainComponent;