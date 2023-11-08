import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import testimonialData from '../../../data/testimonialData';

const Testimonial = ({ logo, content, personPic, personName, personPosition, customColor }) => {
  const testimonialStyle = {
    backgroundColor: customColor,
  };

  return (
    <div className="testimonial" style={testimonialStyle}>
      <div className="testimonial-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="testimonial-content">
        {content}
      </div>
      <hr className="testimonial-line" />
      <div className="testimonial-person">
        <div className="person-info">
          <img src={personPic} alt="Person Pic" className="person-pic" />
          <div className="person-details">
            <p className="person-name">{personName}</p>
            <p className="person-position">{personPosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 2 testimonials on mobile screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200, // Large desktops and smaller
        settings: {
          slidesToShow: 3, // Show 3 testimonials
        },
      },
      {
        breakpoint: 992, // Desktops and smaller
        settings: {
          slidesToShow: 2, // Show 2 testimonials
        },
      },
      {
        breakpoint: 768, // Tablets and smaller
        settings: {
          slidesToShow: 1, // Show 1 testimonial
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 1 testimonial
        },
      },
    ],
  };

  return (
    <div className='testimonials-container '>
    <h1 style={{"alignItems":'center'}}>Testimonials</h1>
    <h6>How our Clients Felt !</h6>
    <Slider {...settings}>
      {testimonialData.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </Slider></div>
  );
};

export default Testimonials;
