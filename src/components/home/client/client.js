import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './client.css';

import client1 from '../../../Assect/client/client1.png';
import client2 from '../../../Assect/client/client2.png';
import client3 from '../../../Assect/client/client3.png';
import client4 from '../../../Assect/client/client4.png';
import client5 from '../../../Assect/client/client5.png';
import client6 from '../../../Assect/client/client6.png';
import client7 from '../../../Assect/client/client7.png';
import client8 from '../../../Assect/client/client8.png';
import client9 from '../../../Assect/client/client9.png';
import client10 from '../../../Assect/client/client10.png';

const images = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Adjust the speed here
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    cssEase: 'linear', // For smooth continuous movement
    pauseOnHover: false,
    arrows: false,
  };

  return (

    <div className="client-slider">
      <h2>Trusted by 500+ Leading Brands</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
