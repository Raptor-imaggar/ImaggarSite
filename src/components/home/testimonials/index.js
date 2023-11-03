import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css'

const Testimonial = ({ logo, content, personPic, personName, personPosition }) => {
  return (
    <div className="testimonial">
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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 2, // Number of testimonials shown on smaller screens
        },
      },
      {
        breakpoint: 480, // Adjust as needed
        settings: {
          slidesToShow: 1, // Number of testimonials shown on even smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Testimonial
        logo="logo1.png"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        personPic="person1.jpg"
        personName="John Doe"
        personPosition="CEO"
      />
      <Testimonial
        logo="logo2.png"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        personPic="person2.jpg"
        personName="Jane Smith"
        personPosition="Manager"
      />
      <Testimonial
        logo="logo3.png"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        personPic="person3.jpg"
        personName="Bob Johnson"
        personPosition="CFO"
      />
       <Testimonial
        logo="logo1.png"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        personPic="person1.jpg"
        personName="John Doe"
        personPosition="CEO"
      />
      <Testimonial
        logo="logo2.png"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        personPic="person2.jpg"
        personName="Jane Smith"
        personPosition="Manager"
      />
      <Testimonial
        logo="logo3.png"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        personPic="person3.jpg"
        personName="Bob Johnson"
        personPosition="CFO"
      />
     
    </Slider>
  );
};

export default Testimonials;
