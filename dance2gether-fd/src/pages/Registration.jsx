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
    const [loading, setLoading] = useState(false);
 

  const register = async(e) => {
   console.log('hey')
    e.preventDefault();
    const payload = { userName, email, password };
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', payload, {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
      });
      console.log(response)
      if(response.status === 201 ){
        setSubmitted(true);
        navigate('/login');
      }
    }catch(error){
      setError(true);
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
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={register} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Enter a username
              </label>
              <div className="mt-2">
              <input onChange={(e) => setEmail(e.target.value)}  type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="e-mail" className="block text-sm font-medium leading-6 text-gray-900">
                Enter your email
                </label>
              </div>
              <div className="mt-2">
              <input onChange={(e) => setPassword(e.target.value)} type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Enter a password
                </label>
              </div>
              <div className="mt-2">
              <input onChange={(e) => setPassword(e.target.value)} type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration