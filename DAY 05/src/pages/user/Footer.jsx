// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/accommodations">Accommodations</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Beachfront Avenue</p>
          <p>Beach City, ABC 12345</p>
          <p>info@beachresort.com</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Beach Resort. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;