import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const UserProfile=() =>{
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError] = useState(false);
    const [city, setCity] = useState([]);
    const [dances, setDances] = useState({});
const getUserProfile =async()=>{
    try{
        const response =  await axios.get(`http://localhost:3000/api/profile/${id}`, 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' }})
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
}, [id])

    return (
    <div >
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
        <div>
        <img src ={`${userInfo.morePicture}`} width='50%' />
        </div>
        </> 
        )}
        </div>
)
}

export default UserProfile;