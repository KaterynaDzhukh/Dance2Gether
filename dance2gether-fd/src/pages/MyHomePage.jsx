import React from 'react';
import axios from "axios";
import {useEffect, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../context/UserContext.jsx";


const MyHomePage = () => {
  const {user, token} = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate();


  useEffect(() => {
    getFetch()  
  }, []);


  const getFetch = async () => {
          setLoading(true);
try { const response =  await axios.get(`http://localhost:3000/api/auth/`, 
        {headers: {'Content-Type':'application/json',  'Access-Control-Allow-Origin': '*',  'Authorization': `Bearer ${token}`}})
        const loggedInUserId = user._id;
        const filteredUsers = response.data.filter(user => user._id !== loggedInUserId);
      console.log(filteredUsers);
    if(response.status === 200 ){
      setUsers(filteredUsers);
      console.log(filteredUsers);
    }
}catch(error){
    setError(true);
    console.log("Could not fetch data.");
}finally{
    setLoading(false)
} 
}
     
  return (
    <div className='bg-white py-24 sm:py-32' >
      <p className=" mb-3 text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl flex justify-center">
      Find Dance Partner
          </p>
          <div className="h-px bg-gray-300" />
          <p className="mt-5 text-lg leading-6 text-gray-600 flex justify-center mb-10 ">
          Match with other dancers based on your dance genres.
           Find the partners you always wanted and friends that you want to dance with
          </p>
  
      <div className="flex justify-center">
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        {users.map((user, index) => (
      <a  key={index }href={`userProfile/${user._id}`} className='max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 ">
        <img src={user.image} width='35%' className="rounded-lg bg-gray-100" /> 
      </div>
      <div className="text-m leading-6">
      <h3 className="text-xl text-black-bold-900 ">{user.userName}</h3>
      <p className="text-gray-700">{user.aboutMe}</p>
      </div>
      </a>
  
   ))}
   </div>
   </div> 
    </div> 
     
    );
}



export default MyHomePage;