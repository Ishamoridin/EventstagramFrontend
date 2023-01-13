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
  instance
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

//read users:
