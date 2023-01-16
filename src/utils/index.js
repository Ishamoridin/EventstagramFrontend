// export async function updateMap() {};
// export async function updateWeather() {};
export async function getGeolocationFromLocationString(location) {
  const fetchString =
    process.env.REACT_APP_BING_MAP_STRINGSTART +
    "?query=" +
    location +
    process.env.REACT_APP_BING_MAP_KEYSTRING;
  try {
    const results = await fetch(fetchString);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

// create event:
export const createEvent = async (
  eventName,
  startTime,
  endTime,
  description,
  location,
  capacity,
  instance,
  eventOwner
) => {
  try {
    // fetch request for createEvent
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "createEvent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          referrerPolicy: "origin",
        },
        body: JSON.stringify({
          eventName: eventName,
          startTime: startTime,
          endTime: endTime,
          description: description,
          location: location,
          capacity: capacity,
          instance: instance,
          eventOwner: eventOwner,
        }),
      }
    );
    const eventData = await response.json();
    console.log(eventData);
    return eventData;
  } catch (error) {
    console.log(error);
  }
};

//read events:
export const readEvents = async () => {
  try {
    // fetch to database for event
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "readEvents",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          referrerPolicy: "origin",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//update event:
export const updateEvent = async (id, key, value) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "updateEvent",
      {
        method: "PUT",
        headers: {
          "Content-Type": "appliaction/json",
        },
        body: JSON.stringify({
          id: id,
          key: key,
          value: value,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//delete event:
export const deleteEvent = async (id) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "deleteEvent",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id.eventName,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
