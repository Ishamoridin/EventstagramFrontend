import React, { useEffect } from "react";
import { useState } from "react";
import { loginUser } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginModal.css";

const LoginModal = ({ setUser, user, bigUser }) => {
  const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [triedToLogin, tryToLogin] = useState(false);
  // const [temp, setTemp] = useState();
  const navigate = useNavigate();

  // const logUserIn = props.logUserIn;
  // const loggedInUser = props.loggedInUser;

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(username, "username");
    // console.log(email, "email");
    console.log(password, "password");
    const status = await loginUser(username, password);
    console.log("status:", status);
    const x = status;
    setUser(x);
    // console.log(loggedInUser, "logged in user");
    // console.log(setter);
    // console.log("status:", status);
    // if (status === 200) {
    //   logUserIn(username);
    // }
    // if (!loggedInUser) {
    //   tryToLogin(true);
    // } else {
    //   navigate("/");
    // }
  };
  useEffect(() => {
    if (!bigUser) {
      tryToLogin(true);
    } else {
      navigate("/");
    }
  }, [bigUser, navigate]);
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
          {/* <label className="email">
            Email:
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label> */}
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
            <button type="submit" className="login">
              Login
            </button>
          </div>
        </form>
        <Link to="/SignUp">
          <button type="submit" className="signUp">
            Sign Up
          </button>
        </Link>
      </div>
      <p
        className="pleaseTryAgain"
        style={{ visibility: triedToLogin ? "visible" : "hidden" }}
      >
        Please Try Again
      </p>
    </div>
  );
};

export default LoginModal;
