import React, {useRef, useEffect} from 'react';
import { ReactComponent as Logo } from "../img/logo/logo.svg";
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <header>
            <nav>
                <div className = 'logo'>
                   <Link to='/'><Logo /></Link>
                </div>
                <ul className='nav'>
                    <li className = 'framerfix-features'>
                        <div className='f'>Features</div>
                        <ul>

                        </ul>
                    </li>
                    <Link to='/'><li>Notices</li></Link>
                    <Link to='/'><li>Community</li></Link>
                    <Link to='/'><li>Pricing</li></Link>
                </ul>
                <ul className='start-link'>
                    <Link to = '/sign-up'>
                        <li>Login</li>
                    </Link>
                    <Link to = '/sign-up'>
                        <div className='nav-btn'>

                        </div>
                    </Link>
                </ul>
            </nav>
        </header>
    );  
    
}
export default Header;