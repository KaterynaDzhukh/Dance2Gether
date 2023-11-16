import axios from 'axios';
import React,{useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';
//import {UserContext} from "../context/UserContext.jsx";



const UserProfile=() =>{
   // const {user} = useContext(UserContext);
    const [loading, setLoading]=useState(false);
    const [error, setError] = useState(false);
    const [city, setCity] = useState([]);
    const [dances, setDances] = useState([]);
    const [gender, setGender] = setState([]);
    const [aboutMe, setAboutMe] = setState([]);
    const [userName, setUserName] = setState([])

    useEffect(()=>{
    getUserProfile()
    }, []);

        const getUserProfile = async()=> {   
            const {id} = useParams();
            setLoading(true);
    try{
        const response =  await axios.get(`http://localhost:3000/api/auth/${id}`, 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' }})
        console.log(response.data)
    if(response.status === 200){
        setAboutMe(response.aboutMe)
        setCity(response.data.city_id)
        setDances(response.data.dance_id)
        setGender(response.data.gender_id)
        setUserName(response.data.userName)
    }
    }catch(error){
    setError(true);
    console.log("Could not fetch data.");
    }finally{
    setLoading(false)
    } 
    }


    return (
    <div >
        
    <h2>{userName}</h2>
    <div>
        {gender}, {city}

    </div>
        <div>
    {/* <img src ={`${userInfo.profilePicture}`} width='30%' /> */}
        </div>
        <div>
    <h3>About Me:</h3>
    <p>{aboutMe}</p>
        </div>
        <div>
    <h3>My dance styles:</h3>
    {dances.length ?
              dances.map(dance => (
                <div  value={dance._id} key={dance._id}>{dance.danceName}</div>
              ))
              :null}
        </div>
        
        </div>
)
}

export default UserProfile;