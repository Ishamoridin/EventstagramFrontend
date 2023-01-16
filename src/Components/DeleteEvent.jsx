import React from "react";
import { deleteEvent } from "../utils";

const DeleteEvent = ({ id }) => {
  const deletePost = async () => {
    await deleteEvent(id);
  };

  return (
    <div>
      DeleteEvent
      <form onSubmit={deletePost}>
        <button type="submit">Delete Post</button>
      </form>
    </div>
  );
};

export default DeleteEvent;
