import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilePage from './pages/ProfilePage';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch])


  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <LoginPage/>
        ) : (
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/profile' element={<ProfilePage/>} />
            <Route exact path='/' element={<HomeScreen/>} />
          </Routes>
        )} 
      </BrowserRouter>
    </div>
  );
}

export default App;
