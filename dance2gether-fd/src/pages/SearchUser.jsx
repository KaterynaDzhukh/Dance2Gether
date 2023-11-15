import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchUser = () => {
          const [loading, setLoading] = useState(false);
          const [cities, setCities] = useState([]);
          const [dances, setDances] = useState([]);
          const [error, setError] = useState(false);
        const [users, setUsers] = useState([]);
        const [citiesSearch, setCitiesSearch] = useState("");
        const [dancesSearch, setDancesSearch] = useState("");

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
      setCitiesSearch(e.target.value);
      console.log(citiesSearch)
    }

    const handleDance = (e) => {
      e.preventDefault();
      setDancesSearch(e.target.value);
      console.log(dancesSearch)
    }


     const findUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const response = await axios.get(`http://localhost:3000/api/search/${citiesSearch}/${dancesSearch}`);
            if(response.status === 200 ){
          setUsers(response.data)
            } 
        }catch(error) {
            setError(true)
            console.log("Could not fetch data.");
        } finally {
          setLoading(false)
        }
    }

  return(
    <div>
            <form onSubmit={findUser}>
              <label onChange={handleCity}>Choose a city
              <select  name='cities' id='cities' >
              <option >--Please choose an option--</option>
              {cities.length ? 
              cities.map(city => (
                <option  value={city._id}  key={city._id}>{city.cityName}</option>
              ))
              :null}
              </select></label>
          <label onChange={handleDance}>Choose a dancestyle
            <select  name='dances' id='dances' >
              <option >--Please choose an option--</option>
              {dances.length ?
              dances.map(dance => (
                <option  value={dance._id} key={dance._id}>{dance.danceName}</option>
              ))
              :null}
            </select></label>
            <button type='submit'>🔍</button>
            </form>
            <div>
              <ul>
            {users.length ? 
              users.map((user) => (
                <li value={user._id} key={user._id}>                   
                    <div>{user.userName} </div>
                </li>
              ))
              : null}
              </ul>
      </div>
    </div>
  )
}


export default SearchUser