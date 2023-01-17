import React, {useContext, useState} from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import ToolBar from "./ToolBar";
import Backdrop from "./Backdrop";
import Sidebar from "./Sidebar";
import '../styles/loginModal.css'


function Container() {
    const {darkMode} = useContext(DarkModeContext);
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }
    const [ logUserIn] = useState(null);
    
  
    return (
        
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <ToolBar openSidebar={toggleSidebar}/>
            <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
            <Sidebar sidebar={sidebar} logUserIn={logUserIn}/>

           {/* <h1>Eventstagram</h1>  */}
        </div>
    )
}


export default Container;