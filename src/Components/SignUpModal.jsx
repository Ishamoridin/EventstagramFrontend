import React from 'react'
import { useState } from 'react'
// import { createUser } from '../utils'
import '../styles/LoginModal.css'

const SignUpModal = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        // await createUser(username, email, password)
  return (
    <div className='outerContainer'>
        <div className='innerContainer'>
            <form onSubmit={submitHandler} className='form'>
                <label className='username'>Username:
                    <input onChange={(event) => setUsername(event.target.value) } required />
                </label>
                <br/>
                <label className='email'>e-Mail:
                    <input onChange={(event) => setEmail(event.target.value) } required />
                </label>
                <br/>
                <label className='password'>Password:
                    <input type="password" onChange={(event) => setPassword(event.target.value) } required />
                </label>
                <br/>
                <button type="submit">Create Account</button>
            </form>
        </div>
    </div>
  )
}}

export default SignUpModal