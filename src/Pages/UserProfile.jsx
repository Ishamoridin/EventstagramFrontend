import React from "react";
import ReadUser from "../Components/ReadUser";


const UserProfile = ({ bigUser, setUser }) => {
  return (
    <div>
      {bigUser ? (
        <ReadUser bigUser={bigUser} setUser={setUser}/>
      ) : (
        <h3>Please Log In</h3>
      )}
    </div>
  );
};

export default UserProfile;