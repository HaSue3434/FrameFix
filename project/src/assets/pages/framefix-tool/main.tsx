import React, { useEffect, useRef, useState } from 'react';
import styles from './framefix.module.css';
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { Link } from 'react-router-dom';

import { 
    LeftPanel,
    RightPanel
 } from './panel/panel';
import {IframeCanvas} from "./iframeCanvas";

import { 

    ProjectName,

 } from './types';

const MainComponent: React.FC=()=>{

    const [projectName, setProjectName] = useState<ProjectName>({ name: 'Untitled Project name', description: '' });

    const [popupScreen, setPopupScreen] = useState(false);
    
    return (
      <>
          <div className={styles.container} >
              <div className={styles.wrapper}>
                <CtrlWheelBlocker>
                        <div className={styles.headAppPointerFramefix}>
                           <div className={styles.headLeftColPointer}>
                                <div className={styles.frameLogo}>
                                    <Link to={'/'}><Logo/></Link>
                                </div>
                           </div>
                           <div className={styles.headCenterPointer}>
                                <div className={styles.projectName}>
                                    asdasd
                                </div>
                           </div>
                           <div className={styles.headRightColPointer}>
                                
                           </div>
                        </div>
                    </CtrlWheelBlocker>    
                    <div className={styles.mainContents}>
                       <CtrlWheelBlocker> 
                            <div className={styles.wrapperLeftPanel}>
                                <LeftPanel/>
                            </div>
                        </CtrlWheelBlocker>

                        <IframeCanvas/>

                        <CtrlWheelBlocker>
                            <div className={styles.wrapperRightPanel}>
                                <RightPanel/>
                            </div>
                        </CtrlWheelBlocker>
                    </div>
                    
              </div>
          </div>
          
      </>
    )
}
interface codeBlocker{
    children : any
}
const CtrlWheelBlocker:React.FC<codeBlocker> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const wheelHandler = (event: WheelEvent) => {
        if (event.ctrlKey) {
          event.preventDefault(); 
        }
      };
  
      const element = ref.current;
      if (element) {
        element.addEventListener('wheel', wheelHandler, { passive: false });
      }
  
      return () => {
        if (element) {
          element.removeEventListener('wheel', wheelHandler);
        }
      };
    }, []);
  
    return <div ref={ref}>{children}</div>;
  };
  
export default MainComponent;

export const PopupProjectNames = () =>{

    return (
        <>
            
        </>
    )
}