import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import pawIcon from "../assets/paw-icon.png";
import "./ContactUs.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
    const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>
            <span className="home-link">Home Page</span> • Contact Us
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
       <section className="contact-info-section">
      <div className="contact-card">
        <FaPhoneAlt className="contact-icon" />
        <h3>Call Us</h3>
        <p>Monday – Friday: 7:30am – 4:00pm MST</p>
        <strong>(844) – 1800 333 556</strong>
      </div>

      <div className="contact-card">
        <FaMapMarkerAlt className="contact-icon" />
        <h3>Visit Us</h3>
        <p>
          <strong>Lifewise Pet Nutrition.</strong>
          <br />
          48 West Temple Drive
          <br />
          Ashburn, VA 20147
        </p>
      </div>

      <div className="contact-card">
        <FaEnvelope className="contact-icon" />
        <h3>Support</h3>
        <p>info@example.com</p>
        <p>lifewise@example.com</p>
      </div>

      <div className="contact-desc">
        <h3>We do not accept solicitation of any kind through this phone number and we do not consent to
            receiving commercial electronic messages through this email or contact page...</h3>
      </div>
    </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-header">
            <img src={pawIcon} alt="paw icon" className="paw-icon" />
            <h2>Leave us a message</h2>
            <p>
              Fill all information details to consult with us to get services from us
            </p>
          </div>

          <form className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Phone" required />
              <input type="email" placeholder="Email address" required />
            </div>
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
