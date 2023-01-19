import React from "react";
import { VscHome } from "react-icons/vsc";
import { MdOutlineCreate } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";




const Sidebar = ({sidebar, setUser, bigUser}) => {
    return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
        <li><i><VscHome/></i><Link to="/Home">Home</Link></li>
        <li><i><MdOutlineCreate/></i><Link to="/PostEvent">PostEvent</Link></li>
        <li><i><CiUser/></i><Link to="/UserProfile">Profile</Link></li>
        <li><i><CiUser/></i><Link onClick={() => setUser(null)} to="/">{bigUser ? "Logout" : "Login"}</Link></li>
        </div>
  )


};

export default Sidebar;
