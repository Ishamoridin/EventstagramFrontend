import React from "react";
import { useNavigate } from "react-router";
import "../styles/EventCard.css";

const EventCard = (event) => {
  // function to navigate to event listing when clicked:
  const id = event.post.id;
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("event card clicked with event.id", id);
    navigate("/EventPage", { state: { event } });
  };
  console.log(event);
  // function to navigate to user page when username clicked:
  const user = event.post.eventOwner;
  const userNavigate = useNavigate();
  // const userClick = () => {
  //   console.log("username clicked with user.id", user.id);
  //   userNavigate("/UserProfile", {
  //     state: { id: user.id },
  //   });
  // };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const startDate = new Date(event.post.startTime);
  const month = months[startDate.getMonth()];
  const day = startDate.getDate();
  // const hours = startDate.getHours();
  // const minutes = startDate.getMinutes();
  const time = startDate.toTimeString().substring(0, 5);
  
  try {
    return (
      <div
        className="event-card"
        // key={event.post.id}
        onClick={() => handleClick()}
      >
        <div className="event-name-wrapper">
          <p className="event-name">{event.post.eventName}</p>
        </div>
        <div className="img-wrapper">
          {/*Map image?:*/}
          {/* <img></img> */}
        </div>
        <div className="text-wrapper">
          <div className="location-wrapper">
            <p className="location">Location: {event.post.location}</p>
          </div>
          <div className="start-time-wrapper">
            {/* <p className="start-time-text">{startDate}</p> */}
            <p className="day-month">
              Date: {day}, {month} at {time}
            </p>
          </div>
          <div className="username-wrapper">
            <p className="hosted-by">Hosted By: </p>&nbsp;
            <p className="username" >
              {event.post.eventOwner}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default EventCard;
