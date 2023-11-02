import React, { useState } from 'react';
import './Service.css';
import Image from './image.png'; // Import the image
import Serviceimage1 from '../../../Assect/WhatsApp.jpg';

const Service = () => {
  // State to track which service is currently selected
  const [selectedService, setSelectedService] = useState('service1');

  // Function to handle service selection
  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  

  return (
    <div className="center-container">
      <div className="service-heading-container">
        <div className="service-heading1">
          <h4>heading1</h4>
        </div>
        <div className="service-heading2">
          <h4>heading2</h4>
        </div>
      </div>
      <div className="service-container topic1">
        <div className="service-image">
          <img src={Image} alt="Your Image" />
        </div>
        <div className="subservice-container">
          <div className="subservice">
            <div className="subservice-heading">
              <div
                className={`service-heading service1-heading ${
                  selectedService === 'service1' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service1')}
              >
                service1
              </div>
              <div
                className={`service-heading service2-heading ${
                  selectedService === 'service2' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service2')}
              >
                service2
              </div>
              <div
                className={`service-heading service3-heading ${
                  selectedService === 'service3' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service3')}
              >
                service3
              </div>
              <div
                className={`service-heading service4-heading ${
                  selectedService === 'service4' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service4')}
              >
                service4
              </div>
            </div>
            <div className="subservice-content">
              <div className={`main-subservice ${selectedService}-main`}>
                <div className="subservicemain-content">
                  {selectedService === 'service1' && (
                    <>
                      <h3>Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                  {selectedService === 'service2' && (
                    <>
                      <h3>Service 2 - Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                  {selectedService === 'service3' && (
                    <>
                      <h3>Service 3 - Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                  {selectedService === 'service4' && (
                    <>
                      <h3>Service 4 - Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                </div>
                <div className="subservice-image">
                  <img src={Serviceimage1} alt="Your Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="service-container topic2">
        <div className="service-image">
          <img src={Image} alt="Your Image" />
        </div>
        <div className="subservice-container">
          <div className="subservice">
            <div className="subservice-heading">
              <div
                className={`service-heading service1-heading ${
                  selectedService === 'service1' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service1')}
              >
                service1
              </div>
              <div
                className={`service-heading service2-heading ${
                  selectedService === 'service2' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service2')}
              >
                service2
              </div>
              <div
                className={`service-heading service3-heading ${
                  selectedService === 'service3' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service3')}
              >
                service3
              </div>
              <div
                className={`service-heading service4-heading ${
                  selectedService === 'service4' ? 'selected' : ''
                }`}
                onClick={() => handleServiceSelection('service4')}
              >
                service4
              </div>
            </div>
            <div className="subservice-content">
              <div className={`main-subservice ${selectedService}-main`}>
                <div className="subservicemain-content">
                  {selectedService === 'service1' && (
                    <>
                      <h3>Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                  {selectedService === 'service2' && (
                    <>
                      <h3>Service 2 - Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                  {selectedService === 'service3' && (
                    <>
                      <h3>Service 3 - Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                  {selectedService === 'service4' && (
                    <>
                      <h3>Service 4 - Nurture Customers at Each Step</h3>
                      <h6>
                        Drive the desired action with click-worthy campaigns on
                        WhatsApp. Trigger uninterrupted notifications at scale
                        and boost ROI.
                      </h6>
                      <a>
                        <h7>Explore interrakt</h7>
                      </a>
                    </>
                  )}
                </div>
                <div className="subservice-image">
                  <img src={Serviceimage1} alt="Your Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Service;
