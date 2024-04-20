import React,{useEffect,useState}from 'react';
import Styles from "./sign.module.css";
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

const Sign = (): JSX.Element | null =>{
    const navigate = useNavigate();
    const [user, setUser] = React.useState<User | null>(null);

    const handleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log('Login successful!', tokenResponse);

            // 서버에 인증 코드를 전송하여 추가 검증 수행
            axios.post('/sign-up', { code: tokenResponse.code })
                .then(response => {
                    const userData = response.data;
                    setUser(userData);
                    navigate('./'); // 로그인 성공 후 리디렉션
                })
                .catch(error => console.error('Error posting code to server', error));
        },
        onError: errorResponse => {
            console.error('Login failed!', errorResponse);
        },
        scope: 'openid email profile',
        flow: 'auth-code',
    });

    return (
        <> 
        <div className={Styles.signInContainer}>
            <button onClick={() => handleLogin()} className={Styles.signInButton}>
                Login with Google
            </button>
        </div>
            
        </>
    );
}

export default Sign;