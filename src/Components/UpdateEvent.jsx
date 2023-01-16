import React from "react";
import { useState } from "react";
import { updateEvent } from "../utils";

const UpdateEvent = ({ id }) => {
  const [eventName, setEventName] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [capacity, setCapacity] = useState();
  const [instance, setInstance] = useState();

  const updateEventName = async (e) => {
    e.preventDefault();
    await updateEvent(id, "eventName", eventName);
  };

  const updateStartTime = async (e) => {
    e.preventDefault();
    await updateEvent(id, "startTime", startTime);
  };

  const updateEndTime = async (e) => {
    e.preventDefault();
    await updateEvent(id, "endTime", endTime);
  };

  const updateDescription = async (e) => {
    e.preventDefault();
    await updateEvent(id, "description", description);
  };

  const updateLocation = async (e) => {
    e.preventDefault();
    await updateEvent(id, "location", location);
  };

  const updateCapacity = async (e) => {
    e.preventDefault();
    await updateEvent(id, "capacity", capacity);
  };

  const updateInstance = async (e) => {
    e.preventDefault();
    await updateEvent(id, "instance", instance);
  };

  return (
    <div>
      UpdateEvent
      <div className="update-event-container">
        <div className="update-eventname-form">
          <form onSubmit={updateEventName}>
            <label>Edit Event Name:</label>
            <input onChange={(e) => setEventName(e.target.value)}></input>
            <button type="submit">Confirm</button>
          </form>
        </div>

        <div className="update-start-time-form">
          <form onSubmit={updateStartTime}>
            <label>Edit Start Time:</label>
            <input onChange={(e) => setStartTime(e.target.value)}></input>
            <button type="submit">Confirm</button>
          </form>
        </div>

        <div className="update-end-time-form">
          <form onSubmit={updateEndTime}>
            <label>Edit End Time:</label>
            <input onChange={(e) => setEndTime(e.target.value)}></input>
            <button type="submit">Confirm</button>
          </form>
        </div>

        <div className="update-description-form">
          <form onSubmit={updateDescription}>
            <label>Edit Description:</label>
            <input onChange={(e) => setDescription(e.target.value)}></input>
            <button type="submit">Confirm</button>
          </form>
        </div>

        <div className="update-location-form">
          <form onSubmit={updateLocation}>
            <label>Edit Locaion:</label>
            <input onChange={(e) => setLocation(e.target.value)}></input>
            <button type="submit">Confirm</button>
          </form>
        </div>

        <div className="update-capacity-form">
          <form onSubmit={updateCapacity}>
            <label>Edit Capacity:</label>
            <input onChange={(e) => setCapacity(e.target.value)}></input>
            <button type="submit">Confirm</button>
          </form>
        </div>

        <div className="update-instance-form">
          <form onSubmit={updateInstance}>
            <label>Edit Instance:</label>
            <input onChange={(e) => setInstance(e.target.value)}></input>
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;
