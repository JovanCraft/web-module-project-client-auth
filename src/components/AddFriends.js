import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'

const AddFriends = () => {

    const navigate = useNavigate();
    const { auth, checkAuth } = useAuth(() => navigate('/login'))

        const sensitiveStuff = async () => {
            await checkAuth()
            //
        }
        if(!auth){
            return (
                <div>
                    Please Wait...
                </div>
            )
        }
    const [ formData, setFormData ] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:9000/api/friends`, formData, {
            headers: {
                authorization : token
            }
        })
        .then(res => {
            navigate('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    console.log(formData)
    return (
        <div>
            <h2>AddFriends</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={handleChange} id='name' name='name'/>
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input onChange={handleChange} id='age' name='age'/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input onChange={handleChange} id='email' name='email'/>
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}



export default AddFriends;
