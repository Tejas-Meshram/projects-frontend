import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    },[])


  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_container">
            <img 
                onClick={() => navigate('/')}
                className='nav_logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="Netflix-logo" 
            />
            <img 
                onClick={() => navigate('/profile')}
                className='nav_avatar'
                src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" 
                alt="Netflix-avatar" 
            />
        </div>       
    </div>
  )
}

export default NavBar