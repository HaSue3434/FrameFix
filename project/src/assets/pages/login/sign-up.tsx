import React, { useState, useEffect } from "react";
import Styles from "./sign-up.module.css";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as GoogleIcon } from "../../img/google-icon.svg";
import { ReactComponent as Top } from "../../img/top.svg";
import { ReactComponent as Center } from "../../img/center.svg";
import { ReactComponent as Bottom } from "../../img/bottom.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


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
              <span>Sign in</span>
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
      <motion.div
        initial={{ scale: 0.8, opacity: 0.2 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ delay: 0.5, ease: "anticipate", duration: 2 }}
        className={Styles.background}
      >
        <div className={Styles.top}></div>
        <div className={Styles.colIndex1}>
            
        </div>
        <div className={Styles.colIndex2}>

        </div>
        <div className={Styles.colIndex3}>

        </div>
        <div className={Styles.bottom}></div>
      </motion.div>
    </div>
  );
};

export default SignUp;