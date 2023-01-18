import React from "react";
import ReadUser from "../Components/ReadUser";


const UserProfile = ({ user }) => {
  return (
    <div>
      {user ? (
        <ReadUser loggedInUser={user} />
      ) : (
        <h3>Please Log In</h3>
      )}
    </div>
  );
};

export default UserProfile;