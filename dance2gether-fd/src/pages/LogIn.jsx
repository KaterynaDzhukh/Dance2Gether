import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LogIn=()=> {
 const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

const loginForm =async(e)=>{
    e.preventDefault();
    const payload = { email, password };
    setLoading(true);
try {
        const response = await axios.post('http://localhost:3000/api/registration/login', payload, {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
        console.log('response')
        const { token } = response.data;
        sessionStorage.setItem('jwt', token);
        setLoggedIn(true);
        setTimeout(() => {
        navigate('/');
        }, 3000);
}catch(error){
    console.log("Could not fetch data.");
}finally{
    setLoading(false)
} 
}

  return (
    <div>
        <h1>Log In</h1>
    <form onSubmit={loginForm}>
       <div className="input-container">
         <label>Enter your email</label>
         <input onChange={(e) => setEmail(e.target.value)} type="text"  required />
       </div>
       <div className="input-container">
         <label>Enter your password</label>
         <input onChange={(e) => setPassword(e.target.value)} type="password"  required />
       </div>
       <div className="button-container">
         <button type="submit">Log In</button> 
       </div>
    </form>
    </div>
  )
}

export default LogIn