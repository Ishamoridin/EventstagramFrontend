import { useEffect, useState } from "react";
import "../styles/DarkMode.css";
// import useLocalStorage from 'use-local-storage'



const useDarkMode = () => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if(theme === 'light') {
        window.localStorage.setItem('theme', 'dark')
        setTheme('dark')
      } else {
        window.localStorage.setItem('theme', 'light')
        setTheme('light')
      }
    }

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme')
      if(localTheme) {
        setTheme(localTheme)
      }
    }, [])
    return [theme, toggleTheme]
  };
  
  export default useDarkMode;





  // const DarkMode = () => {
  //   const [dark, setDark] = useState(false);
  //   console.log(dark)
  //     // const [theme, setTheme] = useState('light');
  //     // const toggleTheme = () => {
  //     //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
  //     // };
  //     return (
  //       <div className="toggle-theme-wrapper" >
  //         <span>☀️</span>
  //         <label className="toggle-theme">
  //           <input 
  //             type="checkbox"
  //             onChange={() => setDark(!dark)}
  //           />
  //           <div className="slider round"></div>
  //         </label>
  //         <span>⚫</span>
  //       </div>
  //     );
  //   };
    
  //   export default DarkMode;
  
  