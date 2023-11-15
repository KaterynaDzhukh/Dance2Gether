import React from 'react';
import axios from "axios";
import {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'


const MyHomePage = () => {
const [userName, setUserName] = useState([]);
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
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
      };
      const response = await axios(config);
      setUserName(response.data);
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
        {userName.map((users) => (
    <Card key={users._id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={users.profilePicture} onClick={() =>  navigate(`/userProfile/${users._id}`)}  />
      <Card.Body>
        <Card.Title>{users.userName}</Card.Title>
        <Card.Text>
        {users.aboutMe}
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