import React from 'react';
import { ReactComponent as Logo } from "../img/logo/logo.svg";
import { Link } from 'react-router-dom';
import { ReactComponent as Insta } from '../img/instagram.svg';
import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as SocialTxt } from '../img/Social.svg';

const Footer = () =>{
    return (

        <footer className='footer' data-scroll data-scroll-section>
            <div className="f-wrapper">
                <div className='start-design'>
                    <h1>Start your design</h1>
                    <div className='get-started'>
                        <Link to="./">
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className='division'></div>
                <div className='framefix'>
                    <div className='left'>
                        <div><Logo/></div>
                        <div className='txt'><p>Design your UI and build it quickly.</p></div>
                    </div>
                    <div className='right'>
                        <ul className='features'>
                            <div className='loc'><p>Features</p></div>
                            <li>
                                <Link to={'./'}>
                                    AI-Powered
                                </Link>
                                <div className='new'>New</div>
                            </li>
                            <li>
                                <Link to={'./'}>
                                    CMS
                                </Link>
                            </li>
                            <li>
                                <Link to={'./'}>SEO</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Layout</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Responsive</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Hosting</Link>
                            </li>
                        </ul>
                        <ul className='resource'>
                            <div className='loc'><p>Resource</p></div>
                            <li>
                                <Link to={'./'}>Community</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Our News</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Gallery</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Blog</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Templates</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Plugins</Link>
                            </li>
                        </ul>
                        <ul className='help'>
                            <div className='loc'><p>Help center</p></div>
                            <li>
                                <Link to={'./'}>Contact</Link>
                            </li>
                            <li>
                                <Link to={'./'}>Pricing</Link>
                            </li>
                            <li>
                                <Link to={'./'}>About</Link>
                            </li>
                        </ul>
                        <div className='social'>
                            <div><p>Social</p></div>
                            <div className='social-link'>
                                <Link to={'https://www.instagram.com/'}><Insta/></Link>
                                <Link to={'./'}><Facebook/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );  
    
}
export default Footer;