import React from 'react';
import axios from "axios";
import {useEffect, useState} from 'react';
import Slider from "./Slider.jsx"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




const HomepageD = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    getFetch();
  }, []);


  const getFetch = async () => {
    try {
      setLoading(true);
     
      let config = {
        url: "http://localhost:3000/api/article",
        method: "get",
        headers: {
          
        },
      };
      const response = await axios(config);
      setArticles(response.data);
    
      console.log(articles);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(articles)
  
    



  return (
    <div className="container mt-5">
    {loading ? (
      <p>Loading...</p>
    ) : (
      <>
      <Slider />
        <p className="lead text-center">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
        </p>
        <div className="row row-cols-1 row-cols-md-4 g-4">
        {articles.map((article) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.articleImage}  />
      <Card.Body>
        <Card.Title>{article.articleName}</Card.Title>
        <Card.Text>
        {article.articleText}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   ))}
   </div>
    </>
  )};
    </div>    
    );
}

export default HomepageD;