import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchUser = () => {
          const [loading, setLoading] = useState(false);
          const [cities, setCities] = useState([]);
          const [dances, setDances] = useState([]);
          const [error, setError] = useState(false);
        const [users, setUsers] = useState([]);
        const [city, setCity] = useState("");
        const [dance, setDance] = useState("")

    useEffect(()=> {
          getCities([]);
          getDances([]);
        }, []);


    const getCities = async() => {
      setLoading(true);
          try {
      const response = await axios.get('http://localhost:3000/api/cities', {
        headers: {'Access-Control-Allow-Origin': '*'}});
      if(response.status === 200 ){
        setCities(response.data)
        console.log(response.data)
        } 
      }catch(error){
        setError(true)
      console.log("Could not fetch city data.");
      }finally{
      setLoading(false)
      } 
    };
     
    const getDances = async() => {
      setLoading(true);
          try {
      const response = await axios.get('http://localhost:3000/api/dances', {
        headers: {'Access-Control-Allow-Origin': '*'}});
      if(response.status === 200 ){
        setDances(response.data)
        } 
      }catch(error){
        setError(true)
      console.log("Could not fetch dance data.");
      }finally{
      setLoading(false)
      } 
    };

    const handleCity = (e) => {
      e.preventDefault();
      setCity(e.target.value);
    }

    const handleDance = (e) => {
      e.preventDefault();
      setDance(e.target.value);
    }


     const findUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const response = await axios.get(`http://localhost:3000/api/search/${city}/${dance}`);
            if(response.status === 200 ){
          setUsers(response.data)
            } {
              const failedSearch= "Sorry, no users found. Try again later."
              console.log(failedSearch)
            }
        }catch(error) {
            setError(true)
            console.log("Could not fetch data.");
        } finally {
          setLoading(false)
        }
    }

  return(
    


<>
    
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Find your dance partner
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={findUser} className="space-y-6" action="#" method="POST">
          <div>   
                <div className="flex items-center justify-between">
                    <label onChange={handleCity} htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                      Choose a city
                    
                        <select name='cities' id='cities'>
                        <option >--Please choose an option--</option>
                        {cities.length ? 
                        cities.map(city => (
                        <option  value={city._id}  key={city._id}>{city.cityName}</option>
                            ))
                        :null}
                        </select></label>
                    </div>
                </div>

                <div>   
                    <div className="flex items-center justify-between">
                    <label onChange={handleDance} htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    Choose a dancestyle
                    <select  name='dances' id='dances' >
                    <option className="bg-gray-100 text-gray-900' : 'text-gray-700'" >--Please choose an option--</option>
                        {dances.length ?
                        dances.map(dance => (
                        <option  value={dance._id} key={dance._id}>{dance.danceName}</option>
                        ))
                        :null}
                        </select></label>
                    </div>
                </div>

                  <button 
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  Search 🔍
                  </button>
            
    </form>

            <div>
            {users.length ? 
              users.map((user) => (
                <div  value={user._id} key={user._id}>                   
                    <a  href={`userProfile/${user._id}`}>{user.userName} </a>
                </div>
              ))
              : null}
              </div>

    
  </div>
</div>
</>







  )
}


export default SearchUser