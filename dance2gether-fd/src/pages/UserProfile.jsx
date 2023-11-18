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
        <div >
        {loading ? (
        <p>Loading...</p>) : (
    <>
<div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hello, I am {userInfo.userName}, let's dance!
            </h1>
            <br></br>
            <h4 className="text-sm tracking-tight text-gray-900 sm:text-2xl">
            City: {city.cityName}
            </h4>
            <p className="mt-4 text-xl text-gray-500">
           
            </p>
            <h4 className="text-2xl tracking-tight text-gray-900 sm:text-2xl">
            Gender: {genders.gender}
            </h4>
            <p className="mt-4 text-xl text-gray-500">
            
            </p>
            <h4 className=" tracking-tight text-gray-900 sm:text-2xl">
            Dance Style: 
            </h4>
            {dances.length ? 
            dances.map((dance, index) => (
                <div key = {index}>
            <p className="mt-3 text-xl text-gray-500">
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
            {userInfo.aboutMe}
            </p>
            <button type='submit' className="mt-4 bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"><a target='_blank' href = {`mailto:${email}`}>Send Message</a> </button>
        </div>

        <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-10 sm:translate-x-8 lg:left-1/2 lg:top-1/3 lg:-translate-y-1/2 lg:translate-x-8">
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

export default UserProfile;


