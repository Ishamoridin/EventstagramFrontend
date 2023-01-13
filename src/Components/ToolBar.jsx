import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import '../styles/navbar.css'



const ToolBar = ({openSidebar}) => {
  const logo = require ('../images/logo1.png')

  return (
    <div className="tool-bar">
        <div className="bar" onClick={openSidebar}>
            <i ><VscThreeBars size={35}/></i>
        </div>
        {/* <div className="title">Eventstagram</div> */}
        <div className="img"><img src={logo}/></div>

        <div>
            {/* <i className='toggleoff'><BsToggleOff size={35}/></i> */}
            {/* <i className='toggleoff'><DarkMode/></i> */}
        </div>
    </div>

  )
}


export default ToolBar;