import React from "react";
import { useState } from "react";
import { createEvent } from "../utils";

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
    <form onSubmit={submitHandler}>
      <label>
        Event:
        <input onChange={(e) => setEventName(e.target.value)} required />
      </label>
      <br />
      <label>
        Start Time:
        <input
          type="date"
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        End Time:
        <input type="date" onChange={(e) => setEndTime(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <br />
      <label>
        Capacity:
        <input onChange={(e) => setCapacity(e.target.value)} />
      </label>
      <br />
      <label>
        Instance:
        <input type="number" onChange={(e) => setInstance(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
