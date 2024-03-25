import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import { gsap } from 'gsap';
import { ReactComponent as Column_Logo } from "../..//img/logo/column-logo.svg";

import './main.css';
import "./media.css"
import UserSearch from './contents main ui/user-search/user-search';
import Category from './contents main ui/category/category';
import Result from './contents main ui/result/result';

function Main(){
    
    return (
        <>
        <section className='main'>
            <div className = 'main-wrapper'>
                <div>
                    
                    <div className='title'>
                        <h1>AI-Powered Web
Design Canvas tool</h1>

                    </div>
                    <div className='btn-main-start'>
                        
                    <Link to="/">
                        <div className='btn'>Start FrameFix</div>
                    </Link>
                    </div>
                    
                </div>

                <div className='framefix'>
                    <div className='contents'>
                        <div className='sec1 sec-content'>
                            <UserSearch />
                        </div>
                        <div className='sec2 sec-content'>
                            <Category />
                        </div>
                        <div className='sec3 sec-content'>
                            <Result />
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section className='ai-powered-contain'>
            
            <div className='top-blur'></div>
            <div className='wrapper'>
                <div className='txt-contents'>
                    <div className="title">
                        <h1><strong>AI-Powered</strong> prompt support</h1>
                    </div>
                    <div className="explain">
                        <div className='feature active'>
                            <div className="content">
                                <div className='icon'>
                                    <img src={require("../../img/icons/prompt.png")} alt="" />
                                </div>
                                <div className='prompt txt'>
                                    <p>prompt</p>
                                </div>
                            </div>
                            <div className='description'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            
                        </div>
                        <div className='feature'>
                            <div className="content">
                                <div className='icon'>
                                    <img src={require("../../img/icons/create.png")} alt="" />
                                </div>
                                <div className='create txt'>
                                    <p>create image</p>
                                </div>
                            </div>
                            <div className='description'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className="content">
                                <div className='icon'>
                                    <img src={require("../../img/icons/keyword.png")} alt="" />
                                </div>
                                <div className='keyword txt'>
                                    <p>keyword</p>
                                </div>
                            </div>
                            <div className='description'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="start-framefix">
                        <Link to='/'>
                            <div className='btn'>
                               <div>
                                Start FrameFix
                               </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='framefix-designtool'>
                    <div id='first'  className='framefix-tool'></div>
                    <div id='second' className='framefix-tool'></div>
                    <div id='last'   className='framefix-tool'></div>
                </div>
                
            </div>
            <div className='bottom-blur'></div>
        </section>
        <section className='publish'>
            <div className='wrapper'>
                <div className="publish-txt">
                    <div className='publish-icon'>
                        <div className='icon'>
                            <img src={require("../../img/icons/publish.png")} alt="" />
                        </div>
                        <div className='tag'>
                            <span>Publish</span>
                        </div>
                    </div>
                    <div className='txt'>
                        <h1>
                            <span>Deploy Your Website</span>  Effortlessly With Just a Single Click
                        </h1>
                    </div>
                    <div className='start-framefix'>
                        <Link to="/">
                            <div className="btn">
                                Start FrameFix
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='publish-ex'>
                <div className='contents'>
                    <div className='main-content'></div>
                    <div className='sub-content'></div>
                </div>
            </div>
        </section>
        <section className='seo-contain'>
            <div className="contents">
                <div>
                    <div className='seo-t'>
                        <div className="title">
                            <h1>Search Engine Optimization</h1>
                        </div>
                        <div className="sub-title">
                            <p>FrameFix enables swift and effortless discovery through an optimized search engine.</p>
                        </div>
                        <div className="lead-more">
                            <Link to="/">
                                <div className="btn">
                                    <div>Lead More</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='framefix-cards'>
                        <div className='wrapper'>
                            <div className='left contain'>
                                <div className='small'>
                                    <p className='sementics'>Sementics</p>
                                    <div className='view-ex'>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="big metadata-contain">
                                    <p className='metadata'>Metadata</p>
                                    <div className="meta-settings">
                                        <div className='head'>
                                            <div className='title'>
                                                <p>Settings</p>
                                            </div>
                                            <div className='save'>Save</div>
                                        </div>
                                        <div className='setting'>
                                            <div className='meta-title-url'>
                                                <div className='meta-title'>
                                                    <p>Title</p>
                                                    <div className='user-input'>
                                                        <input type="text" placeholder='Title'/>
                                                    </div>
                                                </div>
                                                <div className='meta-url'>
                                                    <p>URL</p>
                                                    <div className='user-input'>
                                                        <input type="text" placeholder='URL' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='meta-description'>
                                                <p>Meta Description</p>
                                                <div className='textarea'>
                                                    <textarea/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='ex-view'>
                                        <div className='site-view'></div>
                                        <div className='open-graph'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='right contain'>
                                <div className='big'>
                                    <p className='editing'>Simple editing</p>
                                    <div className='open-img'>
                                        <div className='img'>
                                            <img src={require("../../img/gradient-mountain.jpg")} alt="" />
                                        </div>
                                        <div className='editing-content-box'>
                                            <div>
                                                <div className="head">
                                                    <div className="t">
                                                        <p>Image Settings</p>
                                                    </div>
                                                    <div className="save">
                                                        Save
                                                    </div>
                                                </div>
                                                <div className='settings'>
                                                    <div className='image'>
                                                        <div className='t'>
                                                            <p>Image</p>
                                                        </div>
                                                        <div className='img-contain'>
                                                            <div className='img-set'>
                                                                <div className='img'>
                                                                    <img src={require("../../img/gradient-mountain.jpg")} alt="" />
                                                                </div>
                                                                <div className="set">
                                                                    <p className='img-name'>FrameFix</p>
                                                                    <p className='size'>1200 X 627px</p>
                                                                    <p className='b'>230.1KB</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="replace">
                                                                <p>Replace image</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='img-alt'>
                                                        <div className='t'>
                                                            <p>Alt name</p>
                                                            <div className='text-input'>
                                                                Open Graph
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='img-type'>
                                                        <div className='t'>
                                                            <p>Img type</p>
                                                            <div className='type-selections'>
                                                                <div>JPEG</div>
                                                                <div className='select'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
<path opacity="0.2" d="M6.34782 7.64449C5.9561 8.27078 5.0439 8.27078 4.65218 7.64449L0.827968 1.53028C0.411388 0.864244 0.890207 1.75746e-08 1.67579 -5.11034e-08L9.32421 -7.19749e-07C10.1098 -7.88427e-07 10.5886 0.864244 10.172 1.53028L6.34782 7.64449Z" fill="#D9D9D9"/>
</svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='small'>
                                    <p className='sitemap'>Sitemap</p>
                                    <div className='view-ex'>
                                        <div>
                                            <div className='header'>
                                                <p>Sitemap Settings</p>
                                                <div className='save-btn'>
                                                      <div>Save</div>  
                                                </div>
                                            </div>
                                            <div className='check'>
                                                 <div className='checkbox'></div>
                                                 <div className='t'>Auto Sitemap</div>   
                                            </div>
                                            <div className='user-input'>
                                                <p>Custom Sitemap.xml</p>
                                                <div className="textarea">
                                                    <pre>
                                                        &lt;?xml version = "1.0" encoding = "UTF-8"? &gt; <br/>
                                                        &lt;urlset xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9"&gt;<br/>
                                                            &emsp;&lt;url&gt;<br/>
                                                            &emsp;&emsp;&lt;loc&lt;http://www.example.com/&lt;loc&gt;<br/>
                                                            &emsp;&emsp;&lt;lastmod&lt;2005-01-01&lt;lastmod&gt;<br/>
                                                            &emsp;&emsp;&lt;changefreq&lt;monthly&lt;changefreq&gt;<br/>
                                                            &emsp;&emsp;&lt;priority&lt;0.8&lt;priority&gt;<br/>
                                                            &emsp;&lt;url&gt;<br/>
                                                        &lt;/urlset&gt;
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="community">
            <div className = "title">
                <center>
                    <h1>Use the community to improve branding</h1>
                </center>
            </div>
            <div className='contain'>
                <div className = "wrapper">
                    <div className='contain'>
                        <div className='contents'>
                            <div className='back'>
                                <div className='circle'></div>
                                <div className='circle'></div>
                                <div className='circle'></div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="back-tile">
                    <div className='logo'>
                        <Column_Logo/>
                    </div>
                    <div className='btn'>
                        <Link to='/'>
                            <div>
                                Open Community
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
}
export default Main