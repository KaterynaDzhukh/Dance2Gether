import React from 'react';
import axios from "axios";
import {useEffect, useState} from 'react';
import Slider from "./Slider.jsx"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Reviews from '../components/Reviews.jsx';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';







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
    <div className="container mx-auto mt-8 px-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Slider />

<div>

</div>
          

<div className="bg-gray-100 rounded-lg">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Dance to the Beat of Connection!</h2>
    <p className="text-lg mb-6">Introducing DanceConnect, where passion meets partnership. Unleash the magic of movement as you explore a diverse world of dance styles.</p>
    <p className="text-lg mb-6">Our advanced matching system ensures you find the perfect partner, tailored to your style, skill, and schedule. Dive into local dance events, workshops, and socials, coordinating meetups with potential partners.</p>
    <p className="text-lg mb-6">Create a dazzling dance profile, browse through like-minded enthusiasts, and ignite the spark of shared passion. Elevate your dance experience with DanceConnect – where every step leads to a harmonious connection.</p>
    <p className="text-lg">Join the dance revolution now!</p>
    <Link to="/register" className="flex justify-center items-center h-full">
    <button className="mt-2 bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-full transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300">
    Register  
    </button>
    </Link>
  </div>
</div>




          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            {articles.map((article) => (
              <Card key={article.id} className="shadow-md transition-transform transform hover:scale-105">
                <Card.Img
                    className="object-cover w-full h-full"
                    variant="top"
                    src={article.articleImage}
                    alt={article.articleName}
                  />

                <Card.Body>
                  <Card.Title className="text-lg font-bold mb-2">{article.articleName}</Card.Title>
                  <Card.Text className="text-gray-700 ">
                    {expandedArticles.includes(article._id)
                      ? article.articleText // Show all text if expanded
                      : `${article.articleText.slice(0, 100)}...`} {/* Show limited text with ellipsis */}
                  </Card.Text>
                  <button onClick={() => toggleExpanded(article._id)} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300">
                  {expandedArticles.includes(article._id) ? 'Show Less' : 'Show More'}
                  </button>
                </Card.Body>
              </Card>
            ))}
          </div>

          <Reviews />
        </>
      )}
    </div>
  );
};


export default HomepageD;