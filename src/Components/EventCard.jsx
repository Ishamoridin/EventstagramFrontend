import React from "react";
import { useNavigate } from "react-router";

const EventCard = ({ id }) => {
  // function to navigate to event listing when clicked:
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("event card clicked with event.id", id);
    navigate("/EventPage", ("success", { state }));
  };

  // function to navigate to user page when username clicked:
  // const userNavigate = useNavigate();
  // const userClick = () => {
  //   console.log("username clicked with user.id", User.id);
  //   userNavigate("/UserProfile", {
  //     state: { id: User.id },
  //   });
  // };

  try {
    return (
      <div className="event-card" onClick={() => handleClick()}>
        <div>
          <p className="event-name">{id.eventName}</p>
        </div>
        <div className="img-wrapper">
          {/*Map image?:*/}
          {/* <img></img> */}
        </div>
        <div className="text-wrapper">
          {/* <p className="username" onClick={() => userClick()}>
            {User.username}
          </p> */}
          <p className="location">{id.location}</p>
          <p className="start-time-text">{id.startTime}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default EventCard;
