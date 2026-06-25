import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUserTie,
//   FaLinkedin,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  const contactInfo = {
    address: {
      room: "Room No: F-221, 2nd Floor, CRC-2",
      department: "Department of ECE, School of Engineering & Technology",
      university: "Centurion University of Technology & Management",
      location: "R-Sitapur, Allurinagar, Paralakhemundi",
      district: "Dist: Gajapati, Odisha - 761211"
    },
    phone: [
      { number: "+91 7008242454", label: "Chair" },
      { number: "+91 9937563329", label: "Convener" }
    ],
    email: "ISHQ2027@cutm.ac.in",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.451155766673!2d83.39253029999999!3d18.189180099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef5e7fab5d93%3A0x8539c45d69778c2f!2sCenturion%20University%20Vizianagaram%20(CUTM)%20-%20BTech%20Engineering%20College%2C%20Paramedical%20Courses!5e0!3m2!1sen!2sin!4v1782239431791!5m2!1sen!2sin"
  };

  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">ISHQ-2027 Conference — Get in Touch</p>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </div>

      <div className="contact-container">
        {/* Unified Contact Card */}
        <div className="contact-main-card">
          <div className="contact-card-grid">
            {/* Address Section */}
            <div className="contact-section address-section">
              <div className="section-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Address</h3>
              <div className="section-content">
                <p>{contactInfo.address.room}</p>
                <p>{contactInfo.address.department}</p>
                <p>{contactInfo.address.university}</p>
                <p>{contactInfo.address.location}</p>
                <p className="highlight">{contactInfo.address.district}</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="contact-section phone-section">
              <div className="section-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <div className="section-content">
                {contactInfo.phone.map((item, index) => (
                  <div className="phone-item" key={index}>
                    <span className="phone-label">{item.label}:</span>
                    <a href={`tel:${item.number.replace(/\s/g, '')}`} className="phone-link">
                      {item.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Section */}
            <div className="contact-section email-section">
              <div className="section-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <div className="section-content">
                <a href={`mailto:${contactInfo.email}`} className="email-link">
                  {contactInfo.email}
                </a>
                <p className="email-note">We respond within 24-48 hours</p>
              </div>
            </div>

            {/* Chair Section */}
            <div className="contact-section chair-section">
              <div className="section-icon">
                <FaUserTie />
              </div>
              <h3>Conference Chair</h3>
              <div className="section-content">
                <p className="chair-name">D.K. Sahoo</p>
                <p className="chair-title">Conference Chair, ISHQ 2027</p>
                <div className="chair-badge">
                  <FaPaperPlane className="badge-icon" />
                  <span>Lead Organizer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map-section">
          <h2>
            <MdLocationOn className="map-icon" />
            Find Us on Map
          </h2>
          <div className="map-wrapper">
            <iframe
              src={contactInfo.mapLink}
              title="Conference Location - Centurion University Vizianagaram"
              className="contact-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-address">
            <FaMapMarkerAlt className="map-address-icon" />
            <span>Centurion University, Vizianagaram Campus, Andhra Pradesh</span>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="contact-social-section">
          <h2>Connect With Us</h2>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/company/centurion-university" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/CenturionUni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.youtube.com/c/CenturionUniversity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <FaYoutube />
            </a>
            <a 
              href="https://www.instagram.com/centurionuniversity/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://cutm.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link website"
            >
              <FaGlobe />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;