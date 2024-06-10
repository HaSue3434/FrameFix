import React, { useEffect, useRef, useState } from 'react';
import styles from './framefix.module.css';
import {ReactComponent as FrameLogo} from "../../img/logo/frame-logo.svg";
import {ReactComponent as AssetBottomArrow} from "../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg";
import { Link } from 'react-router-dom';

import { 
    LeftPanel,
    RightPanel
 } from './panel/panel';
import {IframeCanvas} from "./iframeCanvas";

const MainComponent: React.FC=()=>{

    const [projectName, setProjectName ] = useState('');


    return (
      <>
          <div className={styles.container} >
              <div className={styles.wrapper}>
                <CtrlWheelBlocker>
                        <div className={styles.headAppPointerFramefix}>
                           <div className={styles.headLeftColPointer}>
                               <div className={styles.projectFrameFix}>
                                    <div className = {styles.frameLogo}>
                                          <Link to={'/'}><FrameLogo/></Link>
                                    </div>

                                    <div className={styles.division}></div>

                                    <div className={styles.framefixProjectName}>
                                      <div className={styles.projectName}>Untitled Project name</div>
                                    </div>

                                    <div className={styles.plans}>
                                      <Link to={'/'}>Free</Link>
                                    </div>
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