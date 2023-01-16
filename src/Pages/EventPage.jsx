import React from "react";
import { useLocation } from "react-router-dom";

const EventPage = ({ id }) => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>EventPage</h2>
      <div className="event-page-wrapper">
        {location ? (
          <div className="event-listing-container">
            <div className="event-name-container">
              <p>Event Name:</p>
              <p>{location.eventName}</p>
            </div>

            <div className="event-description-container">
              <p>Description:</p>
              <p>{location.state.description}</p>
            </div>

            <div className="event-location-container">
              <p>Location:</p>
              <p>{location.state.location}</p>
            </div>

            <div className="event-capacity-container">
              <p>Capacity:</p>
              <p>{location.state.capacity}</p>
            </div>

            <div className="date-time-container">
              <p>Date & Time:</p>
              <p>{location.state.startTime}</p>
              <p>{location.state.endTime}</p>
            </div>

            <div className="instance-container">
              <p>This event has been hosted {location.state.instance} times.</p>
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
