import { useState } from "react";
import "../styles/DarkMoode.css";
// import useLocalStorage from 'use-local-storage'



const DarkMode = () => {
  const [dark, setDark] = useState(false);
  console.log(dark)
    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
    // };
    return (
      <div className="toggle-theme-wrapper" >
        <span>☀️</span>
        <label className="toggle-theme">
          <input 
            type="checkbox"
            onChange={() => setDark(!dark)}
          />
          <div className="slider round"></div>
        </label>
        <span>⚫</span>
      </div>
    );
  };
  
  export default DarkMode;

