import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <div className="logo-text">
              <h2>LifeWise</h2>
              <h3>PET NUTRITION</h3>
            </div>
          </div>
          <p>
            I am a passionate and detail-oriented React.js Developer with
            experience in building responsive, high-performance web applications
            using modern JavaScript frameworks. Skilled in React.js, Redux,
            JavaScript, HTML5, CSS3, I excel at turning complex problems into
            intuitive, user-friendly solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/f-blog">Blog</Link></li>
          </ul>
        </div>

        {/* Shop Now */}
        <div className="footer-section">
          <h3>Shop Now</h3>
          <ul>
            <li><Link to="/Dogmodule">Products</Link></li>
            <li><Link to="/CartPage">My Cart</Link></li>
            <li><Link to="/Watchlist">Watchlist</Link></li>
            <li><Link to="/LoginSignup">Account</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <address className="contact-address">
            E-3385 Mota Dabhoiyawad,<br />
            Aali Bhatwad, Bharuch,<br />
            Gujarat, India - 392001
          </address>

          <div className="contact-lines">
            <p><FaPhoneAlt className="icon" /> (+91) 83209 96050</p>
            <p><FaPhoneAlt className="icon" /> (+91) 99247 96288</p>
            <p><FaEnvelope className="icon" /> shaikhjitasir087.com</p>
          </div>
        </div>

        {/* Subscribe Section */}
       <div class="footer-section subscribe-section">
  <h3>Subscribe More Info</h3>
  <div class="subscribe-box">
    <input type="email" placeholder="Enter your Email" />
    <button class="subscribe-btn">Subscribe</button>
  </div>
</div>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com/smart_boy_tasir" target="_blank" rel="noopener noreferrer">
          <div className="circle-box"><FaInstagram className="social" /></div>
        </a>
        <a href="https://www.facebook.com/Mr Tasir" target="_blank" rel="noopener noreferrer">
          <div className="circle-box"><FaFacebookF className="social" /></div>
        </a>
        <a href="https://www.linkedin.com/in/Mr. Tasir" target="_blank" rel="noopener noreferrer">
          <div className="circle-box"><FaLinkedin className="social" /></div>
        </a>
        <a href="https://wa.me/8320996050" target="_blank" rel="noopener noreferrer">
          <div className="circle-box"><FaWhatsapp className="social" /></div>
        </a>
      </div>

      <div className="footer-bottom">
        <hr className="footer-line" />
        <p className="footer-copy">© 2025 Tasir Shaikhji. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
