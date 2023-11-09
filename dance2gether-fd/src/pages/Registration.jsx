import React, { useState } from 'react'


const Registration=()=> {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

  return (
    <div>
        <h1>Register</h1>
    <form>
       <div className="input-container">
         <label>Enter a username</label>
         <input type="text" required />
       </div>
       <div className="input-container">
         <label>Enter your email</label>
         <input type="text"  required />
       </div>
       <div className="input-container">
         <label>Enter a password</label>
         <input type="password"  required />
       </div>
       <div className="button-container">
         <button type="submit">Sign Up</button>
       </div>
    </form>
        
    </div>
  )
}



export default Registration