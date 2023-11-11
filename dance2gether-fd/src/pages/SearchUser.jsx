import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchUser = () => {
          const [loading, setLoading] = useState(false);
          const [cities, setCities] = useState([]);
          const [dances, setDances] = useState([]);
          const [error, setError] = useState(false);

    useEffect(()=> {
          getCities([]);
          getDances([]);
        }, []);


    const getCities = async() => {
      setLoading(true);
          try {
      const response = await axios.get('http://localhost:3000/api/cities', {
        headers: {'Access-Control-Allow-Origin': '*'}});
        console.log(response)
      if(response.status === 200 ){
        setCities(response.data)
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

  

    

  return(
    <div>
      <h2>Choose a city</h2>
            <form onSubmit={(e) => findUser(e.target.value)}>
             <select>
              <option value="">--Please choose an option--</option>
              {cities.length ? 
              cities.map(city => (
                <option value={city._id} key={city._id}>{city.cityName}</option>
              ))
              :null}
              </select>
          <h2>Choose a dancestyle</h2>
            <select>
              <option value="">--Please choose an option--</option>
              {dances.length ?
              dances.map(dance => (
                <option value={dance._id} key={dance._id}>{dance.danceName}</option>
              ))
              :null}
            </select>
            <button>🔍</button>
            </form>

    </div>
  )
}

// const SearchUser = () => {
//         const [submitted, setSubmitted]= useState(false)
//         const [searchInput, setSearchInput] = useState('');
//         const [filteredResults, setFilteredResults] = useState([]);
//         const [data, setData] = useState([])

// //  useEffect(() => {
// //         axios.get(`http://localhost:3000/api/search`)
// //             .then((response) => {
// //                 setData(response.data);
// //             })
// //     }, [])


//   const findUser = async(e) => {
//         e.preventDefault();
//         const getUser = (searchValue) => {
//           console.log(searchValue)
//           setSearchInput(searchValue)
//           const filteredData = data.filter((item) => {
//             return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
//             }) 
//             setFilteredResults(filteredData)   
//     }
// const payload = { city, dancestyle };
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/search', payload, {
//         headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
//       });
//       if(response.status === 201 ){
//         setSubmitted(true);
//         setData(response.data);
//         getUser();

//         } 
//       }catch(error){
//       setError(true);
//       console.log("Could not fetch data.");
//      }finally{
//      setLoading(false)
//     } 
//   }
  
{/* <select name="dancestyles" id="dancestyles">
  <option value="ObjectId">Ballet</option>
  <option value="ObjectId">Country</option>
</select> */}

//     return (
//         <div >
//            <h2>Choose a city</h2>
//            <form onSubmit={(e) => findUser(e.target.value)}>
//             <select name="city" >
//               <option value="">--Please choose an option--</option>
//               <option value="Frankfurt">Frankfurt</option>
//               <option value="Berlin">Berlin</option>
//             </select>
//           <h2>Choose a dancestyle</h2>
//             <select name="dancestyle" >
//               <option value="">--Please choose an option--</option>
//               <option value="Waltz">Waltz</option>
//               <option value="Foxtrot">Foxtrot</option>
//               <option value="Tango">Tango</option>
//               <option value="Quickstep">Quickstep</option>
//               <option value="Cha-Cha">Cha-Cha</option>
//               <option value="Rumba">Rumba</option>
//               <option value="Bolero">Bolero</option>
//               <option value="Mambo">Mambo</option>
//               <option value="Samba">Samba</option>
//               <option value="Salsa">Salsa</option>
//               <option value="Bachata">Bachata</option>
//               <option value="Merengue">Merengue</option>
//               <option value="Jive">Jive</option>
//               <option value="Swing">Swing</option>
//             </select>
//             <button>🔍</button>
//             </form>

//             <ul>
//               {filteredResults.map(user => {
                         
//                                 <li key={user.id}>{user.userName}</li>}
//                         )}
//                             </ul>
                        
//         </div>
//     );
// };



export default SearchUser