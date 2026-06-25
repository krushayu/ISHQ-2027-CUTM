import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUserTie,
  FaPaperPlane,
  FaQuestionCircle,
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
      { number: "+91 7008242454", label: "ISHQ-Contact Chair" },
      { number: "+91 9937563329", label: "ISHQ-Contact Convener" }
    ],
    email: "ISHQ2027@cutm.ac.in",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.451155766673!2d83.39253029999999!3d18.189180099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef5e7fab5d93%3A0x8539c45d69778c2f!2sCenturion%20University%20Vizianagaram%20(CUTM)%20-%20BTech%20Engineering%20College%2C%20Paramedical%20Courses!5e0!3m2!1sen!2sin!4v1782239431791!5m2!1sen!2sin"
  };

  return (
    <div className="ishq-contact-wrapper">
      {/* Hero Section */}
      <div className="ishq-contact-hero">
        <div className="ishq-contact-hero-content">
          <h1 className="ishq-contact-hero-title">ISHQ-Contact</h1>
          <p className="ishq-contact-hero-subtitle">ISHQ-2027 Conference — Get in Touch</p>
        </div>
        <div className="ishq-contact-hero-shapes">
          <div className="ishq-contact-shape ishq-contact-shape-1"></div>
          <div className="ishq-contact-shape ishq-contact-shape-2"></div>
        </div>
      </div>

      <div className="ishq-contact-container">
        {/* Unified Contact Card */}
        <div className="ishq-contact-main-card">
          <div className="ishq-contact-card-grid">
            {/* Address Section */}
            <div className="ishq-contact-section ishq-contact-address">
              <div className="ishq-contact-section-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>ISHQ-Contact Address</h3>
              <div className="ishq-contact-content">
                <p>{contactInfo.address.room}</p>
                <p>{contactInfo.address.department}</p>
                <p>{contactInfo.address.university}</p>
                <p>{contactInfo.address.location}</p>
                <p className="ishq-contact-highlight">{contactInfo.address.district}</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="ishq-contact-section ishq-contact-phone">
              <div className="ishq-contact-section-icon">
                <FaPhone />
              </div>
              <h3>ISHQ-Contact Phone</h3>
              <div className="ishq-contact-content">
                {contactInfo.phone.map((item, index) => (
                  <div className="ishq-contact-phone-item" key={index}>
                    <span className="ishq-contact-phone-label">{item.label}:</span>
                    <a href={`tel:${item.number.replace(/\s/g, '')}`} className="ishq-contact-phone-link">
                      {item.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Section */}
            <div className="ishq-contact-section ishq-contact-email">
              <div className="ishq-contact-section-icon">
                <FaEnvelope />
              </div>
              <h3>ISHQ-Contact Email</h3>
              <div className="ishq-contact-content">
                <a href={`mailto:${contactInfo.email}`} className="ishq-contact-email-link">
                  {contactInfo.email}
                </a>
                <p className="ishq-contact-email-note">We respond within 24-48 hours</p>
              </div>
            </div>

            {/* Chair Section */}
            <div className="ishq-contact-section ishq-contact-chair">
              <div className="ishq-contact-section-icon">
                <FaUserTie />
              </div>
              <h3>ISHQ-Contact Chair</h3>
              <div className="ishq-contact-content">
                <p className="ishq-contact-chair-name">D.K. Sahoo</p>
                <p className="ishq-contact-chair-title">Conference Chair, ISHQ 2027</p>
                <div className="ishq-contact-chair-badge">
                  <FaPaperPlane className="ishq-contact-badge-icon" />
                  <span>ISHQ-Contact Lead Organizer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="ishq-contact-map-section">
          <h2>
            <MdLocationOn className="ishq-contact-map-icon" />
            ISHQ-Contact Map
          </h2>
          <div className="ishq-contact-map-wrapper">
            <iframe
              src={contactInfo.mapLink}
              title="ISHQ-Contact Location - Centurion University Vizianagaram"
              className="ishq-contact-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="ishq-contact-map-address">
            <FaMapMarkerAlt className="ishq-contact-map-address-icon" />
            <span>ISHQ-Contact: Centurion University, Vizianagaram Campus, Andhra Pradesh</span>
            <span>If any website related issue? <a href="https://krushayu.in/contact">Click Here</a></span>
          </div>
          <br></br>
          <div className="ishq-contact-map-address">
            <FaQuestionCircle className="ishq-contact-map-address-icon" />
            <span>If any website related issue? <a href="https://krushayu.in/contact" target="_blank">Click Here</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;