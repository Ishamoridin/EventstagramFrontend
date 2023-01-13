import React from "react";
import { readEvents } from "../utils";
import { useEffect, useState } from "react";

const Home = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    let events = await readEvents();
    setEvents(events);
  };

  return (
    <>
      <h2>Home</h2>
      <div className="home-wrapper">
        {events?.length > 0 ? (
          <div className="event-card-container">
            {events.map((post) => (
              <div className="post-wrapper">
                <p className="event-name">{post.eventName}</p>
                <p className="location">{post.location}</p>
                <p className="start-time">{post.startTime}</p>
              </div>
            ))}
          </div>
        ) : (
          <h3>No Events Found</h3>
        )}
      </div>
    </>
  );
};

export default Home;
