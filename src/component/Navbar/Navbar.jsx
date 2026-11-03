import React from 'react'

const Navbar = () => {
  return (
    <div  className="website">
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">⌂</span>
          <span>SadimHomes</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get in Touch
        </a>
      </header>

    </div>
  )
}

export default Navbar

