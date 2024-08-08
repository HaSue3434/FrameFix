import React from 'react';
import { ReactComponent as Logo } from "../img/logo/logo.svg";
import { Link } from 'react-router-dom';
import {ReactComponent as Arrow} from "../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg";

const Header = () =>{


    return (
        <header id='header' >
            <nav>
                <div className = 'logo'>
                   <Link to='/'><Logo /></Link>
                </div>
                <ul className='nav'>
                    <li className='drop'>
                        <div className='framefix-features-nav drop-nav'>
                            <div>Features</div>
                            <div><Arrow/></div>
                        </div>
                     </li>
                    <li className='drop'>
                        <div className='framefix-resource-nav drop-nav'>
                            <div>Resource</div>
                            <div><Arrow/></div>
                        </div>
                    </li>
                    <Link to='/'><li>Updates</li></Link>
                    <Link to='/'><li>Community</li></Link>
                    <Link to='/'><li>Pricing</li></Link>
                    <Link to={'./'}><li>Support</li></Link>
                    <div id="move-line"></div>
                </ul>
                <div className='start-link'>
                    <Link to = '/sign-up'>
                        <div className='nav-f-link'>
                            <div>Get Started</div>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );  
    
}
export default Header;