import React from 'react';
import { ReactComponent as Logo } from "../img/logo/logo.svg";

const Footer = () =>{
    return (

        <footer className='footer' data-scroll data-scroll-section>
            <div className="f-wrapper">
                <div className="footer-logo">
                    <div className='logo'><Logo/></div>
                    <div className='full-line'></div>
                </div>
            </div>
        </footer>
    );  
    
}
export default Footer;