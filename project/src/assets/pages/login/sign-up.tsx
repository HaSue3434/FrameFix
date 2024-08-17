import React, { useState, useEffect } from "react";
import Styles from "./sign-up.module.css";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as GoogleIcon } from "../../img/sign-up/google-icon.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';


const SignUp = () => {

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
            <button type="button" className={`${Styles.googleWithLogin} ${Styles.common} ${Styles.btn}`}>
              <GoogleIcon />
              <span>Login with google</span>
            </button>
          </form>
        </div>
      </div>
      <motion.div className={Styles.background}>   
        
            <Spline
              scene="https://prod.spline.design/N0KvD6h9bZQCUbr3/scene.splinecode" 
            />
          
        <div className={Styles.top}></div>
        <div className={Styles.bottom}></div>
      </motion.div>
    </div>
  );
};

export default SignUp;