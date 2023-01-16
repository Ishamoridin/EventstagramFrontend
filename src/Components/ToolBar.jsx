import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import '../styles/navbar.css'
// import DarkMode from './DarkMode';


const ToolBar = ({openSidebar}) => {
  const logo = require ('../images/logo1.png')

  return (
    <div className="tool-bar">
        <div className="bar" onClick={openSidebar}>
            <i ><VscThreeBars size={35}/></i>
        </div>
        <div className="img"><img src={logo} alt=""/></div>
        <div className='darkmode'>
          {/* <DarkMode/> */}
        </div>

    </div>

  )
}


export default ToolBar;