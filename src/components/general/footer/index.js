import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Platform</h4>
            <ul>
              <li><a href="#">WhatsApp Notifications</a></li>
              <li><a href="#">Advanced NLU</a></li>
              <li><a href="#">Intent Discovery</a></li>
              <li><a href="#">Conversation Studio</a></li>
              <li><a href="#">Campaign Bots</a></li>
              <li><a href="#">Agent Assist</a></li>
              <li><a href="#">Intelligent Analytics</a></li>
              <li><a href="#">Linguist Pro</a></li>
              <li><a href="#">Enterprise Security</a></li>
              <li><a href="#">Integration Ecosystem</a></li>
            </ul>
          </div>
          {/* Add similar styling for other columns */}
          {/* ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
