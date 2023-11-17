import React from 'react';
import axios from "axios";
import {useEffect, useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../context/UserContext.jsx";

const MyHomePage = () => {
  const {user, token} = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState({})
  const navigate = useNavigate();


  useEffect(() => {
    getFetch()  
    setActiveUser(user)
  // console.log(activeUser)
  }, []);


  const getFetch = async () => {
          setLoading(true);
try { const response =  await axios.get(`http://localhost:3000/api/auth/`, 
        {headers: {'Content-Type':'application/json',  'Access-Control-Allow-Origin': '*',  'Authorization': `Bearer ${token}`}})
    if(response.status === 200 && response.id !== activeUser.id){
     setUsers(response.data)
     console.log(users.id)
    }
}catch(error){
    setError(true);
    console.log("Could not fetch data.");
}finally{
    setLoading(false)
} 
}
     
  return (
    <div >
      <h2>Welcome back, {activeUser.userName}</h2>
    
        <div >
        {users.map((user, index) => (
    <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image}  />
      <Card.Body>
        <Card.Title>{user.userName}</Card.Title>
        <Card.Text>
        {user.aboutMe}
        </Card.Text>
        {/* <button type="submit" onClick={() => navigate(`/userProfile/${user._id}`)}>Go to Profile!</button>  */}
      </Card.Body>
    </Card>
   ))}
   </div>
    </div>    
    );
}






export default MyHomePage;