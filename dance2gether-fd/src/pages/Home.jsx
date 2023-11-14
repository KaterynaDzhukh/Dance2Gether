import React from 'react';
import axios from "axios";
import {useEffect, useState} from 'react';
import Slider from "./Slider.jsx"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Reviews from '../components/reviews.jsx';
import { Link } from 'react-router-dom';








const HomepageD = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedArticles, setExpandedArticles] = useState([]); // Track expanded articles



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

  const toggleExpanded = (articleId) => {
    setExpandedArticles((prevExpanded) => {
      if (prevExpanded.includes(articleId)) {
        return prevExpanded.filter((id) => id !== articleId); // Hide text
      } else {
        return [...prevExpanded, articleId]; // Show more text
      }
    });
  };



  return (
    <div className="container mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <> <Slider />
        <div>
        <Link to="/login">
        <Button variant="danger">Join now</Button>
        </Link>
        </div>
          <p className="lead text-center">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
          </p>
          <div className="row row-cols-1 row-cols-md-4 g-4">
        
            {articles.map((article) => (
              <Card style={{ width: '18rem' }} key={article.id}>
                <Card.Img style={{ width: '260px', height: '400px' }} variant="top" src={article.articleImage} />
                <Card.Body>
                  <Card.Title>{article.articleName}</Card.Title>
                  <Card.Text>
                    {expandedArticles.includes(article.id)
                      ? article.articleText // Show all text if expanded
                      : `${article.articleText.slice(0, 100)}...`} {/* Show limited text with ellipsis */}
                  </Card.Text>
                  <Button variant="danger" onClick={() => toggleExpanded(article.id)}>
                    {expandedArticles.includes(article.id) ? 'Show Less' : 'Show More'}
                  </Button>
                </Card.Body>
              </Card>
            ))}
            
          </div>
          <h3 className="lead text-center">
            “What people say about us...”
          </h3>
          <Reviews />
        </>
      )}
    </div>
  );
};


export default HomepageD;