import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/EventPage.css";

const EventPage = () => {
  const location = useLocation();
  console.log(location);
  const currentEvent = location.state.event.post;
  let weather = useRef(null);

  useEffect(() => {
    async function fetchWeather() {
      const now = new Date();
      const then = new Date(currentEvent.startTime);
      const duration = Math.ceil(Math.abs((then - now) / (1000 * 3600 * 24)));
      let response;
      if (
        Math.ceil((then.getTime() - now.getTime()) / (1000 * 3600 * 24)) < 14
      ) {
        try {
          response = await fetch(
            process.env.REACT_APP_WEATHER_API +
              process.env.REACT_APP_WEATHER_KEY +
              "&q=" +
              currentEvent.location +
              "&days=" +
              duration
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        response = null;
      }
      return response;
    }
    weather.current = fetchWeather();
  }, [currentEvent.location, currentEvent.startTime]);
  return (
    <div>
      {/* <h2>EventPage</h2> */}
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
