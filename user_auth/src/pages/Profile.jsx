import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import axios from "axios"



const Profile = () => {
    const {user,dispatch} = useContext(AuthContext)
    const [username,setUsername] = useState('')

    axios.defaults.headers.common["Authorization"] = user;
    const getUserProfile = async ()=>{
        await axios.get(`http://localhost:3001/profile`)
        .then(res=>setUsername(res.data))
        .catch(e=>console.log(e))
    } 
    useEffect(()=>{
        getUserProfile()
    },[])


    const handleLogout = ()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
    return (
        <>
            <h2>Welcome {username && username}</h2>

            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Profile