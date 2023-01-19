import React from "react";
import { readUser, updateUser } from "../utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserProfile.css";
const ReadUser = ({ bigUser, setUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const updateHandler = async (event) => {
    event.preventDefault();
    console.log("Username:", username, "email:", email, "password:", password);
    const userObj = {
      username: username ? username : userInfo.current.users[0].username,
      email: email ? email : userInfo.current.users[0].email,
      password: newPassword ? newPassword : userInfo.current.users[0].password,
    };
    console.log("userObj = ", userObj);
    const filter = {
      username: userInfo.current.users[0].username,
      email: userInfo.current.users[0].email,
      password: password,
    };
    const response = await updateUser(userObj, filter);
    console.log("Update response", response);
    // if (response.status === 200) {
    setUser(null);
    navigate("/");
    // } else {
    //   navigate("UserProfile")
    // }
  };
  let userInfo = useRef();
  const refreshUserInfo = async (bigUser) => {
    console.log("Running fetch on loggedInUser:", bigUser);
    async function fetchUser() {
      let response;
      if (bigUser) {
        response = readUser(bigUser);
      } else {
        response = null;
      }
      return response;
    }
    userInfo.current = await fetchUser();
    console.log("userInfo.current", userInfo.current);
  };
  useEffect(() => {
    refreshUserInfo(bigUser);
  }, [bigUser]);
  useEffect(() => {
    setCurrentEmail(userInfo.current ? userInfo.current.users[0].email : null);
    setCurrentUsername(
      userInfo.current ? userInfo.current.users[0].username : null
    );
  }, [userInfo]);
  console.log("bigUser = ", bigUser);
  refreshUserInfo(bigUser);

  return (
    <div className="read-userinfo-container">
      <div className="form-container">
        <form onSubmit={updateHandler}>
          <input
            placeholder="New Username (optional)"
            className="readuser-username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            placeholder="New Email (optional)"
            className="readuser-email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Current Password (required)"
            className="readuser-password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="New Password (optional)"
            className="readuser-password"
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
          <input type="submit" value="Update details" />
        </form>
      </div>
      <div className="current-details-container">
        <div className="text-container">
          <p
            onClick={() =>
              setCurrentUsername(
                userInfo.current ? userInfo.current.users[0].username : null
              )
            }
          >
            {currentUsername ? currentUsername : "Show current username"}
          </p>
          <p
            onClick={() =>
              setCurrentEmail(
                userInfo.current ? userInfo.current.users[0].email : null
              )
            }
          >
            {currentEmail ? currentEmail : "Show current email"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadUser;
