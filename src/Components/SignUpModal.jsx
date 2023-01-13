import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../utils";
import "../styles/LoginModal.css";

const SignUpModal = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        await createUser(username, email, password)
    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <label>Username:
                <input onChange={(event) => setUsername(event.target.value) } required />
            </label>
            <br/>
            <label>e-Mail:
                <input onChange={(event) => setEmail(event.target.value) } required />
            </label>
            <br/>
            <label>Password:
                <input type="password" onChange={(event) => setPassword(event.target.value) } required />
            </label>
            <br/>
            <button type="submit" className="login">Create Account</button>
        </form>
        <Link to="/Login"><button className="signUp">Back to Login</button></Link>
        </div>
    )
}

export default SignUpModal