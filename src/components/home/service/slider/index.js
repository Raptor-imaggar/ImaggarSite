import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Slider.css'; // Import the stylesheet

const Slider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (n) => {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    if (n > slides.length) {
      setCurrentSlide(1);
      slides[0].style.display = 'block';
    } else if (n < 1) {
      setCurrentSlide(slides.length);
      slides[slides.length - 1].style.display = 'block';
    } else {
      setCurrentSlide(n);
      slides[n - 1].style.display = 'block';
    }
  };

  const changeSlide = (n) => {
    showSlide(currentSlide + n);
  };

  return (
    <div className="slider-container">
      
      <button className="slider-btn prev-btn" onClick={() => changeSlide(-1)}>
        <FaArrowLeft />
      </button>
      {sliderData.map((slide, index) => (
        <div key={index} className="slide">
         <h2> {slide.title}</h2>.
        </div>
      ))}
      <button className="slider-btn next-btn" onClick={() => changeSlide(1)}>
        <FaArrowRight />
      </button>
      
 

    </div>
  );
};

export default Slider;
