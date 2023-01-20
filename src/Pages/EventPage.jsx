import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/EventPage.css";

const EventPage = () => {
  const location = useLocation();
  console.log(location);
  const currentEvent = location.state.event.post;
  let weather = useRef(null);
  console.log("weather:", weather);
  // let weatherTemp;
  // console.log(weatherTemp);
  const [weatherTemp, setWeatherTemp] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [weatherCondition, setWeatherCondition] = useState();

  useEffect(() => {
    weatherFetch();
  });

  const weatherFetch = async () => {
    async function fetchWeather() {
      const now = new Date();
      const then = new Date(currentEvent.startTime);
      const duration = Math.ceil(Math.abs((then - now) / (1000 * 3600 * 24)));
      let response;
      if (
        Math.ceil((then.getTime() - now.getTime()) / (1000 * 3600 * 24)) < 14
      ) {
        try {
          console.log(
            (response = await fetch(
              process.env.REACT_APP_WEATHER_API +
                process.env.REACT_APP_WEATHER_KEY +
                "&q=" +
                currentEvent.location +
                "&days=" +
                duration
            ))
          );
          const data = await response.json();
          console.log(data);
          if (data) {
            weather.current = data;
          }
          // console.log(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        response = null;
      }
      // return response;
      // return data;
    }
    // weather.current = await fetchWeather();
    await fetchWeather();
    if (weather.current) {
      setWeatherTemp(weather.current.forecast.forecastday[0].day.avgtemp_c);
      setWeatherIcon(
        weather.current.forecast.forecastday[0].day.condition.icon
      );
      setWeatherCondition(
        weather.current.forecast.forecastday[0].day.condition.text
      );
    }
    console.log(weatherTemp);
  };

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
  const startDate = new Date(currentEvent.startTime);
  const month = months[startDate.getMonth()];
  const day = startDate.getDate();
  const endDate = new Date(currentEvent.endTime);
  const endMonth = months[endDate.getMonth()];
  const endDay = endDate.getDate();
  // const hours = startDate.getHours();
  // const minutes = startDate.getMinutes();
  const startTime = startDate.toTimeString().substring(0, 5);
  const endTime = endDate.toTimeString().substring(0, 5);
  return (
    <div>
      {/* <h2>EventPage</h2> */}
      <div className="event-page-wrapper" onClick={weatherFetch}>
        {location ? (
          <div className="event-listing-container">
            <div className="event-name-container">
              <p className="event-listing-labels">Event Name:</p>
              <p>{currentEvent.eventName}</p>
            </div>

            <div className="event-location-container">
              <p className="event-listing-labels">Location:</p>
              <p>{currentEvent.location}</p>
            </div>

            <div className="event-description-container">
              <p className="event-listing-labels">Description:</p>
              <p>{currentEvent.description}</p>
            </div>

            <div className="event-capacity-container">
              <p className="event-listing-labels">Capacity:</p>
              <p>{currentEvent.capacity}</p>
            </div>

            <div className="date-time-container">
              <p className="event-listing-labels">Date & Time:</p>
              <p>
                Start: {month}, {day} at {startTime}
              </p>
              <p>
                End: {endMonth}, {endDay} at {endTime}
              </p>
            </div>
            <div className="weather-container">
              <p className="event-listing-labels">Weather:</p>
              <div className="temperature">
                <p>{weatherTemp ? weatherTemp + "°C" : "Waiting"}</p>
              </div>
              <div className="weather-icon">
                <img
                  height="50px"
                  width="50px"
                  src={
                    weatherIcon
                      ? weatherIcon
                      : "https://static.vecteezy.com/system/resources/previews/000/582/158/original/hourglass-icon-vector-illustration.jpg"
                  }
                  alt="weather icon"
                />
              </div>
              <div className="weather-condition">
                <p>
                  {weatherCondition
                    ? weatherCondition
                    : "Forecast available up to 14 days before event start"}
                </p>
              </div>
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
