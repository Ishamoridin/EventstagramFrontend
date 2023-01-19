import React from "react";
import { VscHome } from "react-icons/vsc";
// import { MdEvent } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";




const Sidebar = ({sidebar, setUser}) => {
    return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
        <li><i><VscHome/></i><Link to="/">Home</Link></li>
 //       <li><i><MdEvent/></i><Link to="/EventPage">EventPage</Link></li>
        <li><i><MdOutlineCreate/></i><Link to="/PostEvent">PostEvent</Link></li>
        <li><i><CiUser/></i><Link to="/UserProfile">Profile</Link></li>
        <li><i><CiUser/></i><Link onClick={() => setUser(null)} to="/login">Logout</Link></li>
        </div>
  )


};

export default Sidebar;
