import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {UserContext} from "../context/UserContext.jsx";
import { useNavigate } from 'react-router-dom'


const MyProfile=() =>{
    const {user, token} = useContext(UserContext);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError] = useState(false);
    const [city, setCity] = useState([]);
    const [genders, setGenders] = useState([]);
    const [dances, setDances] = useState({});
    
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
        {Object.keys(city).length ? 
        <p>{city.cityName}</p>
    :null}
    </div>
    <div>
    <h4>Gender:</h4>
    {Object.keys(genders).length ? 
            <p>{genders.gender}</p>
            :null}
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
    <button type="submit" onClick={() =>  navigate(`/updateProfile/${user._id}`)}> Update Information</button> 
        </> 
        )}
        </div>
)
}

export default MyProfile;