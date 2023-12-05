import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function useAuth(redirect) {
    const navigate = useNavigate()
    const [ auth, setAuth ] = useState(null)
    async function checkAuth() {
        try {
            await axios.get('http://localhost:9000/api/friends', {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            },
            setAuth(true)
            )
        }
        catch(err) {
                localStorage.removeItem('token')
                setAuth(false)
            }
        }
        useEffect(() => {
            if(!localStorage.getItem('token')){
                navigate('/login')
            } else {
                checkAuth()
            }
        }, [])

        useEffect(() => {
            if(auth === false){
                navigate('/login')
            }
        }, [auth])

        return {
            auth,
            checkAuth
        }
}
