import React from 'react'

const LogIn=()=> {


  return (
    <div>
        <h1>Log In</h1>
    <form>
       <div className="input-container">
         <label>Enter your email</label>
         <input type="text"  required />
       </div>
       <div className="input-container">
         <label>Enter a password</label>
         <input type="password"  required />
       </div>
       <div className="button-container">
         <button type="submit">Log In</button> 
       </div>
    </form>
    </div>
  )
}



export default LogIn