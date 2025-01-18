import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.png'; // Adjust the path to your logo file

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Nick Ho Logo" className="logo-image" />
      </div>
      <nav className="navbar-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
