import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const navigate = useNavigate();
    const [ creds, setCreds ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('you made it there, kiddo!')
        axios.post('http://localhost:9000/api/login', creds)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            //console.log(res.data.token)
            navigate('/friends');
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input onChange={handleChange} name='username' id='username'/>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input onChange={handleChange} type='password' name='password' id='password'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}




export default Login
