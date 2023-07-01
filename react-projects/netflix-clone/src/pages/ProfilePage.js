import React from 'react'
import './ProfilePage.css'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const handleSignOut = () => {
        auth.signOut();
        navigate('/');
    }

  return (
    <div className='profilePage'>
        <NavBar/>

        <div className="profilePage_body">
            <h1>Edit Profile</h1>
            <div className="profilePage_info">
                <img 
                    src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" 
                    alt="profile_avatar" 
                />
                <div className="profilePage_details">
                    <h2>{user.email}</h2>
                    <div className="profilePage_plans">
                        <h3>Plans</h3>
                        <button 
                            onClick={handleSignOut}
                            className="profilePage_signOut"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage