import React from 'react';
import { ReactComponent as Logo } from '../../../../img/logo/logo.svg';

import './result.css';

export{}


const Result = () =>{
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
            <div className="title">
                <h1>Searched Design Reference</h1>
            </div>
            <div className="list-wrapper">
                <div className="grid">
                    
                    <div id = 'view-item1' className='view-item'>
                       <div className='header'>
                            <div>
                                <img src={require("./images/white-logo.png")} alt="" />
                            </div>
                            <div className='ex-nav'>
                                <div>Home</div>
                                <div>Scope</div>
                                <div>Enterprise</div>
                                <div>Pricing</div>
                            </div>
                            <div>
                                <img src={require("./images/internet.png")} alt="" />
                            </div>
                       </div>
                       <div className='main'>
                            <div>
                                <div>
                                    <div className='txt-box'></div>
                                    <div className='txt-box'></div>
                                </div>
                            </div>
                       </div>
                       <div className='section'>
                            <div>
                                <div className='txt-boxs'>
                                    <div><img src={require("./images/white-logo.png")} alt="" /></div>
                                    <div className='txt-box-section txt-box'></div>
                                    <div className='txt-box-section txt-box'></div>
                                </div>
                                <div className='content'>
                                    <div className='back'>
                                        <img src={require("./images/ex-img.jpg")} alt="" />
                                    </div>
                                    <div className="deco"></div>
                                    <div className="deco"></div>
                                </div>
                            </div>
                       </div>
                    </div>
                    
                    <div id = 'view-item2' className='view-item'>
                        <div className="header">
                            <div>
                                <img src={require("./images/list-logo.png")} alt="" />
                            </div>
                            <div className='menu'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="main">
                            <div className='txt-boxs'>
                                <div className="txt-box"></div>
                                <div className="txt-box"></div>
                            </div>
                            <div className='img-content'>
                                <div><img src={require("./images/img-icon.png")} alt="" /></div>
                            </div>
                        </div>
                        <div className="link-boxs">
                            <div className="wrap">
                                <div>
                                    <div className='title-content'></div>
                                    <div className='arrow'>
                                        <img src={require("./images/arrow.png")} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='title-content'></div>
                                    <div className='arrow'>
                                        <img src={require("./images/arrow.png")} alt="" />

                                    </div>
                                </div>
                                <div>
                                    <div className='title-content'></div>
                                    <div className='arrow'>
                                        <img src={require("./images/arrow.png")} alt="" />

                                    </div>
                                </div>
                                <div>
                                    <div className='title-content'></div>
                                    <div className='arrow'>
                                        <img src={require("./images/arrow.png")} alt="" />

                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className='section'>
                            <div className='content'>
                                <div>
                                    <img src={require("./images/img-icon.png")} alt="" />
                                </div>
                            </div>
                            <div className='txt-boxs'>
                                <div className='big'></div>
                                <div className='box'>
                                    <div className='txt-box'></div>
                                    <div className='txt-box'></div>
                                </div>
                                <div className='visit'>
                                     <div>
                                        --&gt;
                                        <div className="txt-box"></div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className='section2'><div></div></div>
                    </div>

                    <div id = 'view-item3' className='view-item'>
                        <div className="header">
                            <div>
                                <img src={require("./images/list-logo.png")} alt="" />
                            </div>
                            <div className='ex-nav'>
                                <div className='txt-box'></div>
                                <div className='txt-box'></div>
                                <div className='txt-box'></div>
                                <div className='txt-box'></div>
                            </div>
                            <div></div>
                        </div>
                        <div className='main'>
                            <div className='txt-boxs'>
                                <div className="txt-box"></div>
                                <div className="txt-box"></div>
                            </div>
                        </div>
                        <div className='section'>
                            <div className='txt-title'>   
                                <div className="txt-box"></div>
                            </div>
                            <div className='content'>
                                <div className='txt-boxs'>
                                    <div className="txt-box"></div>
                                    <div className="txt-box"></div>
                                    <div className="txt-box"></div>
                                    <div className="txt-box"></div>
                                    <div className="txt-box"></div>
                                </div>
                                <div className='img-content'>
                                    <img src={require("./images/img-icon.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id = 'view-item4' className='view-item'>
                        <div className='header'>
                                <div>
                                    <img src={require("./images/list-logo.png")} alt="" />
                                </div>
                                <div className='ex-nav'>
                                    <div className='txt-box'></div>
                                    <div className='txt-box'></div>
                                    <div className='txt-box'></div>
                                    <div className='txt-box'></div>
                                </div>
                                <div></div>
                        </div>
                        <div className='banner'>
                            <div className="txt-box"></div>
                        </div>
                    </div>



                    
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Result;