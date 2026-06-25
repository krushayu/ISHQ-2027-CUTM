import React from "react";
import "./Accommodation.css";
import {
  FaHotel,
  FaBed,
  FaUtensils,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaDumbbell,
  FaCoffee,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Accommodation = () => {
  return (
    <div className="ishq-accommodation-wrapper">
      {/* Hero Section */}
      <div className="ishq-accommodation-hero">
        <div className="ishq-accommodation-hero-content">
          <h1 className="ishq-accommodation-hero-title">ISHQ-Accommodation</h1>
          <p className="ishq-accommodation-hero-subtitle">
            ISHQ-2027 Conference — Comfortable Stay Options
          </p>
        </div>
        <div className="ishq-accommodation-hero-shapes">
          <div className="ishq-accommodation-shape ishq-accommodation-shape-1"></div>
          <div className="ishq-accommodation-shape ishq-accommodation-shape-2"></div>
        </div>
      </div>

      <div className="ishq-accommodation-container">
        {/* Coming Soon Card */}
        <div className="ishq-accommodation-coming-soon">
          <div className="ishq-accommodation-coming-soon-icon">
            <FaHotel />
          </div>
          <h2>Accommodation Details Coming Soon</h2>
          <p>
            We are currently finalizing the best accommodation options for our
            conference attendees. Please check back later for updated information
            on hotels, guest houses, and other stay options near the venue.
          </p>
          <div className="ishq-accommodation-coming-soon-features">
            <div className="ishq-accommodation-feature-item">
              <FaBed className="feature-icon" />
              <span>Comfortable Rooms</span>
            </div>
            <div className="ishq-accommodation-feature-item">
              <FaUtensils className="feature-icon" />
              <span>Meal Options</span>
            </div>
            <div className="ishq-accommodation-feature-item">
              <FaWifi className="feature-icon" />
              <span>Free Wi-Fi</span>
            </div>
            <div className="ishq-accommodation-feature-item">
              <FaParking className="feature-icon" />
              <span>Parking Available</span>
            </div>
            <div className="ishq-accommodation-feature-item">
              <FaSwimmingPool className="feature-icon" />
              <span>Swimming Pool</span>
            </div>
            <div className="ishq-accommodation-feature-item">
              <FaDumbbell className="feature-icon" />
              <span>Fitness Center</span>
            </div>
          </div>
        </div>

        {/* Quick Info Section */}
        <div className="ishq-accommodation-info-grid">
          <div className="ishq-accommodation-info-card">
            <div className="ishq-accommodation-info-icon">
              <FaClock />
            </div>
            <h3>Check-in / Check-out</h3>
            <p>Details will be updated soon</p>
          </div>

          <div className="ishq-accommodation-info-card">
            <div className="ishq-accommodation-info-icon">
              <FaCoffee />
            </div>
            <h3>Complimentary Services</h3>
            <p>Details will be updated soon</p>
          </div>

          <div className="ishq-accommodation-info-card">
            <div className="ishq-accommodation-info-icon">
              <MdLocationOn />
            </div>
            <h3>Nearby Attractions</h3>
            <p>Details will be updated soon</p>
          </div>

          <div className="ishq-accommodation-info-card">
            <div className="ishq-accommodation-info-icon">
              <FaInfoCircle />
            </div>
            <h3>Contact for Assistance</h3>
            <p>
              <a href="mailto:ISHQ2027@cutm.ac.in" className="ishq-accommodation-email-link">
                ISHQ2027@cutm.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* Note Section */}
        <div className="ishq-accommodation-note">
          <FaInfoCircle className="ishq-accommodation-note-icon" />
          <p>
            <strong>Note:</strong> Accommodation will be arranged on a
            first-come, first-served basis. Early registration is recommended to
            secure your preferred stay option. We will update this page with
            detailed information and booking links soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;