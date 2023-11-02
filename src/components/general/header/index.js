// Header.js
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the menu icon
import menuTranslations from '../../../data/menu';
import Logo from './Asset 2.png';
import './Header.css';

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
            <img src={Logo} alt="logo" />
          </h1>
        </div>
        <div className="button-container">
          <button className="header-button">Work</button>
          <button className="header-button">About</button>
          <button className="header-button">Blog</button>
          <button className="header-button">Resume</button>
          <button className="header-button">Contact</button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <GiHamburgerMenu size={30} />
        </div>
      </div>
      <div className={`mobile-menu ${showMenu ? 'active' : ''}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
