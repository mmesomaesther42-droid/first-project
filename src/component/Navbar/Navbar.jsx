import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="website">
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">⌂</span>
          <span>SadimHomes</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <Link to="/properties">Properties</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

        <a href="#contact" className="nav-button">
          Get in Touch
        </a>
      </header>
    </div>
  );
};

export default Navbar;
