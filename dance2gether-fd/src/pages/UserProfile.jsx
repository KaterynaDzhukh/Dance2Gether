import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom';


const UserProfile=() =>{
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError] = useState(false);
    const [city, setCity] = useState([]);
    const [genders, setGenders] = useState([]);
    const [dances, setDances] = useState([]);
    const [email, setEmail] = useState([])

    const getUserProfile =async()=>{
    try{
        const response =  await axios.get(`http://localhost:3000/api/profile/user/${id}`, 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' }})
        console.log(response.data)
    if(response.status === 200){
        setUserInfo(response.data)
        setCity(response.data.city_id)
        setDances(response.data.dance_id)
        setGenders(response.data.gender_id)
        setEmail(response.data.email)
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
}, [id])

    return (
    <div>
        {loading ? (
        <p>Loading...</p>) : (
    <>

<div>
    <img src ={`${userInfo.profilePicture}`} width='30%' />
        </div>
    <h2>{userInfo.userName}</h2>
    <div>
        <p>{city.cityName}</p>
    </div>
   
      <button> <a target='_blank' href = {`mailto:${email}`}>Send Message</a></button>
    <div>
        <p>{genders.gender}</p>
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


