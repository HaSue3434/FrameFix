import React,{useState}from 'react';
import { ReactComponent as Google } from "../../img/icons/google-icon.svg";
import { ReactComponent as ThreePath } from "../../img/icons/3d-path.svg";
import { ReactComponent as FLogo } from "../../img/logo/frame-logo.svg";
import Styles from "./sign.module.css";


import { ReactComponent as BottomArrow } from "../../img/icons/framefix-plugin-icons/aseets-arrow-bottom.svg";

/* framefix icon*/
import { ReactComponent as Template } from "../../img/icons/framefix-plugin-icons/template.svg";
import { ReactComponent as Text } from "../../img/icons/framefix-plugin-icons/text.svg";
import { ReactComponent as Menus } from "../../img/icons/framefix-plugin-icons/menus.svg";
import { ReactComponent as Header } from "../../img/icons/framefix-plugin-icons/header.svg";
import { ReactComponent as Footer } from "../../img/icons/framefix-plugin-icons/footer.svg";
import { ReactComponent as Slides } from "../../img/icons/framefix-plugin-icons/slides.svg";
import { ReactComponent as Button } from "../../img/icons/framefix-plugin-icons/button.svg";
import { ReactComponent as Icons } from "../../img/icons/framefix-plugin-icons/icons.svg";
import { ReactComponent as Magic } from "../../img/icons/framefix-plugin-icons/magic.svg";

/* framefix icon*/ 

import { motion } from 'framer-motion';

import { 

    useGoogleLogin,
    
} from '@react-oauth/google';
import AnimatedSVG from  './AnimatedSVG';

import { jwtDecode } from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios";

interface User {
    name: string;
    picture: string;
    email?: string;
    token: string; 
}
type FormData = {
    email: string;
};
const REACTAPPURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.withCredentials = true; 

const Sign = (): JSX.Element | null =>{
    const navigate = useNavigate();
    const [user, setUser] = React.useState<User | null>(null);

    const [formData, setFormData] = useState<FormData>({ email:''});
    
    const handleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const { data } = await axios.post(`${REACTAPPURL}/sign-up`, {
                    code: tokenResponse.code
                });
                setUser(data); 
                navigate('/');
                console.log(data);
            } catch (error) {
                console.error('Error posting code to server', error);
            }
        },
        onError: errorResponse => {
            console.error(errorResponse);
        },
        scope: 'openid email profile',
        flow: 'auth-code',
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/email/app-framefix', formData);
            console.log('Server Response:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };


    return (
        <> 
        <motion.div 
        initial = {{opacity : 0}}
        animate =  {{opacity : 1}}
        transition={{duration : 1, ease : "anticipate"}}
        className={Styles.signInContainer}>

            <div className={Styles.wrapper}>
                <div className={Styles.signin}>
                    <div className={Styles.wrap}>
                        <div className={Styles.titles}>
                            <div className={Styles.title}><h1>Sign in</h1></div>
                            <div className={Styles.subTitle}><p>Please select your preferred login method.</p></div>
                        </div>
                        <div className={Styles.form}>
                            <label className={Styles.labelInput}>
                                <input
                                    className={Styles.uInput}
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                />
                            </label>
                            <button type="submit" className={Styles.submit}>Sign in</button>
                        </div>
                        <div className={Styles.orGoogle}>
                            <div className={Styles.or}>
                                <div className={Styles.line}></div>
                                <div className={Styles.VsOr}>Login with SNS</div>
                                <div className={Styles.line}></div>
                            </div>
                            <div className={Styles.loginGoogle}>
                                <button onClick={() => handleLogin()} className={Styles.signInButton}>
                                    <Google/>Login with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.views}>
                    <div className={Styles.canvas}><ThreePath/></div>
                    <div className={Styles.viewFrameFix}>
                        <div className={Styles.head}>
                            <div className={Styles.projectName}>
                                <div className={Styles.fLogo}><FLogo/></div>
                                <div className={Styles.name}>
                                    <p><span>Drafts / </span>Project name <BottomArrow/></p>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.contents}>
                            <div className={Styles.sideAssetsContain}>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Template/></div> <p>Layer</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Text/></div> <p>Text</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Menus/></div> <p>Menus</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Header/></div> <p>Header</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Footer/></div> <p>Footer</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Slides/></div> <p>Slides</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Button/></div> <p>Button</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Icons/></div> <p>Icons</p> </div>
                                <div className={Styles.plugin}> <div className={Styles.icon}><Magic/></div> <p>Magic</p> </div>
                            </div>
                            <div className={Styles.content}>
                                <div className={Styles.fBox}>
                                    <div className={Styles.textCanvas}><AnimatedSVG/></div>
                                    <motion.div 

                                    initial = {{scale : 0, opacity : 0}}
                                    animate = {{scale : 1, opacity : 1}}
                                    transition={{type : "spring", damping : 10, stiffness : 30, delay : .6,}}

                                    className={Styles.item}>
                                        <img src={require("../../img/component-ui.jpg")} alt="" />
                                    </motion.div>
                                </div>
                                <div className={Styles.sBox}>
                                    <motion.div 

                                    initial = {{scale : 0, opacity : 0}}
                                    animate = {{scale : 1, opacity : 1}}
                                    transition={{type : "spring", damping : 10, stiffness : 40, delay : .8,}}

                                    className={Styles.sItem}>
                                        <img src={require("../../img/more-sample1.jpg")} alt="" />
                                    </motion.div>
                                    <motion.div 
                                    initial = {{scale : 0, opacity : 0}}
                                    animate = {{scale : 1, opacity : 1}}
                                    transition={{type : "spring", damping : 10, stiffness : 40, delay : 1,}}

                                    className={Styles.sItem}>
                                        <img src={require("../../img/more-sample4.jpg")} alt="" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.b}></div>
            </div>

        </motion.div>
        </>
    );
}

export default Sign;