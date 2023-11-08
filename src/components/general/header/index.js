// Header.js
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the menu icon
import headerMenu from '../../../data/menu'; // Import the header menu data
import Logo from './Asset 2.png';
import Logo2 from './Asset 4.png';
import { useMediaQuery } from '@mui/material';

import './Header.css';


const Header = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobileView = useMediaQuery('(max-width:600px)');

  const handleAnnouncementClose = () => {
    setAnnouncementClosed(true);
  };

  const toggleMenuBar = () => {
    setShowMenuBar(!showMenu);
  };

  const closeMenuBar = () => {
    setShowMenu(false);
  };

  const menuItems = headerMenu.map((item) => item.name.en); // Extract menu items from the headerMenu data

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
          <img src={isMobileView ? Logo2 : Logo} alt="logo" />
          </h1>
        </div>
        <div className="button-container">
          {headerMenu.map((item, index) => (
           <a  href={item.url}> <button key={index} className="header-button">
              {item.name.en}
            </button></a>
          ))}
        </div>
      
        <div className="menu-icon" onClick={toggleMenu}>
          <GiHamburgerMenu size={30} />
        </div>
      </div>
      <div className={`mobile-menu ${showMenu ? 'active' : ''}`}>
      <button className="close-button" onClick={closeMenuBar}>X</button>
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
