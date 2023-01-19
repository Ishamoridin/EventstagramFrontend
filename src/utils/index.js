// export async function updateMap() {};

// import { redirect } from "react-router-dom";
// import { json } from "react-router-dom";
import { writeCookie } from "../common/index";

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
export const createEvent = async (event) => {
  // console.log("test");
  console.log(event);
  try {
    // fetch request for createEvent
    // const response = await fetch(process.env.REACT_APP_RENDER_URL + "login",
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "createEvent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // referrerPolicy: "origin",
        },
        body: JSON.stringify(event),
      }
    );
    console.log("event response:", response);
    const eventData = await response.json();
    console.log("event data:", eventData);
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
    return data.result;
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
          id: id,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//CRUD Functionality for Users
export const createUser = async (username, email, password) => {
  console.log(process.env.REACT_APP_RENDER_URL + "createUser");
  try {
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          referrerPolicy: "origin",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const readUser = async (username) => {
  console.log(username)
  
  try {
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "readUsers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify({username: username})
      }
    );
    const data = await response.json();
    console.log(data)
    // const usernames = data.users.map((users) => );
    // return usernames;
    return data
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(process.env.REACT_APP_RENDER_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // referrerPolicy: "origin",
      },
      body: JSON.stringify({
        username: username,
        // email: email,
        password: password,
      }),
    });
    console.log("response:", response);
    const data = await response.json();
    console.log("data:", data);
    console.log("data.username:", data.username);
    // logUserIn(data.username);
    // logUserIn(data.username ? data.username : null);
    writeCookie("jwt_token", data.token, 7);
    return data.username;
    // return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const authCheck = async (jwtToken) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "authCheck",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.username;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userObj, filter) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "updateUser",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userObj, userFilter: filter
        }),
      }
    );
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (username) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_RENDER_URL + "deleteUser",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// export const loginWithToken = async (cookie, logUserIn) => {
//   const user = await authCheck(cookie);
//   console.log(user);
// logUserIn(user);
//   logUserIn(user ? user : null);
//   redirect("/");
// };
