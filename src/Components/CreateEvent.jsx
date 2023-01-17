import React from "react";
import { useState } from "react";
import { createEvent } from "../utils";
import "../styles/CreateEvent.css";

const CreateEvent = (props) => {
  const [eventName, setEventName] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [capacity, setCapacity] = useState();

  const loggedInUser = props.user;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("event name:", eventName);
    console.log("start time:", startTime);
    console.log("end time:", endTime);
    console.log("description:", description);
    console.log("location:", location);
    console.log("capacity:", capacity);

    console.log("logged in user on create event", loggedInUser);

    const event = {
      eventName: eventName,
      startTime: startTime,
      endTime: endTime,
      description: description,
      location: location,
      capacity: capacity,
      eventOwner: loggedInUser,
    };

    console.log("event obj:", event);

    await createEvent(event);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={submitHandler}>
        <div className="event-container">
          <label className="event-label">Event:</label>
          <input onChange={(e) => setEventName(e.target.value)} required />
        </div>

        <br />

        <div className="description-container">
          <label className="description-label">Description:</label>
          <textarea onChange={(e) => setDescription(e.target.value)} />
        </div>

        <br />

        <div className="location-container">
          <label className="location-label">Location:</label>
          <input onChange={(e) => setLocation(e.target.value)} required />
        </div>

        <br />

        <div className="capacity-container">
          <label className="capacity-label">Capacity:</label>
          <input onChange={(e) => setCapacity(e.target.value)} />
        </div>

        <br />

        {/* <div className="instance-container">
          <label className="instance-label">Instance:</label>
          <input type="number" onChange={(e) => setInstance(e.target.value)} />
        </div> */}

        <br />

        <div className="start-time-container">
          <label className="start-time-label">Start Time:</label>
          <input
            type="datetime-local"
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>

        <br />

        <div className="end-time-container">
          <label className="end-time-label">End Time:</label>
          <input
            type="datetime-local"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <br />

        <div className="btn-wrapper">
          <button className="create-event-btn" type="submit">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
