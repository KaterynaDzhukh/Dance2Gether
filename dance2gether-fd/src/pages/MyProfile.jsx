import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {UserContext} from "../context/UserContext.jsx";
import { useNavigate } from 'react-router-dom'


const MyProfile=() =>{
    const {user, token} = useContext(UserContext);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading]=useState(false);
    const [error, setError] = useState(false);
    const [dances, setDances] =useState([])
    
const getUserProfile =async()=>{
    try{
        const response =  await axios.get(`http://localhost:3000/api/auth/${user._id}`, 
        {headers: {'Content-Type':'application/json',  'Access-Control-Allow-Origin': '*',  'Authorization': `Bearer ${token}`}})
        console.log(response.data)
    if(response.status === 200){
        setUserInfo(response.data)
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
}, [user])
     console.log(userInfo)
   
return (
 
<div >
        {loading ? (
        <p>Loading...</p>) : (
    <>
<div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            This is your Profile  {userInfo.userName}!
            </h1>
            <h4 className="text-base tracking-tight text-gray-900 sm:text-2xl">
            City:
            </h4>
            <p className="mt-2 text-xl text-gray-500">
            {userInfo.city_id ? userInfo.city_id.cityName : null}
            </p>
            <h4 className="text-2xl tracking-tight text-gray-900 sm:text-2xl">
            Gender: 
            </h4>
            <p className="mt-2 text-xl text-gray-500">
            {userInfo.gender_id ? userInfo.gender_id.gender: null}
            </p>
            <h4 className="text-2xl tracking-tight text-gray-900 sm:text-2xl">
            Dance Style:
            </h4>
            {userInfo.dance_id ? 
            userInfo.dance_id.map((dance, index) => (
                <div key ={index}>
            <p className="mt-2 text-xl text-gray-500">
            {dance.danceName}
            </p>
            </div>
            )):null}
        </div>
        <div>
            <br></br>
        <h4 className="text-2xl tracking-tight text-gray-900 sm:text-2xl">
            About Me:
            </h4>
            <p className="mt-4 text-xl text-gray-500">
            {userInfo.aboutMe ? userInfo.aboutMe : null}
            </p>
            <button type='submit' className="mt-4 bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"><a href={`updateProfile/${user._id}`}>Update Information </a> </button>
        </div>

        <div>
            <div className="mt-10">
             
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/3 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                        src ={`${userInfo.image}`} width='30%' 
                        alt=""
                        className="h-full w-full object-cover object-center"/>
                      </div>
                    </div>
                </div>
                      
            </div>
              
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>

</>
)}

</div>

)
}

export default MyProfile;