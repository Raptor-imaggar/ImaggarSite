import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">visit website</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">download</a></li>
            <li><a href="#">changelog</a></li>
            <li><a href="#">github</a></li>
            <li><a href="#">all version</a></li>
          </ul>
        </div>
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
    <div class="footer-copyright">Copyrights @ Imaggar Technologies</div>

    </>
  );
};

export default Footer;
