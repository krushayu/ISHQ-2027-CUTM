import React from "react";
import "./Committee.css";
import {
  FaUsers,
  FaUserTie,
  FaUserGraduate,
  FaUserMd,
  FaChalkboardTeacher,
  FaUserCog,
  FaInfoCircle,
  FaHandshake,
} from "react-icons/fa";
import { MdPeople } from "react-icons/md";

const Committee = () => {
  return (
    <div className="ishq-committee-wrapper">
      {/* Hero Section */}
      <div className="ishq-committee-hero">
        <div className="ishq-committee-hero-content">
          <h1 className="ishq-committee-hero-title">ISHQ-Committee</h1>
          <p className="ishq-committee-hero-subtitle">
            ISHQ-2027 Conference — Organizing Committee
          </p>
        </div>
        <div className="ishq-committee-hero-shapes">
          <div className="ishq-committee-shape ishq-committee-shape-1"></div>
          <div className="ishq-committee-shape ishq-committee-shape-2"></div>
        </div>
      </div>

      <div className="ishq-committee-container">
        {/* Coming Soon Card */}
        <div className="ishq-committee-coming-soon">
          <div className="ishq-committee-coming-soon-icon">
            <FaUsers />
          </div>
          <h2>Committee Details Coming Soon</h2>
          <p>
            We are currently finalizing the organizing committee for ISHQ 2027.
            The committee comprises distinguished academicians, researchers, and
            industry experts from around the world. Please check back later for
            the complete list of committee members.
          </p>
          <div className="ishq-committee-coming-soon-features">
            <div className="ishq-committee-feature-item">
              <FaUserTie className="feature-icon" />
              <span>Conference Chairs</span>
            </div>
            <div className="ishq-committee-feature-item">
              <FaUserGraduate className="feature-icon" />
              <span>Technical Program Committee</span>
            </div>
            <div className="ishq-committee-feature-item">
              <FaUserMd className="feature-icon" />
              <span>Advisory Committee</span>
            </div>
            <div className="ishq-committee-feature-item">
              <FaChalkboardTeacher className="feature-icon" />
              <span>Organizing Committee</span>
            </div>
            <div className="ishq-committee-feature-item">
              <FaUserCog className="feature-icon" />
              <span>Review Committee</span>
            </div>
            <div className="ishq-committee-feature-item">
              <FaHandshake className="feature-icon" />
              <span>Industry Liaison</span>
            </div>
          </div>
        </div>

        {/* Committee Categories */}
        <div className="ishq-committee-info-grid">
          <div className="ishq-committee-info-card">
            <div className="ishq-committee-info-icon">
              <FaUserTie />
            </div>
            <h3>Conference Chairs</h3>
            <p>Details will be updated soon</p>
          </div>

          <div className="ishq-committee-info-card">
            <div className="ishq-committee-info-icon">
              <MdPeople />
            </div>
            <h3>Technical Program Committee</h3>
            <p>Details will be updated soon</p>
          </div>

          <div className="ishq-committee-info-card">
            <div className="ishq-committee-info-icon">
              <FaUserMd />
            </div>
            <h3>Advisory Committee</h3>
            <p>Details will be updated soon</p>
          </div>

          <div className="ishq-committee-info-card">
            <div className="ishq-committee-info-icon">
              <FaChalkboardTeacher />
            </div>
            <h3>Organizing Committee</h3>
            <p>Details will be updated soon</p>
          </div>
        </div>

        {/* Note Section */}
        <div className="ishq-committee-note">
          <FaInfoCircle className="ishq-committee-note-icon" />
          <p>
            <strong>Note:</strong> The committee members will be announced soon.
            We are honored to have a distinguished panel of experts from various
            fields of engineering, technology, and research. Stay tuned for
            updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Committee;