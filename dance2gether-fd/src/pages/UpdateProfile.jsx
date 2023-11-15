import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";



const UpdateProfile=()=> {
    const { id } = useParams();
    const navigate = useNavigate();
    const [aboutMe, setAboutMe] = useState()
    const [city_id, setCity_Id] = useState('')
    const [gender_id, setGender_Id] = useState('')
    const [dance_id, setDance_Id] = useState('')
    const [image, setImage] = useState([]);
    const [cities, setCities] = useState([]);
    const [dances, setDances] = useState([]);
    const [genders, setGenders] = useState([]);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    

    //Get all cities
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

console.log(image)
console.log(city_id.cityName)
console.log(aboutMe)



const updateForm =async(e)=>{
    console.log('hey')
    e.preventDefault();
    setLoading(true);
const formData = new FormData();
    formData.append('image', image);
    formData.append('aboutMe', aboutMe);
    formData.append('city_id', city_id);
    formData.append('gender_id', gender_id);
    formData.append('dance_id', dance_id);
try{
        const response = await axios.put(`http://localhost:3000/api/profile/update/${id}`, formData, {
        headers: {'Accept': 'application/json', "Content-Type": "multipart/form-data"  }});
        console.log(response.data)

}catch(error){
        console.log("Could not fetch data.");
}finally{
        setLoading(false)
} 
}


    return (
    <div>
        <h3>Update your Profile Information</h3>

    <form  onSubmit={updateForm}>
    <div className="input-container">
            <label>Upload Profile Image</label>
            <input type="file"  name="picturePfofile" onChange={(event) => setImage(event.target.files[0])} />
        </div>
       <div className="input-container">
       <p>Enter you city</p>
            <select>
            <option value="city">--Please choose an option--</option>
            {cities.length ? 
            cities.map((city, index) => (
            <option value={city._id} key ={index}>{city.cityName}</option>
            )):null}
            </select>
        </div>
        <div className="input-container">
        <p>Choose your dance styles </p>
            <select>
            <option value="danceStyle">--Please choose an option--</option>
            {dances.length ? 
            dances.map((dance, index) => (
            <option value={dance._id} key ={index}>{dance.danceName}</option>
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
            <option value="gender">--Please choose an option--</option>
            {genders.length ? 
            genders.map((gender, index) => (
            <option value={gender._id} key ={index}> {gender.gender} </option>
            )):null}
            </select>
          </div>
          <div className="button-container">
            <button type="submit">Save</button> 
          </div>
       </form>
       </div>
     )
   }
   
   export default UpdateProfile