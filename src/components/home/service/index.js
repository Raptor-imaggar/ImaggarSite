import React, { useState } from 'react';
import './Service.css';
import Image from './image.png'; // Import the image
import Serviceimage1 from '../../../Assect/WhatsApp.jpg';
import servicesData from '../../../data/servicesData';

const Service = () => {
  const [selectedService, setSelectedService] = useState('service1');
  const [showTopic1, setShowTopic1] = useState(true);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const toggleTopic = (topic) => {
    setShowTopic1(topic === 1);
  };

  const topics = showTopic1 ? servicesData.topics[0].subtopics : servicesData.topics[1].subtopics;
  const topicName = [servicesData.topics[0].topicName , servicesData.topics[1].topicName]

  return (
    <div className="center-container">
        <div className="service-heading-container">
          {topicName.map((topic, index) => (
          
            <div
              key={topic.id}
              className={`service-heading${index + 1} topic${index + 1}-service ${showTopic1 && index === 0 ? 'topic-active' : 'topic-inactive'}`}
              onClick={() => toggleTopic(index + 1)}
            >
              <h4>{topic}</h4>
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
                        {topic.title}
                      </div>
                    ))}
                  </div>
                  <div className="subservice-content">
                    {topics.map((topic) => (
                      selectedService === topic.id && (
                        <div key={topic.id} className={`main-subservice ${topic.id}-main`}>
                          <div className="subservicemain-content">
                            <h3>{topic.title}</h3>
                            <h6>{topic.description}</h6>
                            <a>
                              <h7>Explore interrakt</h7>
                            </a>
                          </div>
                          <div className="subservice-image">
                            <img src={showTopic1 ? Image : Serviceimage1} alt="Your Image" />
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default Service;
