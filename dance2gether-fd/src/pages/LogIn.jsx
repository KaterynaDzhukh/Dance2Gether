import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../context/UserContext.jsx";

const LogIn=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const {login} = useContext(UserContext) 
    const{logout} = useContext(UserContext)

    const loginForm = async (e) => {
        e.preventDefault();
        login(email, password, setLoading, setLoggedIn)
    }

// const login =async(e)=>{
//     e.preventDefault();
//     const payload = { email, password };
//     setLoading(true);
// try {
//         const response = await axios.post('http://localhost:3000/api/registration/login', payload, {
//         headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
//         });
//         console.log('response')
//         const { token } = response.data;
//         sessionStorage.setItem('jwt', token);
//         setLoggedIn(true);
//         setTimeout(() => {
//         navigate('/');
//         }, 3000);
// }catch(error){
//     console.log("Could not fetch data.");
// }finally{
//     setLoading(false)
// } 
// }

  return (
   
   

    <>
    
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginForm} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
              <input onChange={(e) => setEmail(e.target.value)} type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
              <input onChange={(e) => setPassword(e.target.value)} type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </>

  )
}

export default LogIn
