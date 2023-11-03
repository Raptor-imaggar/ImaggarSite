import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="footer-links-container">
        <div className="footer-links">
          <a href="/">Products</a>
          <a href="/">Contacts</a>
          <a href="/">Subscribe</a>
        </div>
      </div>
      <div className="footer-address-container">
        <div className="footer-products">
          <h4>Products</h4>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
        <div className="footer-address">
          <h4>Address</h4>
          <p>1234 Main St, City, State</p>
          <div className="footer-social-media">
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">Facebook</a>
            <a href="/">Telegram Bot</a>
            <a href="/">WhatsApp Bot</a>
          </div>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      </div>
      <div className="footer-copyright">copyrights belongs © 2023 Imaggar technologies</div>
      </>
  );
};

export default Footer;
