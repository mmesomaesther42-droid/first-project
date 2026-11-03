import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Sadim<span>Homes</span>
            </a>

            <p>
              Helping you discover the right property and find a place you can
              proudly call home.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#properties">Properties</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>
            <a href="#properties">Buy a Property</a>
            <a href="#properties">Rent a Home</a>
            <a href="#services">Property Management</a>
            <a href="#contact">Get in Touch</a>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Have questions about a property?</p>
            <a href="mailto:info@sadimhomes.com">Email Our Team</a>
            <a href="#contact">Send an Enquiry</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SadimHomes. All rights reserved.</p>

          <a href="#home">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
