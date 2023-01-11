import React from "react";
import { useState } from "react";
import { createEvent } from "../utils";
import "../styles/CreateEvent.css";

const CreateEvent = () => {
  const [eventName, setEventName] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [capacity, setCapacity] = useState();
  const [instance, setInstance] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(eventName);
    console.log(startTime);
    console.log(endTime);
    console.log(description);
    console.log(location);
    console.log(capacity);
    console.log(instance);

    await createEvent(
      eventName,
      startTime,
      endTime,
      description,
      location,
      capacity,
      instance
    );
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={submitHandler}>
        <div className="event-container">
          <label className="event-label">
            Event:
            <input onChange={(e) => setEventName(e.target.value)} required />
          </label>
        </div>

        <br />

        <div className="description-container">
          <label className="description-label">
            Description:
            <input onChange={(e) => setDescription(e.target.value)} />
          </label>
        </div>

        <br />

        <div className="location-container">
          <label className="location-label">
            Location:
            <input onChange={(e) => setLocation(e.target.value)} required />
          </label>
        </div>

        <br />

        <div className="capacity-container">
          <label className="capacity-label">
            Capacity:
            <input onChange={(e) => setCapacity(e.target.value)} />
          </label>
        </div>

        <br />

        <div className="intance-container">
          <label className="instance-label">
            Instance:
            <input
              type="number"
              onChange={(e) => setInstance(e.target.value)}
            />
          </label>
        </div>

        <br />

        <div className="start-time-container">
          <label className="start-time-label">
            Start Time:
            <input
              type="date"
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </label>
        </div>

        <br />

        <div className="end-time-container">
          <label className="end-time-label">
            End Time:
            <input type="date" onChange={(e) => setEndTime(e.target.value)} />
          </label>
        </div>

        <br />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
