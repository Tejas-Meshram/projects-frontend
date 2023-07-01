import React, { useState } from 'react'
import './LoginPage.css'
import SignInPage from './SignInPage';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [signIn, setsignIn] = useState(false);

    const navigate = useNavigate();

    const handleSignIn = () => {
        setsignIn(true);
        navigate('/login');
    }

  return (
    <div className='loginPage'>
        <div className="loginPage_background">
            <img
                className='loginPage_logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="loginPageBanner" 
            />
            <button onClick={handleSignIn} className='loginPage_button'>Sign In</button>

            <div className="loginPage_gradient" />
        </div>

        <div className="loginPage_body">

            {signIn ? (
                <SignInPage />
            ) : (
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere, Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="loginPage_input">
                        <form>
                            <input type="email" placeholder='Email Address'/>
                            <button onClick={handleSignIn} className="loginPage_getStarted">GET STARTED</button>
                        </form>
                    </div>
            </>
            )}
        </div>
    </div>
  )
}

export default LoginPage