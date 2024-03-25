import React, {useRef, useEffect, useState} from 'react';
import { ReactComponent as Logo } from "../img/logo/logo.svg";
import {Link} from 'react-router-dom';

interface LineStyle {
    width: string;
    left: string;
}

const Header = () =>{
    const [lineStyle, setLineStyle] = useState<LineStyle>({ width: '0px', left: '0px' });
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const navItems = navRef.current?.querySelectorAll("#header > nav>.nav li");
      console.log(navItems)
      const mouseOverHandler: EventListener = (event) => { 
        const e = event as MouseEvent; 
        const target = e.target as HTMLElement;
        const itemWidth = target.offsetWidth;
        const itemLeft = target.offsetLeft;
        setLineStyle({ width: `${itemWidth}px`, left: `${itemLeft}px` });
      };

      navItems?.forEach(item => {
        item.addEventListener("mouseover", mouseOverHandler);
      });

      return () => {
        navItems?.forEach(item => {
          item.removeEventListener("mouseover", mouseOverHandler);
        });
      };
    }, []);

    return (
        <header id='header'>
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
                    <Link to='/'><li>Updates</li></Link>
                    <Link to='/'><li>Community</li></Link>
                    <Link to='/'><li>Pricing</li></Link>
                    <div id="navigation-live" style={{ width: lineStyle.width, left: lineStyle.left }}></div>

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