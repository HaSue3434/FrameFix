import React from "react";
import Styles from "./sign-up.module.css";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { Link } from "react-router-dom";

const SignUp = () =>{

    return(
        <>
        <div className={Styles.containerSignin}>

        
            <div className={Styles.signInLogoHead}>
                <div className={Styles.logo}>
                    <Link to={'/'}><Logo/></Link>
                </div>
            </div>

            <div className={Styles.formContainer}>
                
            </div>


        </div>    
        </>
    )
}
export default SignUp;