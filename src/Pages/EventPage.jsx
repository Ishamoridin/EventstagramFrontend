import React from "react";
import { useLocation } from "react-router-dom";

const EventPage = (props) => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h2>EventPage</h2>
      <div className="event-page-wrapper">
        {state ? (
          <div className="event-listing-container">
            <div className="event-name-container">
              <p>Event Name:</p>
              <p>{state.eventName}</p>
            </div>

            <div className="event-description-container">
              <p>Description:</p>
              <p>{state.description}</p>
            </div>

            <div className="event-location-container">
              <p>Location:</p>
              <p>{state.location}</p>
            </div>
            
            <div className=""
          </div>
        ) : (
          <h2>Event Does Not Exist</h2>
        )}
      </div>
    </div>
  );
};

export default EventPage;
