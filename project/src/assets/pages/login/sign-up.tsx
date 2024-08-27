import React, { useState, useEffect } from "react";
import Styles from "./sign-up.module.css";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as GoogleIcon } from "../../img/sign-up/google-icon.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios'; 

const fetchUserProfile = async (accessToken : any) => {
  try {
    const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}`},
    });

    const userData = {
      googleId: response.data.id,
      email: response.data.email,
      name: response.data.name,
      accessToken: accessToken, // accessToken 포함
    };

    await sendUserDataToServer(userData);
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

const sendUserDataToServer = async (userData : any) => {
  try {
    const response = await axios.post('http://localhost:8080/api/google-data', userData, {
      headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${userData.accessToken}`},
    });
    console.log('User data saved:', response.data);
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

const SignUp = () => {

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse);
      if (credentialResponse.access_token) {
        await fetchUserProfile(credentialResponse.access_token);  
      } else {
        console.error("No access token received");
      }
    },
    onError: () => {
      console.error("Login Failed");
    },
  });

  return (
    <div className={Styles.containerSignin}>
      <div className={Styles.signInLogoHead}>
        <div className={Styles.logo}>
          <Link to={'/'}><Logo /></Link>
        </div>
      </div>
      <div className={Styles.formContainer}>
        <div className={Styles.welcome}><p>Welcome to Framefix</p></div>
        <div className={Styles.loginForm}>
          <form action="#" className={Styles.form}>
            <input type="text" placeholder="Enter Your Email..." className={`${Styles.emailInput} ${Styles.common}`} />
            <button type="button" className={`${Styles.enterSignin} ${Styles.common} ${Styles.btn}`}>
              <span>Login with email</span>
            </button>
            <div className={Styles.or}>
              <div></div>
              <span>OR</span>
              <div></div>
            </div>
            <button type="button" className={`${Styles.googleWithLogin} ${Styles.common} ${Styles.btn}`} onClick={() => login()}>
              <GoogleIcon />
              <span>Login with google</span>
            </button>
          </form>
        </div>
      </div>
      <motion.div className={Styles.background}>   
        {/**
        <Spline
          scene="https://prod.spline.design/N0KvD6h9bZQCUbr3/scene.splinecode" 
        />
         */}
        <div className={Styles.top}></div>
        <div className={Styles.bottom}></div>
      </motion.div>
    </div>
  );
};

export default SignUp;