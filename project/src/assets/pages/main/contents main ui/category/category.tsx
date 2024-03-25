import React from 'react';
import { ReactComponent as Logo } from '../../../../img/logo/logo.svg';

import "./category.css";
export{};

const Categroy = () =>{
    return(
        <div className="view">
            <div className="view-header">
                <div className="prev">
                    &lt;--
                </div>
                <div className="view-logo">
                    <Logo/>
                </div>
                <div></div>
            </div>
            <div className="user-input">
                <div className="title">
                    <h1>Select A Industry</h1>
                    
                    <div className="create-btn">Create Project --&gt;</div>
                </div>
            </div>      
            <div className="grid-category">
                <div className="wrapper">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
export default Categroy;