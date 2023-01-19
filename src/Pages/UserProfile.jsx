import React from "react";
import ReadUser from "../Components/ReadUser";


const UserProfile = ({ bigUser }) => {
  return (
    <div>
      {bigUser ? (
        <ReadUser bigUser={bigUser} />
      ) : (
        <h3>Please Log In</h3>
      )}
    </div>
  );
};

export default UserProfile;