import React, { useState } from 'react';
import './Service.css';
import Image from './image.png'; // Import the image
import Serviceimage1 from '../../../Assect/WhatsApp.jpg';
import servicesData from '../../../data/servicesData';
import Slider from './slider';
const Service = () => {
  const [selectedService, setSelectedService] = useState('1');
  const [showTopic1, setShowTopic1] = useState(true);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const toggleTopic = (topic) => {
    setShowTopic1(topic === 1);
    setSelectedService('1')
  };

  const topics = showTopic1 ? servicesData.topics[0].subtopics : servicesData.topics[1].subtopics;
  const topicName = [servicesData.topics[0].topicName, servicesData.topics[1].topicName];

  return (
    <div className="center-container">
      <div className="service-heading-container">
        {topicName.map((topic, index) => (
          <div
            key={index + 1}
            className={`service-heading${index + 1} topic${index + 1}-service ${
              index === (showTopic1 ? 0 : 1) ? 'topic-active' : 'topic-inactive'
            }`}
            onClick={() => toggleTopic(index + 1)}
          >
            <h2>{topic}</h2>
          </div>
        ))}
      </div>
      <div className="service-container">
        {(showTopic1 || !showTopic1) && (
          <div className={`service-topic${showTopic1 ? '1' : '2'} ${showTopic1 || !showTopic1 ? 'slide-in' : ''}`}>
            <div className="subservice-container">
              <div className="subservice">
                <div className="subservice-heading">
                  {topics.map((topic) => (
                    <div
                      key={topic.id}
                      className={`service-heading ${topic.id === selectedService ? 'selected' : ''}`}
                      onClick={() => handleServiceSelection(topic.id)}
                    >
                      <h3>{topic.title}</h3>
                    </div>
                  ))}
                </div>
                <div className="subservice-content">
                  {topics.map(
                    (topic) =>
                      selectedService === topic.id && (
                        <div
                          key={topic.id}
                          className={`main-subservice ${topic.id}-main ${showTopic1 ? 'slide-in' : ''}`}
                        >
                          <div className="subservicemain-content">
                            <h1>{topic.title}</h1>
                            <h3>{topic['sub-title']}</h3>
                            <h6>{topic.description}</h6>
                            <a href={topic.link}>
                              <button>Know More ..</button>
                            </a>
                          </div>
                          <div className="subservice-image-container">
                            <div className="column">{/* Insert other content in the first column if needed */}</div>
                            <div className="column">
                              <div className="subservice-image">
                                <img src={showTopic1 ? Image : Serviceimage1} alt="Your Image" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <Slider sliderData={topics}> leo jones stanley</Slider>
      
      </div>



  


    </div>
  );
};

export default Service;
