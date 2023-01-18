import React from "react";
import { readUser } from "../utils";
import { useEffect, useRef } from "react";

const ReadUser = ({ loggedInUser }) => {
  let userInfo = useRef()
  useEffect(() => {
    async function fetchUser() {
      let response
      if (
        loggedInUser
      )
      {
        response = readUser(loggedInUser)
      }
      else {
            response = null
          }
      return response.users[0]
        }
        userInfo.current = fetchUser();
        console.log(userInfo)
      }
  , [loggedInUser])

  return (
    <div className="read-userinfo-container">
      <p className="readuser-username">{userInfo.username}</p>
      <p className="readuser-email">{userInfo.email}</p>
      <p className="readuser-password">{userInfo.password}</p>
    </div>
  );
};

export default ReadUser;
