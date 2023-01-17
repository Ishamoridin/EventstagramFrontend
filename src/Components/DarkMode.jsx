import React,{ useContext} from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import "../styles/DarkMode.css";
// import useLocalStorage from 'use-local-storage'


  const DarkMode = () => {
    const { toggleDarkMode } = useContext(DarkModeContext)
    const handleClick = () => {
      toggleDarkMode();
    }
      return (
        <div className="toggle-theme-wrapper" >
          <span>☀️</span>
          <label className="toggle-theme">
            <input 
              type="checkbox"
              onClick={handleClick}
            />
            <div className="slider round"></div>
          </label>
          <span>⚫</span>
        </div>
      );
    };
    
    export default DarkMode;
  
