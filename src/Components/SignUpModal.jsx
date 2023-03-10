import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../utils";
import logo from "../images/loginBackground.jpg";
import appLogo from "../images/webAppLogo.png";
import "../styles/SignUpModal.css";
import { useNavigate } from "react-router-dom";

const SignUpModal = ({setUser}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        const content = await createUser(username, email, password);
        console.log(content);
        if (!content.error){
            setUser(content.username);
            navigate("/userProfile")
        }
    }

    return (
        <div className="outerContainer">
            <img src={logo} className="background" alt="A background of balloons in Turkey" />
            <div className="innerContainer">
            <img src={appLogo} className="appLogo" alt="The Application" />
                <form onSubmit={submitHandler}>
                    <label>Username:
                        <input placeholder="Enter Desired Username" 
                        onChange={(event) => setUsername(event.target.value) } required />
                    </label>
                    <br/>
                    <label>Email:
                        <input placeholder="Enter Email"
                        onChange={(event) => setEmail(event.target.value) } required />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" placeholder="Minimum 8 Characters" 
                        onChange={(event) => setPassword(event.target.value) } required />
                    </label>
                    <br/>
                    <button type="submit" className="create">Create Account</button>
                </form>
                <Link to="/"><button className="backToLogin">Back to Login</button></Link>
            </div>
        </div>
    )
}

export default SignUpModal