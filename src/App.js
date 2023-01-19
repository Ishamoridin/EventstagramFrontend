import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile";
import LoginModal from "./Components/LoginModal";
import SignUpModal from "./Components/SignUpModal";
import EventPage from "./Pages/EventPage";
import PostEvent from "./Pages/PostEvent";
import ToolBar from "./Components/ToolBar";
import Sidebar from "./Components/Sidebar";
import Backdrop from "./Components/Backdrop";
import { authCheck } from "./utils";

import { getCookie } from "./common";
// import { loginWithToken } from "./utils";

function App() {
  const [user, setUser] = useState();
  const [bigUser, setBigUser] = useState();

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  //const [cookie, setCookie] = useState()

  useEffect(() => {
    let cookie = getCookie("jwt_token");
    console.log("cookie:", cookie);
    if (cookie) {
      loginWithToken(cookie);
    }
  }, []);

  useEffect(() => {
    console.log(user, "logged in user");
    setBigUser(user);
  }, [user]);

  const loginWithToken = async (cookie) => {
    const newUser = await authCheck(cookie);

    console.log("user:", newUser);
    // logUserIn(user);
    setUser(newUser);
  };

  // if (loggedInUser === null) {
  //   return <Navigate replace to="/login" />;
  //   } else {
  //   return ();
  //   }

  return (
    <div className="App">
      <BrowserRouter>
        <ToolBar 
          openSidebar={toggleSidebar} 
          style={{ visibility: bigUser ? "visible" : "hidden" }}
        />
        <Backdrop 
          sidebar={sidebar} closeSidebar={toggleSidebar} 
        />
        <Sidebar 
          sidebar={sidebar} 
          setBigUser={setBigUser} 
          setUser={setUser} 
          bigUser={bigUser}
          // style={{ visibility: bigUser ? "visible" : "hidden" }}
        />
        <Routes>
          <Route
            path="/"
            element={<LoginModal setUser={setUser} user={user} bigUser={bigUser}/>}
          />

          <Route path="/SignUp" element={<SignUpModal setUser={setUser}/>} />

          <Route path="/Home" element={<Home user={bigUser} />} />

          <Route path="/UserProfile" element={<UserProfile bigUser={bigUser} setUser={setUser} />} />
          <Route path="/EventPage" element={<EventPage user={bigUser} />} />
          <Route path="/PostEvent" element={<PostEvent user={bigUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
