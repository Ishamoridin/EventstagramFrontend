import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import { useState } from "react";
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";
import EventPage from "./Pages/EventPage";
import PostEvent from "./Pages/PostEvent";

const App = () => {
  const [loggedInUser, logUserIn] = useState(null);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <BrowserRouter>
        {/* <LoginModal loginUser={logUserIn} loggedInUser={loggedInUser} /> */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/UserProfile">Profile</Link>
          <Link to="/EventPage">EventPage</Link>
          <Link to="/PostEvent">PostEvent</Link>
        </nav>
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
};

export default App;
