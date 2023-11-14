import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

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

    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Carousel>
          {slider.map((slide) => (
            <Carousel.Item key={slide.sliderImage}>
              <Image src={slide.sliderImage} fluid className="d-block"
                 />
              <Carousel.Caption>
                <h3>Dance2Gether</h3> 
                <p>Dance2Gether</p> 
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  )
};

export default Slider;
