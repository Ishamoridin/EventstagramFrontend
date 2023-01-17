import React from "react";
import CreateEvent from "../Components/CreateEvent";

const PostEvent = ({ user }) => {
  return (
    <div className="postevent-screen-wrapper">
      <CreateEvent user={user} />
    </div>
  );
};

export default PostEvent;
