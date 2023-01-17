import React from 'react';
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import UserProfile from './Pages/userProfile';
// import LoginModal from './Components/loginModal';
import EventPage from './Pages/eventPage';
import PostEvent from './Pages/PostEvent';
import { DarkModeProvider } from './context/DarkModeContext';
import Container from './Components/Container';





function App() {
  const [loggedInUser, logUserIn] = useState(null);

  return (
    <div className="App">

      <DarkModeProvider>
      <BrowserRouter>
        <Container/>

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
      </DarkModeProvider>
    </div>
  );
};

export default App;
