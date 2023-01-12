import './App.css';
import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import NavBar from './Components/NavBar';
import LoginModal from './Components/LoginModal';
import EventPage from './Pages/EventPage'
import SignUpModal from './Components/SignUpModal';





function App() {
  const [loggedInUser, logUserIn] = useState(null);
  
  return (
    <div className="App">
      <NavBar />
      <SignUpModal />
      
      <LoginModal 
      loginUser={logUserIn}
      loggedInUser={loggedInUser}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/"
          element={<Home/>}/>
          <Route path="/UserProfile"
          element={
          <UserProfile
            loggedInUser={loggedInUser}
             />
            } 
          />
          <Route path="/EventPage"
          element={
            <EventPage
            loggedInUser={loggedInUser}
            />
          }
          />
          <Route path="/CreateEvent"
          element={
            <EventPage
            loggedInUser={loggedInUser}
            />
          }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
