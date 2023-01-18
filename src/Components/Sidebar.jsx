import React from "react";
import { VscHome } from "react-icons/vsc";
import { MdEvent } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Sidebar = ({ sidebar, logUserIn }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="list-wrapper">
        <li className="sidebar-list-item">
          <i>
            <VscHome />
          </i>
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar-list-item">
          <i>
            <MdEvent />
          </i>
          <Link to="/EventPage">EventPage</Link>
        </li>
        <li className="sidebar-list-item">
          <i>
            <MdOutlineCreate />
          </i>
          <Link to="/PostEvent">Post</Link>
        </li>
        <li className="sidebar-list-item">
          <i>
            <CiUser />
          </i>
          <Link to="/UserProfile">Profile</Link>
        </li>
        <li className="sidebar-list-item">
          <i>
            <CiUser />
          </i>
          <Link onClick={() => logUserIn(null)} to="/login">
            Logout
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
