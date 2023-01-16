import React from "react";
import ReadUser from "../Components/ReadUser";


const UserProfile = ({ loggedInUser }) => {
  return (
    <div>
      {loggedInUser ? (
        <ReadUser loggedInUser={loggedInUser} />
      ) : (
        <h3>Please Log In</h3>
      )}
    </div>
  );
};

export default UserProfile;
