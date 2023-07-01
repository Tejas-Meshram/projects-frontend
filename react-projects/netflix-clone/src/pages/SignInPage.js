import React, { useRef } from 'react'
import { auth } from './../firebase';
import './SignInPage.css'
import { useNavigate } from 'react-router-dom';

function SignInPage() {

   const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const regiter = (e) => {
        e.preventDefault();

         auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
         ).then((authUser) => {
            console.log(authUser);
         }).catch((error) => {
            alert(error.message);
         });

    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
         ).then((authUser) => {
            console.log(authUser);
            navigate('/');
         }).catch((error) => {
            alert(error.message);
         });
    }

  return (
    <div className='signInPage'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email'/>
            <input ref={passwordRef} type="password" placeholder='Password'/>
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4>
                <span className="signInPage_gray">New to Netflix? </span>
                <span className="signInPage_link" onClick={regiter}>Sign Up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignInPage