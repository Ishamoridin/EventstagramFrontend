import React from "react";
import { VscThreeBars } from "react-icons/vsc";
// import { BsToggleOff } from "react-icons/bs";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const ToolBar = ({ openSidebar }) => {
  const logo = require ('../images/webAppLogo.png')

  return (
    <div className="tool-bar">
      <div className="bar" onClick={openSidebar}>
        <i>
          <VscThreeBars size={35} />
        </i>
      </div>
      <div className="title">
        <Link to="/">
          <div className="img"><img src={logo} alt=""/></div>
        </Link>
      </div>
      {/* <div>
        <i className="toggleoff">
          <BsToggleOff size={35} />
        </i>
      </div> */}
    </div>
  );
};

export default ToolBar;
