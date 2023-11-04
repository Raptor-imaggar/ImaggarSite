// ContactPage.js

import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-main">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Generative AI-Powered Support to Win Lifelong Customers</h2>
          <h4>With Haptik, you can:</h4>
          <ul>
            <li>
              <h7>Build a Generative AI Assistant in No Time!</h7> <br/>Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.
            </li>
            <li>
              <h7>Unlock Agent Efficiency with Agent Co-pilot</h7> <br/>Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.
            </li>
            <li>
              <h7>Drive Better Customer Outcomes with Analytics</h7> <br/>Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.
            </li>
            <li>
              <h7>Build a Generative AI Assistant in No Time!</h7> <br/>Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.
            </li>
          </ul>
          <div className="logo-row">
            {/* Add your logo images here */}
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              
              <input className='contact-input' placeholder='firstName' type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-group">
              
              <input className='contact-input' placeholder='lastName' type="text" id="lastName" name="lastName" />
            </div>
            <div className="form-group">
             
              <input className='contact-input' placeholder='companyName' type="text" id="companyName" name="companyName" />
            </div>
            <div className="form-group">
             
              <input className='contact-input' placeholder='Email' type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              
              <input className='contact-input'placeholder='phoneNumber' type="text" id="phoneNumber" name="phoneNumber" />
            </div>
            <button className='contact-submit-button' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
