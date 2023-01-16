import React from "react";

const ReadUser = ({ loggedInUser }) => {
  return (
    <div className="read-userinfo-container">
      <p className="readuser-username">{loggedInUser.username}</p>
      <p className="readuser-email">{loggedInUser.email}</p>
      <p className="readuser-password">{loggedInUser.password}</p>
    </div>
  );
};

export default ReadUser;
