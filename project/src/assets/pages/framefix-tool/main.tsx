import React from 'react';
import styles from './framefix.module.css';
import FrameFix from './framefix';
import {ReactComponent as FrameLogo} from "../../img/logo/frame-logo.svg";
import {ReactComponent as AssetBottomArrow} from "../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg";
import { Link } from 'react-router-dom';
import Canvas from './canvasProps';

import { 
    LeftPanel,
    RightPanel
 } from './panel/panel';

interface CanvasProps {
    width: number;
    height: number;
  }

const MainComponent: React.FC=()=>{
    return (
      <>
          <div className={styles.container}>
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
                    <div className={styles.wrapperLeftPanel}>
                        
                    </div>
                    <div className={styles.wrapperRightPanel}></div>
              </div>
          </div>
          <Canvas />
      </>
    )
}
export default MainComponent;