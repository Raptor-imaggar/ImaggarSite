import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TbSpeakerphone } from 'react-icons/tb';
import menuTranslations from '../../../data/menu';
import Logo from './Asset 2.png';
import './Header.css';

const Header = () => {
  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notification, setNotification] = useState({
    message: 'This is your default notification message.',
    visible: true,
  });

  const handleAnnouncementClose = () => {
    setNotification({ ...notification, visible: false });
    // Move the header-div to the top
    document.querySelector('.header-div').style.top = '0';
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
      {notification.visible && (
        <div className={`notification-bar ${notification.visible ? 'active' : ''}`}>
          <span className={`notification-message ${notification.visible ? 'visible' : ''}`}>
            <TbSpeakerphone className="phone-icon"/> {notification.message}
          </span>
          <button className='notification-close-button' onClick={handleAnnouncementClose}>
            <AiOutlineCloseCircle size={20} />
          </button>
        </div>
      )}

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
