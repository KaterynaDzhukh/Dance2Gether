import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Reviews = () => {
    const [review, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
      getFetch();
    }, []);
  
  
    const getFetch = async () => {
      try {
        setLoading(true);
       
        let config = {
          url: "http://localhost:3000/api/review",
          method: "get",
          headers: {
            
          },
        };
        const response = await axios(config);
        setReviews(response.data);
        console.log(review);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    console.log(review)
      
  
  
  
  return (
    <div className="container mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CardGroup>
            {review && review.map((reviews) => (
              <Card key={reviews.id}>
                <Card.Img  variant="top" src={reviews.reviewImage} />
                <Card.Body>
                  <Card.Title>{reviews.reviewTitle}</Card.Title>
                  <Card.Text>
                    {reviews.reviewText}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </>
      )}
    </div>
  );
};

export default Reviews