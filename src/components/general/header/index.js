import React, { useState, useEffect } from 'react';
import menuTranslations from '../../../data/menu';
import Logo from './Asset 2.png';
import { AiOutlineMenu } from 'react-icons/ai';
import './Header.css'; // Import your CSS file here

const Header = () => {
  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleAnnouncementClose = () => {
    setAnnouncementClosed(true);
  };

  const { menu } = menuTranslations;
  const { english, tamil } = menu;
  const menuItems = Object.keys(english);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header-div ${scrolled ? 'shadow' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <h1 className="logo">
            <img src={Logo} alt="logo"  />
          </h1>
        </div>
        <div className="button-container">
          <button className="header-button">Work</button>
          <button className="header-button">About</button>
          <button className="header-button">Blog</button>
          <button className="header-button">Resume</button>
          <button className="header-button">Contact</button>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
