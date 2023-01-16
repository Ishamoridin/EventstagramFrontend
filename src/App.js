import React from 'react';
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import UserProfile from './Pages/userProfile';
import LoginModal from './Components/loginModal';
import EventPage from './Pages/eventPage';
import ToolBar from './Components/ToolBar';
import Sidebar from './Components/Sidebar';
import Backdrop from './Components/Backdrop';
import PostEvent from './Pages/PostEvent';





function App() {
  const [loggedInUser, logUserIn] = useState(null);
  const[sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
      setSidebar((prevState) => !prevState)
  }

  return (
    <useDarkMode>
    <div className="App">
      <BrowserRouter>
        <ToolBar openSidebar={toggleSidebar}/>
        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
        <Sidebar sidebar={sidebar}/>

        {/* <LoginModal 
        loginUser={logUserIn}
        loggedInUser={loggedInUser}
        />

      
        <LoginModal loginUser={logUserIn} loggedInUser={loggedInUser} />  */}
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
    </useDarkMode>
  );
};

export default App;
