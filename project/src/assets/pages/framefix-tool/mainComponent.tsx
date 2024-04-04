import React from 'react';
import styles from './framefix.module.css';
import FrameFix from './framefix';

const MainComponent : React.FC = () =>{
    return (
      <>
          <div className={styles.container}>
            <FrameFix>
              <p>dragg</p>
            </FrameFix>
          </div>
      </>
    )
}
export default MainComponent;