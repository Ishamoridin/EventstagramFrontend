import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { BsToggleOff } from "react-icons/bs";
import "../styles/Navbar.css";

const ToolBar = ({ openSidebar }) => {
  return (
    <div className="tool-bar">
      <div className="bar" onClick={openSidebar}>
        <i>
          <VscThreeBars size={35} />
        </i>
      </div>
      <div className="title">Eventstagram</div>
      <div>
        <i className="toggleoff">
          <BsToggleOff size={35} />
        </i>
      </div>
    </div>
  );
};

export default ToolBar;
