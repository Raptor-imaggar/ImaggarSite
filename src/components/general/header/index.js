// Header.js
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import headerMenu from '../../../data/menu';
import Logo from './Asset 2.png';
import Logo2 from './Asset 4.png';
import { useMediaQuery } from '@mui/material';
import './Header.css';
import CloseIcon from '@mui/icons-material/Close';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TbSpeakerphone } from 'react-icons/tb';

const Header = () => {
  const [announcementClosed, setAnnouncementClosed] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobileView = useMediaQuery('(max-width:600px)');
  const [notification, setNotification] = useState({
    message: 'This is your default notification message.',
    visible: true,
  });

  const handleAnnouncementClose = () => {
    setNotification({ ...notification, visible: false });
    document.querySelector('.header-div').style.top = '0';
  };

  const menuItems = headerMenu.map((item) => item.name.en);

  const toggleMenu = () => {
    setShowMenu( !showMenu);
    document.body.style.overflow = showMenu ? 'scroll' : 'hidden';
  };

  const closeMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = 'scroll';
  };
  

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-div ${scrolled ? 'shadow' : ''}`}>
      {notification.visible && (
        <div className={`notification-bar ${notification.visible ? 'active' : ''}`}>
          <span className={`notification-message ${notification.visible ? 'visible' : ''}`}>
            <TbSpeakerphone className="phone-icon" /> {notification.message}
          </span>
          <button className='notification-close-button' onClick={handleAnnouncementClose}>
            <AiOutlineCloseCircle size={20} />
          </button>
        </div>
      )}

      <div className="header-container">
  <div className="logo-container">
    <h1 className="logo">
      <img src={isMobileView ? Logo2 : Logo} alt="logo" />
    </h1>
  </div>

  {isMobileView && (
    <>
      <div className="menu-icon" onClick={toggleMenu}>
        <GiHamburgerMenu size={30} />
      </div>

      <div className={`mobile-menu ${showMenu && isMobileView ? 'active' : ''}`}>
        <button className="close-button" onClick={closeMenu}>
          <CloseIcon fontSize="large" style={{ color: '#A58CF4' }} />
        </button>
        <ul>
          {menuItems.map((item, index) => (
            <li className="mobile-menu-list-down" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )}

  <div className="button-container">
    {menuItems.map((item, index) => (
      <a key={index} href={item.url}>
        <button className="header-button">{item}</button>
      </a>
    ))}
  </div>
</div>

    
    </div>
  );
};

export default Header;
