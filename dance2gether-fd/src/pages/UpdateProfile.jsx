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
    
<>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Update your Profile Information
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={updateForm} className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Upload Profile Image
                    </label>
              <     div className="mt-2">
                    <input input type="file"  name="picturePfofile" onChange={(event) => setImage(event.target.files[0])} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
        
                <div>   
                    <div className="flex items-center justify-between">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    Enter you city
                    </label>
                        <select>
                        <option value="city">--Please choose an option--</option>
                        {cities.length ? 
                        cities.map((city, index) => (
                        <option value={city._id} key ={index}>{city.cityName}</option>
                            )):null}
                        </select>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="dance style" className="block text-sm font-medium leading-6 text-gray-900">
                    Choose your dance styles
                    </label>
                        <select>
                        <option value="danceStyle">--Please choose an option--</option>
                        {dances.length ? 
                        dances.map((dance, index) => (
                        <option value={dance._id} key ={index}>{dance.danceName}</option>
                        )):null}
                        </select>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="about me" className="block text-sm font-medium leading-6 text-gray-900">
                    About me
                    </label>
                    <textarea name='aboutMe' />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="dance style" className="block text-sm font-medium leading-6 text-gray-900">
                    You are:
                    </label>
                        <select>
                        <option value="gender">--Please choose an option--</option>
                        {genders.length ? 
                        genders.map((gender, index) => (
            <           option value={gender._id} key ={index}> {gender.gender} </option>
                            )):null}
                        </select>
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