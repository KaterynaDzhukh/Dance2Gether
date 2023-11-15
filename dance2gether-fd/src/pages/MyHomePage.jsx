import React from 'react';
import axios from "axios";
import {useEffect, useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../context/UserContext.jsx";

const MyHomePage = () => {
  const {user} = useContext(UserContext);
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);

const navigate = useNavigate();

  useEffect(() => {
    getFetch();
  }, []);


  const getFetch = async () => {
    console.log('hey')
    try {
      setLoading(true);
     
      let config = {
        url: "http://localhost:3000/api/profile/",
        method: "get",
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios(config);
     // setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mt-5">
    {loading ? (
      <p>Loading...</p>
    ) : (
      <>
        <div className="row row-cols-1 row-cols-md-4 g-4">
        {userName.map((user, index) => (
    <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.profilePicture} onClick={() =>  navigate(`/userProfile/${user._id}`)}  />
      <Card.Body>
        <Card.Title>{user.userName}</Card.Title>
        <Card.Text>
        {user.aboutMe}
        </Card.Text>
      </Card.Body>
    </Card>
   ))}
   </div>
    </>
  )};
    </div>    
    );
}






export default MyHomePage;