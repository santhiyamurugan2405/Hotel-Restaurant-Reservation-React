import React from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();   // ✅ CORRECT PLACE

  return (
    <div className="contact-page">
      <div className="overlay"></div>

      <div className="contact-content">
        <div className="contact-heading">
          <h1>Contact Our Hotel</h1>
          <p>
            We are here to help you plan your perfect stay.
            Reach out anytime.
          </p>
        </div>

        <div className="contact-cards">
          {/* Contact Form */}
          <div className="card">
            <h2>Send Message</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button>Send</button>
          </div>

          {/* Hotel Info */}
          <div className="card hotel-info">
            <h2>Hotel Info</h2>

            <div className="info-list">
              <div className="info-item">
                <span className="icon">📍</span>
                <span>123 Luxury Street, Chennai</span>
              </div>

              <div className="info-item">
                <span className="icon">📞</span>
                <span>+91 98765 43210</span>
              </div>

              <div className="info-item">
                <span className="icon">✉️</span>
                <span>luxury@hotel.com</span>
              </div>
            </div>

            <div className="divider"></div>

            <ul className="features">
              <li>24/7 Front Desk</li>
              <li>Spa & Wellness</li>
              <li>Fine Dining</li>
              <li>Airport Pickup</li>
            </ul>

            <div className="social-icons">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
            </div>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};
