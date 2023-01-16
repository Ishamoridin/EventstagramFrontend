import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../utils";
import "../styles/LoginModal.css";

const SignUpModal = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
        const status = await createUser(username, email, password);
        if (!loggedInUser){tryToLogin(true)}else{navigate('/')};
    };
    const [triedToLogin, tryToLogin] = useState(false)
    return (
        <div className="outerContainer">
             <p className="pleaseTryAgain" style={{visibility: triedToLogin ? 'visible' : 'hidden' }}>Please Try Again</p>
            <div className="innerContainer">
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
                        <p>Password requires at least 8 characters, A Capital, A Number and A Non Alphanumeric Character.</p>
                    </label>
                    <br/>
                    <button type="submit" className="login">Create Account</button>
                </form>
                <Link to="/Login"><button className="signUp">Back to Login</button></Link>
            </div>
        </div>
    )
}

export default SignUpModal