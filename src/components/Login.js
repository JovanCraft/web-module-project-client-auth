import React, { useState } from 'react'


const Login = () => {
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

    console.log(creds)
    return (
        <div>
            <h1>Login</h1>
            <form>
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
