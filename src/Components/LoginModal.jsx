import React from "react";
import { useState } from "react";
import { loginUser } from '../utils'
import { Link } from "react-router-dom";
import "../styles/LoginModal.css";

const LoginModal = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    await loginUser(username, email, password, setUsername)
  };
  return (
    <div className="outerContainer">
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
