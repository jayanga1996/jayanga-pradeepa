import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">JRP</div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/experiences">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        
      </ul>
      <div className='contact-me-div'>
        Contact Me
      </div>
      
    </nav>
  );
};

export default Navbar;
