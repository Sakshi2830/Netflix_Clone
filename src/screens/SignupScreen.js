import React from 'react'
import "./SignupScreen.css"

function SignInScreen() {
    const register = (e) => {
        e.preventDefault();
    }

    const signIn = (e) =>{
        e.preventDefault();
    }


    return (
        <div className="signupScreen">
           <form>
           <h1>Sign In</h1>
           <input type="email" placeholder="Email" />
           <input type="password" placeholder="Password" />
           <button type="submit" onClick={signIn}>Sign In</button>
           <h5>Login with Facebook</h5>
           <h4>
               <span className="signupScreen__gray">New to Netflix? </span> 
               <span className="signupScreen__link" onClick={register}>Sign up now.</span>
            </h4>
            
            <h6 className="signupScreen__info">This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <span className="signupScreen__info__link"> Learn more.</span>
            </h6>
           </form>

        </div>
    )
}

export default SignInScreen
