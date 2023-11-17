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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">What people say about us...</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {review.map((reviews) => (
                <div key={reviews.reviewTitle} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={reviews.reviewImage}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  
                  <p className="text-base font-semibold text-gray-900">{reviews.reviewText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};



export default Reviews