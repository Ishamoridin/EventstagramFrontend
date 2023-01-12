import React from "react";
import { VscHome } from "react-icons/vsc";
import { MdEvent } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import "../styles/Navbar.css";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <i>
          <VscHome />
        </i>
        Home
      </li>
      <li>
        <i>
          <MdEvent />
        </i>
        Event Page
      </li>
      <li>
        <i>
          <MdOutlineCreate />
        </i>
        Create Event Page
      </li>
      <li>
        <i>
          <CiUser />
        </i>
        User Profile
      </li>
    </div>
  );
};

export default Sidebar;
