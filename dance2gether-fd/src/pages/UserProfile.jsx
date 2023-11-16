import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {UserContext} from "../context/UserContext.jsx";



const UserProfile=() =>{
    const {user, token} = useContext(UserContext);
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError] = useState(false);
    const [city, setCity] = useState([]);
    const [dances, setDances] = useState({});
const getUserProfile =async()=>{
    try{
        const response =  await axios.get(`http://localhost:3000/api/auth/user/${user._id}`, 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': `Bearer ${token}`  }})
        console.log(response.data)
    if(response.status === 200){
        setUserInfo(response.data)
        setCity(response.data.city_id)
        setDances(response.data.dance_id)
    }
}catch(error){
    setError(true);
    console.log("Could not fetch data.");
}finally{
    setLoading(false)
} 
}
useEffect(()=>{
    getUserProfile()
}, [])

    return (
    <div>
        {loading ? (
        <p>Loading...</p>) : (
    <>

    
    <h2>{userInfo.userName}</h2>
    <div>
        {Object.keys(city).length ? 
        <p>{city.cityName}</p>
    :null}
    </div>
        <div>
    <img src ={`${userInfo.profilePicture}`} width='30%' />
        </div>
        <div>
    <h3>About Me:</h3>
    <p>{userInfo.aboutMe}</p>
        </div>
        <div>
    <h3>Dance Style:</h3>
    {dances.length ? 
            dances.map((dance, index) => (
                <div key = {index}>
            <p>{dance.danceName}</p>
            </div>
            )):null}
        </div>
        </> 
        )}
        </div>
)
}

export default UserProfile;