import React,{useEffect,useState}from 'react';
import Styles from "./sign.module.css";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as Google } from "../../img/icons/google-icon.svg";
import { ReactComponent as ThreePath } from "../../img/icons/3d-path.svg";

import { useGoogleLogin,
    GoogleLogin,
    GoogleLoginProps, 
    GoogleCredentialResponse,
    GoogleOAuthProvider
    
} from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios";

interface User {
    name: string;
    picture: string;
    email?: string;
}
type FormData = {
    email: string;
};

const Sign = (): JSX.Element | null =>{
    const navigate = useNavigate();
    const [user, setUser] = React.useState<User | null>(null);

    const [formData, setFormData] = useState<FormData>({ email:''});

    const handleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log('Login successful!', tokenResponse);
            axios.post('http://localhost:3000/sign-up', { code: tokenResponse.code })
                .then(response => {
                    const userData = response.data;
                    setUser(userData);
                    navigate('/'); 
                })
                .catch(error => console.error('Error posting code to server', error));
        },
        onError: errorResponse => {
            console.error('Login failed!', errorResponse);
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
            const response = await axios.post('http://your-java-server.com/api/data', formData);
            console.log('Server Response:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };


    return (
        <> 
        <div className={Styles.signInContainer}>

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
                                <div className={Styles.VsOr}>OR</div>
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
                        <div className={Styles.head}></div>
                    </div>
                </div>
                <div className={Styles.b}></div>
            </div>
    
        {/*}
           <div className={Styles.loginGoogle}>
               <button onClick={() => handleLogin()} className={Styles.signInButton}>
                   Login with Google
               </button>
           </div>
        
        */}

        </div>
        </>
    );
}

export default Sign;