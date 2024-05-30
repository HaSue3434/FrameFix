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
                    <Link to='/'>
                      <li className = 'framefix-features' >
                          <div className='f'>Features <Arrow/></div>
                          <ul>

                          </ul>
                      </li>
                    </Link>
                    <Link to='/'>
                      <li className = 'framefix-resource' >
                          <div className='f'>Resource <Arrow/></div>
                          <ul>

                          </ul>
                      </li>
                    </Link>
                    <Link to='/'><li>Updates</li></Link>
                    <Link to='/'><li>Community</li></Link>
                    <Link to='/'><li>Pricing</li></Link>
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