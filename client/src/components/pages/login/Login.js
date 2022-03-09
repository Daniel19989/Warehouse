import React, { useState } from "react";
import { Navigate } from "react-router-dom"
import "./Login.css"
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({ username: '', password: '', authenticated: false })

    const handleChange = (e) => {
        // create the new state and set it
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
        e.preventDefault()
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // axios post request to / user route.Request body should contain username & password
        axios.post('http://localhost:4000/user', {
            username: user.username,
            password: user.password
        })
            .then(res => {
                if (res.data === 'access granted') {
                    console.log(res)
                    localStorage.setItem('isAuthenticated', true)
                    setUser(prev => ({ ...prev, authenticated: true }))
                }
            })
            .catch(
                err => {
                    console.log(err)
                })
    }

    return (
        <div className="whole">
            <div className="container">
                {user.authenticated === true ? < Navigate to="/" /> : ''}
                <form onSubmit={handleSubmit} >
                    <div className="sign-in">Sign In</div>
                    <span>Username: </span>
                    <input type="text" placeholder="username" name="username" value={user.username} onChange={handleChange} />
                    <br />
                    <span>Password: </span>
                    <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} />
                    <br />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login



