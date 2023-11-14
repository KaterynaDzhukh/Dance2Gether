import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";



const UpdateProfile=()=> {
    const { id } = useParams();
    const navigate = useNavigate();
    const [update, setUpdate] = useState({});
    const [profilePicture, setProfilePicture] = useState('');
    const [cities, setCities] = useState([]);
    const [dances, setDances] = useState([]);
    const [genders, setGenders] = useState([]);
    const [morePicture, setMorePicture] = useState('');
    const [loading, setLoading] = useState(false);

const getCities = async() =>{
    setLoading(true);
    try{
        const response =  await axios.get("http://localhost:3000/api/cities", 
        {headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' }})
        console.log(response.data)
        setCities(response.data)
    }catch(error){
        console.log("Could not fetch data.");
}finally{
        setLoading(false)
} 
}
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


const updateForm =async(e)=>{
    console.log('hey')
    e.preventDefault();
    setLoading(true);
try{
    const newProfileInformation={
    userId:user_.id,
    aboutMe:aboutMe,
    profilePicture:profilePicture,
    city: city_id,
    danceStyle:dance_id,
    gender:gender_id,
    morePicture:morePicture
}
//updateInformation.push(newProfileInformation)
        const response = await axios.put(`http://localhost:3000/api/profile/update/${id}`,newProfileInformation, {
        headers: { 'Content-Type': 'application/json', "Content-Type": "multipart/form-data",  'Access-Control-Allow-Origin': '*' }
        }, {body:JSON.stringify({data})});
        const data = await response.json();
        console.log(response)

}catch(error){
        console.log("Could not fetch data.");
}finally{
        setLoading(false)
} 
}


    return (
       <div>
           <h3>Update your Profile Information</h3>

       <form onSubmit={updateForm}>
       <div className="input-container">
            <label>Upload Profile Image</label>
            <input type="file" accept="image/*" onChange={(event) => setProfilePicture(event.target.files)} />
        </div>
       <div className="input-container">
       <p>Enter you city</p>
            <select>
            <option value="">--Please choose an option--</option>
            {cities.length ? 
            cities.map(city => (
            <option value={city._id}>{city.cityName}</option>
            )):null}
            </select>
        </div>
        <div className="input-container">
        <p>Choose your dance styles </p>
            <select>
            <option value="">--Please choose an option--</option>
            {dances.length ? 
            dances.map(dance => (
            <option value={dance._id}>{dance.danceName}</option>
            )):null}
            </select>
        </div>
        <div className="input-container">
        <label>About Me </label> 
        <textarea name='aboutMe' />
        </div>
          <div className="input-container">
            <p>You are:</p>
            <select>
            <option value="">--Please choose an option--</option>
            {genders.length ? 
            genders.map(gender => (
            <option value={gender._id}>{gender.gender}</option>
            )):null}
            </select>
          </div>
          <div className="input-container">
            <label>Add one more Picture:</label>
            <input type="file" accept="image/*" onChange={(event) => setMorePicture(event.target.files)} />
          </div>
          <div className="button-container">
            <button type="submit">Save</button> 
          </div>
       </form>
       </div>
     )
   }
   
   export default UpdateProfile