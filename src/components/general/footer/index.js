
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';
import { footerData } from '../../../data/footer';

const Footer = () => {
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <a href={link.url}>{link.label}</a>
      </li>
    ));
  };

  return (
    <>
      <footer className="footer">
        <div className="container row">
          {footerData.map((section, index) => (
            <div className="footer-col" key={index}>
              <h4>{section.title}</h4>
              <ul>{renderLinks(section.links)}</ul>
            </div>
          ))}
        
       
<div className="footer-col">
<div className="form-sect-tem2">
<div className="tem-social-i">
       
       
        <h4>Subscribe</h4>
  <div className="subscribe">
    <input type='email'  placeholder="Subscribe" />
    <button>Subscribe</button>

     </div>
      <div className="tem-social-i">
        {/* Social media links */}
       
        <h4>follow us</h4>
  <div className="social-links">
    <a href="#"><FaFacebookF /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaLinkedinIn /></a>
  </div>
      </div>
    
  
</div>
        </div></div></div>
      </footer>
      <div className="footer-copyright">Copyrights @ Imaggar Technologies</div>
    </>
  );
};

export default Footer;
















