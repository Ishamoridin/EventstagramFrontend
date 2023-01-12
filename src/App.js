import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import LoginModal from './Components/LoginModal';
import EventPage from './Pages/EventPage';
import PostEvent from './Pages/PostEvent';
import ToolBar from './Components/ToolBar';
import Sidebar from './Components/Sidebar';
import Backdrop from './Components/Backdrop';

import { getCookie } from './common'
import { authCheck } from './utils'



function App() {
  const [loggedInUser, logUserIn] = useState(null);

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const [user, setUser] = useState()
  const [cookie, setCookie] = useState()

  useEffect(()=>{
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  }, [])

  const loginWithToken = async (cookie) => {
    const user = await authCheck(cookie)
    setUser(user)
    setCookie(cookie)
  }

  return (
    <div className="App">
      <LoginModal 
        loginUser={logUserIn}
        loggedInUser={loggedInUser}
        />

      <BrowserRouter>
        <ToolBar openSidebar={toggleSidebar} />
        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
        <Sidebar sidebar={sidebar} />

        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/UserProfile">Profile</Link>
          <Link to="/EventPage">EventPage</Link>
          <Link to="/PostEvent">PostEvent</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/UserProfile"
            element={<UserProfile loggedInUser={loggedInUser} />}
          />
          <Route
            path="/EventPage"
            element={<EventPage loggedInUser={loggedInUser} />}
          />
          <Route
            path="/PostEvent"
            element={<PostEvent loggedInUser={loggedInUser} />}
          />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
