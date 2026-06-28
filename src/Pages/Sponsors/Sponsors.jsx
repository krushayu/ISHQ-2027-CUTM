import React from "react";
import "./Sponsors.css";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCertificate,
  FaExternalLinkAlt,
  FaHandshake,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

const Sponsors = () => {
  const whySponsorBenefits = [
    "Partner with a flagship international conference on sustainable, intelligent systems, communication hardware, and quantum technology, with a broad scope spanning green computing, edge-AI, RF and photonic hardware, and quantum computing, communication, and sensing — ISHQ 2026 features a rich technical program of plenary talks, invited special sessions, challenges, and hands-on tutorials.",
    "Support the advancement of sustainable and intelligent technologies that drive new developments for society and industry.",
    "Showcase and promote your existing and newly developed products to a global network of researchers, engineers, and technology professionals.",
    "Interact directly with leaders in computing, communication, and quantum technology, who advise their institutions (universities, research laboratories, and R&D centers) on the procurement of new equipment and platforms.",
    "Connect with participants across continents from academia, research institutes, and industrial R&D departments.",
    "Establish collaborations with energetic startups, entrepreneurs, and deep-tech ventures.",
    "Engage with this year's special focus on industry-academia translation and deployment.",
    "Be part of the ISHQ 2026 Industry Day, featuring technology companies of different sizes, a pitch competition for startup ideas, and a matchmaking session.",
    "Boost innovation through the first Quantum-meets-Industry event, highlighting the role of quantum and intelligent systems in next-generation product development and promoting strategic partnerships.",
    "Take advantage of a prime host location where cutting-edge research and innovation happen every day.",
  ];

  return (
    <div className="ishq-sponsors-wrapper">
      <div className="ishq-sponsors-hero">
        <h1 className="ishq-sponsors-hero-title">ISHQ-Sponsors</h1>
        <p className="ishq-sponsors-hero-subtitle">ISHQ-2027 Conference</p>
      </div>
      
      <div className="ishq-sponsors-container">
        {/* Why Exhibit or Sponsor Section */}
        <section className="ishq-sponsors-why-section">
          <h2 className="ishq-sponsors-section-title">
            <FaTrophy className="ishq-sponsors-section-icon" />
            Why Exhibit or Sponsor at ISHQ 2026?
          </h2>
          
          <ul className="ishq-sponsors-benefits-list">
            {whySponsorBenefits.map((benefit, index) => (
              <li key={index}>
                <span className="ishq-benefit-icon">
                  <FaCheckCircle />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Sponsorship Packages */}
        <section className="ishq-sponsors-packages-section">
          <h2 className="ishq-sponsors-section-title">
            <FaHandshake className="ishq-sponsors-section-icon" />
            Sponsorship Packages
          </h2>
          <p className="ishq-sponsors-packages-intro">
            Industrial and Institutional Sponsors are welcome to support
            ISHQ-2027 conference under the following categories:
          </p>

          <div className="ishq-sponsors-packages-grid">
            {/* Platinum Sponsor */}
            <div className="ishq-sponsors-tier ishq-platinum">
              <div className="ishq-sponsors-tier-header">
                <FaTrophy className="ishq-sponsors-tier-icon" />
                <h3>Platinum Sponsor</h3>
                <span className="ishq-sponsors-tier-price">INR 3.0L</span>
              </div>
              <ul className="ishq-sponsors-tier-benefits">
                <li>10 Complimentary delegate passes</li>
                <li>40 minutes presentation slot</li>
                <li>Acknowledgement during Awards & Valedictory Function</li>
                <li>2 Complimentary exhibit booths at Prime Location</li>
                <li>Prominent display of logo on all printed material, backdrop and website</li>
                <li>Permission to keep the Company brochure in the registration Kit</li>
              </ul>
            </div>

            {/* Gold Sponsor */}
            <div className="ishq-sponsors-tier ishq-gold">
              <div className="ishq-sponsors-tier-header">
                <FaMedal className="ishq-sponsors-tier-icon" />
                <h3>Gold Sponsor</h3>
                <span className="ishq-sponsors-tier-price">INR 2.0L</span>
              </div>
              <ul className="ishq-sponsors-tier-benefits">
                <li>8 Complimentary delegate passes</li>
                <li>30-minute presentation slot</li>
                <li>Acknowledgement during Valedictory Function</li>
                <li>Complimentary exhibit booth</li>
                <li>Prominent display of logo on all printed material, backdrop and website</li>
                <li>Permission to keep the Company brochure in the registration Kit</li>
              </ul>
            </div>

            {/* Silver Sponsor */}
            <div className="ishq-sponsors-tier ishq-silver">
              <div className="ishq-sponsors-tier-header">
                <FaAward className="ishq-sponsors-tier-icon" />
                <h3>Silver Sponsor</h3>
                <span className="ishq-sponsors-tier-price">INR 1.0L</span>
              </div>
              <ul className="ishq-sponsors-tier-benefits">
                <li>5 Complimentary delegate passes</li>
                <li>20 minutes presentation slot</li>
                <li>Complimentary exhibit booth</li>
                <li>Display of logo on all printed material, backdrop and website</li>
                <li>Permission to keep the Company brochure in the registration Kit</li>
              </ul>
            </div>

            {/* Bronze Sponsor */}
            <div className="ishq-sponsors-tier ishq-bronze">
              <div className="ishq-sponsors-tier-header">
                <FaCertificate className="ishq-sponsors-tier-icon" />
                <h3>Bronze Sponsor</h3>
                <span className="ishq-sponsors-tier-price">INR 50K</span>
              </div>
              <ul className="ishq-sponsors-tier-benefits">
                <li>2 Complimentary delegate passes</li>
                <li>10 minutes pre-recorded video presentation slot in one of the breakaway sessions</li>
                <li>Complimentary exhibit booth</li>
                <li>Display of logo on all printed material, backdrop and website</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Valued Sponsors Section */}
        {/* Our Valued Sponsors Section */}
<div className="ishq-sponsors-valued-section">
  <h2 className="ishq-sponsors-section-title">
    <span className="ishq-sponsors-section-icon">🏆</span>
    Our Valued Sponsors
  </h2>
  <div className="ishq-sponsors-valued-content">
    <div className="ishq-sponsor-company">
      <div className="ishq-sponsor-logo-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Dassault_Syst%C3%A8mes_logo.svg" 
          alt="Dassault Systèmes Logo" 
          className="ishq-sponsor-logo" 
        />
      </div>
      <div className="ishq-sponsor-info">
        <h3 className="ishq-sponsor-company-name">Dassault Systèmes</h3>
        <p className="ishq-sponsor-details">Details Adding soon...</p>
        <button className="ishq-sponsor-visit-btn">Visit More..</button>
      </div>
    </div>
  </div>
</div>

        {/* Contact Section */}
        <section className="ishq-sponsors-contact-section">
          <div className="ishq-sponsors-contact-content">
            <h2 className="ishq-sponsors-section-title">
              <FaEnvelope className="ishq-sponsors-section-icon" />
              Interested in Sponsoring?
            </h2>
            <p>
              All interested sponsors, fill the Google form below or mail us at{" "}
              <a href="mailto:ishq2027@cutm.ac.in">ishq2027@cutm.ac.in</a>
            </p>
            <button
              onClick={() => window.open('mailto:ishq2027@cutm.ac.in', '_blank')}
              className="ishq-sponsors-contact-btn"
            >
              <FaEnvelope className="ishq-btn-icon" />
              Contact Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;