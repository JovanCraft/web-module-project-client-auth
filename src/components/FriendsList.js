import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'


const FriendsList = () => {

    const [ friends, setFriends ] = useState([]);
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

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    return (
    <div>
        <h2>FriendsList</h2>
        <ul>
            {
                friends.map(friend => {
                    return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email} </li>
                })
            }

        </ul>
    </div>
    )
}


export default FriendsList;
