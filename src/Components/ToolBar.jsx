import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { BsToggleOff } from "react-icons/bs";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const ToolBar = ({ openSidebar, bigUser }) => {
  return (
    <div 
      className="tool-bar"  
      // style={{ visibility: bigUser ? "visible" : "hidden" }}
      >
      <div className="bar" onClick={openSidebar}>
        <i>
          <VscThreeBars size={35} />
        </i>
      </div>
      <div className="title">
        <Link to="/">Eventstagram</Link>
      </div>
      <div>
        <i className="toggleoff">
          <BsToggleOff size={35} />
        </i>
      </div>
    </div>
  );
};

export default ToolBar;
