import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {UserContext} from "../context/UserContext.jsx"




const MyProfile=() =>{
    const {user, token} = useContext(UserContext);
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError] = useState(false);
    const [city, setCity] = useState([]);
    const [genders, setGenders] = useState([]);
    const [dances, setDances] = useState([]);
    
const getUserProfile =async()=>{
    try{
        const response =  await axios.get(`http://localhost:3000/api/auth/${user._id}`, 
        {headers: {'Content-Type':'application/json',  'Access-Control-Allow-Origin': '*',  'Authorization': `Bearer ${token}`}})
        console.log(response.data)
    if(response.status === 200){
        setUserInfo(response.data)
        setCity(response.data.city_id)
        setDances(response.data.dance_id)
        setGenders(response.data.gender_id)
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
    <div >
        {loading ? (
        <p>Loading...</p>) : (
    <>
    <div>
    <img src ={`${userInfo.profilePicture}`} width='30%' />
    </div>
    <h2>{userInfo.userName}</h2>
    <div>
    <h4>City:</h4>
        <p>{city.cityName}</p>
    </div>
    <div>
    <h4>Gender:</h4>
            <p>{genders.gender}</p>
        </div>

        <div>
    <h4>Dance Style:</h4>
    {dances.length ? 
            dances.map((dance, index) => (
                <div key = {index}>
            <p>{dance.danceName}</p>
            </div>
            )):null}
        </div>
        <div>
    <h4>About Me:</h4>
    <p>{userInfo.aboutMe}</p>
        </div>
        <button type="submit"> <a href={'/updateProfile'}>Update Information</a> </button>
        </> 
        )}
        </div>
)
}

export default MyProfile;