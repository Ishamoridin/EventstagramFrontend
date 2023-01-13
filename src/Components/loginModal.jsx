import React from "react";
import { useState } from "react";
import { loginUser } from '../utils'
import "../styles/LoginModal.css";
import { Link } from "react-router-dom";

const LoginModal = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    await loginUser(username, email, password, setter)
    Promise.reject(Error);
  };

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <form onSubmit={submitHandler} className="form">
          <label className="username">
            Username:
            <input
              onChange={(event) => setUsername(event.target.value)} type="username" placeholder="Username123"
              required
            />
          </label>
          <label className="email">
            Email:
            <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="youremail@email.com" required />
          </label>
          <label className="password">
            Password:
            <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="***********" required
            />
          </label>
          <br></br>
          <div className="buttons">
            <button type="submit" className="login">Login</button>
            <Link to="/SignUp"><button className="signUp">Sign Up</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
