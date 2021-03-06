import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import "./SignupScreen.css"

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();


    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) =>{
            console.log(authUser);
        })
            .catch((error) =>{
                alert(error.message);
            })
            history.push("/profile")
    }

    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            console.log(authUser)
        }).catch((error) =>{
            alert(error.message)
        })
        history.push("/profile")
    }


    return (
        <div className="signupScreen">
           <form>
           <h1>Sign In</h1>
           <input ref={emailRef}  type="email" placeholder="Email" />
           <input ref={passwordRef}  type="password" placeholder="Password" />
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
