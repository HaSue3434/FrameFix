import React from "react";
import { gsap } from 'gsap';
import "./user-search.css";
import { ReactComponent as Logo } from '../../../../img/logo/logo.svg';

const UserSearch = () =>{
    return (
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
                    <h1>Enter Your Project Name</h1>
                </div>
                <div className="input">
                    <div className="input-text">
                        <div>Your Project Name</div>
                    </div>
                    <div className="continue-btn">Continue --&gt;</div>
                </div>
                
            </div>      
        </div>
    );
}
export default UserSearch;
