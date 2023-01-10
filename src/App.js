import './App.css';
import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from './Pages/Home';
import {UserProfile} from './Pages/';
import {NavBar} from './Components/navBar';
import {LoginModal} from './Components/loginModal';
import {EventPage} from './Pages/eventPage'





function App() {
  const [loggedInUser, logUserIn] = useState(null);
  
  return (
    <div className="App">
      <NavBar />
      <LoginModal 
      loginUser={logUserIn}
      loggedInUser={loggedInUser}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/"
          element={<Home/>}/>
          <Route path="/userProfile"
          element={
          <UserProfile
            loggedInUser={loggedInUser}
             />
            } 
          />
          <Route path="/eventPage"
          element={
            <EventPage
            loggedInUser={loggedInUser}
            />
          }
          />
          <Route path="/createEvent"
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
