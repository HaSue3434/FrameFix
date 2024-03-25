import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import './main.css';
import UserSearch from './contents main ui/result/result';
import Category from './contents main ui/category/category';

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

                        </div>
                        <div className='sec3 sec-content'>

                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section className='ai-powered-contain'>

        </section>
        </>
    );
}
export default Main