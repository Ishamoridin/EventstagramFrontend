import React from "react";
import { useLocation } from "react-router-dom";

const EventPage = () => {
  const location = useLocation();
  console.log(location);
  const currentEvent = location.state.event.post;

  return (
    <div>
      <h2>EventPage</h2>
      <div className="event-page-wrapper">
        {location ? (
          <div className="event-listing-container">
            <div className="event-name-container">
              <p>Event Name:</p>
              <p>{currentEvent.eventName}</p>
            </div>

            <div className="event-description-container">
              <p>Description:</p>
              <p>{currentEvent.description}</p>
            </div>

            <div className="event-location-container">
              <p>Location:</p>
              <p>{currentEvent.location}</p>
            </div>

            <div className="event-capacity-container">
              <p>Capacity:</p>
              <p>{currentEvent.capacity}</p>
            </div>

            <div className="date-time-container">
              <p>Date & Time:</p>
              <p>{currentEvent.startTime}</p>
              <p>{currentEvent.endTime}</p>
            </div>
          </div>
        ) : (
          <h2>Event Does Not Exist</h2>
        )}
      </div>
    </div>
  );
};

export default EventPage;
