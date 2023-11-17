import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const Slider = () => {
  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  useEffect(() => {
    getFetch();
  }, []);

  const getFetch = async () => {
    try {
      setLoading(true);

      let config = {
        url: 'http://localhost:3000/api/slider/',
        method: 'get',
        headers: {},
      };
      const response = await axios(config);
      setSlider(response.data);

      console.log('Slider Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
 


  return (
    <div className="w-[100%] m-auto">
  {loading ? (
    <p>Loading...</p>
  ) : (
    <Carousel>
      {slider.map((slide) => (
        <Carousel.Item key={slide.sliderImage}>
          <Image src={slide.sliderImage} fluid className="w-full h-auto" />

          <Carousel.Caption className="flex flex-col justify-center items-center h-full">
            <h3 className="text-4xl font-bold text-white">Dance2Gether</h3>
            <p className="text-lg text-white">
              Step into the rhythm of connection with Dance2Gether. Find your perfect dance partner and let the music weave the story of your journey on the dance floor. Join now and let the magic of movement begin
            </p>
            <Link to="/register">
            <button className="mt-2 bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-full transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300">
            Register  
            </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
      )}
    </div>
  )
};

export default Slider;
