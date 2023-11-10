import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Registration=()=> {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = setState(false);

  const register = async(e) => {
    e.preventDefault();
    const payload = { userName, email, password };
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/registration/', payload, {
        headers: { 'Content-Type': 'application/json' }
      });
      if(response.status === 201 ){
        setSubmitted(true);
        setTimeout(() => {
            navigate('/updateProfile');
        }, 3000);
      }
    }catch(error){
      setError(true);
    console.log("Could not fetch data.");
    }finally{
    setLoading(false)
    } 
  }

  return (
    <div>
        <h1>Register</h1>
    <form onSubmit={register}>
       <div className="input-container">
         <label>Enter a username</label>
         <input onChange={(e) => setUsername(e.target.value)} type="text" required />
       </div>
       <div className="input-container">
         <label>Enter your email</label>
         <input onChange={(e) => setUsername(e.target.value)}  type="text"  required />
       </div>
       <div className="input-container">
         <label>Enter a password</label>
         <input onChange={(e) => setPassword(e.target.value)} type="password"  required />
       </div>
       <div className="button-container">
         <button type="submit">Sign Up</button>
       </div>
    </form>
        
    </div>
  )
}



export default Registration