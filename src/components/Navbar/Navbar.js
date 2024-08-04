// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import logo from '../../assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Obsługa zdarzenia przewijania
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isOpen ? 'navbar-active' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="IN-CARS Logo" className="navbar-logo" />
          <a href="/" className="navbar-brand-name">IN-CARS Serwis Samochodowy</a>
          <a href="/" className="navbar-brand-name-small">IN-CARS</a>

        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          
          <li className="navbar-item">
            <a href="/" className="navbar-link">Start</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">O nas</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">Usługi</a>
          </li>
          <li className="navbar-item" style={{fontWeight: 600}}>
          <a href="tel:+48723293014" className="navbar-link phone-icon">
            <FontAwesomeIcon icon={faPhone} className="navbar-icon" />
            <span className="phone-number-text">723 293 014</span>
          </a>
        </li>
          <li className="navbar-item" style={{fontWeight: 600}}>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="navbar-link">
              <FontAwesomeIcon icon={faMapMarkerAlt} className='navbar-icon'/>
              <span className="location-text">Malawa</span>
            </a>
          </li>
          <li className="navbar-item" style={{fontWeight: 600}}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="navbar-link">
              <FontAwesomeIcon icon={faFacebook} className='navbar-icon'/>
            </a>
          </li>
          <li className="navbar-item" style={{fontWeight: 600}}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="navbar-link">
              <FontAwesomeIcon icon={faInstagram} className='navbar-icon'/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
