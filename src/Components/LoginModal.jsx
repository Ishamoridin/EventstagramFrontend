import React from "react";
import { useState } from "react";
import { loginUser } from '../utils'
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginModal.css";

const LoginModal = ({setter, loggedInUser}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    const status = await loginUser(username, email, password, setter);
    console.log(loggedInUser);
    if (!loggedInUser){tryToLogin(true)}else{navigate('/')};
  };
  const [triedToLogin, tryToLogin] = useState(false)
  return (
    <div className="outerContainer">
    <p className="pleaseTryAgain" style={{visibility: triedToLogin ? 'visible' : 'hidden' }}>Please Try Again</p>
      <div className="innerContainer">
        <form onSubmit={submitHandler} className="form">
          <label className="username">
            Username:
            <input
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </label>
          <br></br>
          <label className="email">
            Email:
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <br></br>
          <label className="password">
            Password:
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <br></br>
          <div className="buttons">
            <button type="submit" className="login">Login</button>
          </div>
        </form>
        <Link to="/SignUp"><button type="submit" className="signUp">Sign Up</button></Link>
      </div>
    </div>
  );
};

export default LoginModal;
