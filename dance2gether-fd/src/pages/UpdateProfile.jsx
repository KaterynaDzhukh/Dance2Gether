import React, { useEffect, useState, useContext} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import {UserContext} from "../context/UserContext.jsx";



const UpdateProfile=()=> {
   //const { id } = useParams();
    const navigate = useNavigate();
    const {user, token} = useContext(UserContext);
    const [aboutMe, setAboutMe] = useState('')
    const [city_id, setCity_Id] = useState('')
    const [gender_id, setGender_Id] = useState('')
    const [dance_id, setDance_Id] = useState('')
    const [cities, setCities] = useState([]);
    const [dances, setDances] = useState([]);
    const [genders, setGenders] = useState([]);
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false);



    //Get all cities
const getCities = async() =>{
    setLoading(true);
    try{
        const response =  await axios.get("http://localhost:3000/api/cities", 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*'}})
        console.log(response.data)
        setCities(response.data)
    }catch(error){
        console.log("Could not fetch data.");
}finally{
        setLoading(false)
} 
}

//Get all dance styles
const getDances = async() =>{
    setLoading(true);
    try{
        const response =  await axios.get("http://localhost:3000/api/dances", 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' }})
        console.log(response.data)
        setDances(response.data)
    }catch(error){
        console.log("Could not fetch data.");
}finally{
        setLoading(false)
} 
}
//Get all genders
const getGenders = async() =>{
    setLoading(true);
    try{
        const response =  await axios.get("http://localhost:3000/api/genders", 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' }}) 
        console.log(response.data)
        setGenders(response.data)
    }catch(error){
        console.log("Could not fetch data.");
   }finally{
        setLoading(false)
   } 
}
useEffect(()=>{
    getCities([]);
    getDances([]);
    getGenders([])
}, [])


const updateForm = async(e)=>{
    console.log('hey')
    e.preventDefault();
    const payload = {aboutMe, dance_id, city_id, gender_id};
    setLoading(true);
try{
        const response = await axios.put(`http://localhost:3000/api/profile/update/${user._id}`, payload, {
        headers: {'Accept': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': `Bearer ${token}`}});
        if(response.status === 201 ){
        setSubmitted(true);
        console.log(response.data)
        navigate('/myhomepage');
    }
}catch(error){
        console.log("Could not fetch data.");
}finally{
        setLoading(false)
} 
}

const handleCity = (e) => {
    e.preventDefault();
    setCity_Id(e.target.value);
    console.log(city_id)
  }

  const handleDance = (e) => {
    e.preventDefault();
    setDance_Id(e.target.value);
    console.log(dance_id)
  }
  const handleAboutMe = (e) => {
    e.preventDefault();
    setAboutMe(e.target.value);
    console.log(aboutMe)
  }

  const handleGender = (e) => {
    e.preventDefault();
    setGender_Id(e.target.value);
    console.log(gender_id)
  }

    return (
<>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Update your Profile Information
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={updateForm} className="space-y-6">
                <div>   
                    <div className="flex items-center justify-between">
                    <label onChange={handleCity} htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    Enter you city
                        <select>
                        <option value="city">--Please choose an option--</option>
                        {cities.length ? 
                        cities.map((city, index) => (
                        <option value={city._id} key ={index}>{city.cityName}</option>
                            )):null}
                        </select>
                        </label>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label onChange={handleDance}htmlFor="dance style" className="block text-sm font-medium leading-6 text-gray-900">
                    Choose your dance styles
                        <select>
                        <option value="danceStyle">--Please choose an option--</option>
                        {dances.length ? 
                        dances.map((dance, index) => (
                        <option value={dance._id} key ={index}>{dance.danceName}</option>
                        )):null}
                        </select>
                        </label>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label onChange={handleAboutMe} htmlFor="about me" className=" block border-0 py-1.5 text-sm font-medium leading-6 text-gray-900">
                    About me
                    <textarea name='aboutMe' className="block w-full rounded-m border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </label>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label onChange={handleGender}htmlFor="dance style" className="block text-sm font-medium leading-6 text-gray-900">
                    You are:
                        <select>
                        <option value="gender">--Please choose an option--</option>
                        {genders.length ? 
                        genders.map((gender, index) => (
            <           option value={gender._id} key ={index}> {gender.gender} </option>
                            )):null}
                        </select>
                        </label>

                    </div>
                </div>
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Submit
                    </button>
                </div>
        
        </form>
        </div>
      </div>
</>


     )
   }
   
   export default UpdateProfile