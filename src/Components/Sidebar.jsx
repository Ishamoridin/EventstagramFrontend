import React from 'react'
import { VscHome } from "react-icons/vsc";
import { MdEvent } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import '../styles/navbar.css'
import { Link } from 'react-router-dom';





const Sidebar = ({sidebar}) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open":"sidebar"}>
      <div className='links'>
        <br/>
        <br/>
        <br/>
        <h1>Eventstagram</h1>
        <br/>
        <Link to="/"><li><i><VscHome/></i>Home</li></Link>
        <Link to="/EventPage"><li><i><MdEvent/></i>Event</li></Link>
        <Link to="/PostEvent"><li><i><MdOutlineCreate/></i>Post Event</li></Link>
        <Link to="/UserProfile"><li><i><CiUser/></i>User Profile</li></Link>
        </div>
    </div>
  )
};

export default Sidebar;


