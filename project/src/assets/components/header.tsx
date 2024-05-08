import React, {useRef, useEffect, useState} from 'react';
import { ReactComponent as Logo } from "../img/logo/logo.svg";
import {Link} from 'react-router-dom';


const Header = () =>{

  const lineRef = useRef<HTMLDivElement>(null);
  
  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const itemWidth = event.currentTarget.offsetWidth;
    const itemLeft = event.currentTarget.offsetLeft;

    if (lineRef.current) {
      lineRef.current.style.width = `${itemWidth}px`;
      lineRef.current.style.left  = `${itemLeft}px`;
    }
  };


    return (
        <header id='header'>
            <nav>
                <div className = 'logo'>
                   <Link to='/'><Logo /></Link>
                </div>
                <ul className='nav'>
                  <Link to='/' onMouseOver={handleMouseOver}>
                      <li className = 'framefix-features' >
                          <div className='f'>Features</div>
                          <ul>

                          </ul>
                      </li>
                    </Link>
                    <Link to='/' onMouseOver={handleMouseOver}><li>Updates</li></Link>
                    <Link to='/' onMouseOver={handleMouseOver}><li>Community</li></Link>
                    <Link to='/' onMouseOver={handleMouseOver}><li>Pricing</li></Link>
                    <div id="move-line" ref={lineRef}></div>
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