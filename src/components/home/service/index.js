import React, { useState } from 'react';
import './Service.css';
import Image from '../../../Assect/WhatsApp.jpg'; // Import the image
import Serviceimage1 from '../../../Assect/WhatsApp.jpg';
import servicesData from '../../../data/servicesData';

const Service = () => {
  const [selectedService, setSelectedService] = useState('service1');
  const [showTopic1, setShowTopic1] = useState(true); // Set showTopic1 to true by default
  const [showTopic2, setShowTopic2] = useState(false);
  const [topic1Color, setTopic1Color] = useState('topic-active'); // Set topic1Color to 'topic-active' by default
  const [topic2Color, setTopic2Color] = useState('topic-inactive');

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const toggleTopic = (topic) => {
    setShowTopic1(topic === 1);
    setShowTopic2(topic === 2);
    setTopic1Color(topic === 1 ? 'topic-active' : 'topic-inactive');
    setTopic2Color(topic === 2 ? 'topic-active' : 'topic-inactive');
  };

  return (
    <div className="center-container">
      <div className="service-heading-container">
        <div className={`service-heading1 topic1-service ${topic1Color}`} onClick={() => toggleTopic(1)}>
          <h4>Service</h4>
        </div>
        <div className={`service-heading2 topic2-service ${topic2Color}`} onClick={() => toggleTopic(2)}>
          <h4>Products</h4>
        </div>
      </div>
      <div className="service-container">
        {(showTopic1 || showTopic2) && (
          <div className={`service-topic${showTopic1 ? '1' : '2'}`}>
            <div className="service-image">
              <img src={Image} alt="Your Image" />
            </div>
            <div className="subservice-container">
              <div className="subservice">
                <div className="subservice-heading">
                  {servicesData.heading1.map((service, index) => (
                    <div
                      key={service.id}
                      className={`service-heading service${index + 1}-heading ${
                        selectedService === service.id ? 'selected' : ''
                      }`}
                      onClick={() => handleServiceSelection(service.id)}
                    >
                      {service.title}
                    </div>
                  ))}
                </div>
                <div className="subservice-content">
                  {servicesData.heading1.map((service) => (
                    selectedService === service.id && (
                      <div key={service.id} className={`main-subservice ${service.id}-main`}>
                        <div className="subservicemain-content">
                          <h3>{service.title}</h3>
                          <h6>{service.description}</h6>
                     
                        </div>
                        <div className="subservice-image">
                          <img src={Image} alt="Your Image" />
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
