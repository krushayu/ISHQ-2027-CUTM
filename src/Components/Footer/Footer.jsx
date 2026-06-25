import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaDownload,
  FaBookOpen,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Main Footer - Only shows on desktop */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-content">
              {/* Left Side - Logo and Links */}
              <div className="footer-left">
                {/* Logo Section - First Column */}
                {/* <div className="footer-logo-column">
                  <div className="footer-logo-section">
                    <img
                      src="/assets/cutm_logo.png"
                      alt="CUTM Logo"
                      className="footer-logo"
                    />
                  </div>
                </div> */}

                <div className="footer-grid">
                  {/* Quick Links + Downloads stacked in one column */}
                  <div className="footer-section">
                    <h3 className="footer-title">
                      <FaPaperPlane className="section-icon" />
                      Quick Links
                    </h3>
                    <ul className="footer-links">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/committee">Committee</Link>
                      </li>
                      <li>
                        <Link to="/sponsors">Sponsors</Link>
                      </li>
                      <li>
                        <Link to="/registration">Registration</Link>
                      </li>
                    </ul>

                    <h3 className="footer-title" style={{ marginTop: "20px" }}>
                      <FaDownload className="section-icon" />
                      Downloads
                    </h3>
                    <ul className="footer-links">
                      <li>
                        <a
                          href="/doc/Brochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-link"
                        >
                          Brochure
                        </a>
                      </li>
                      <li>
                        <a
                          href="/downloads/invitation.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-link"
                        >
                          Invitation
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Author Guidance Section */}
                  <div className="footer-section">
                    <h3 className="footer-title">
                      <FaBookOpen className="section-icon" />
                      Author Guidance
                    </h3>
                    <ul className="footer-links">
                      <li>
                        <Link to="/scope">Scope</Link>
                      </li>
                      <li>
                        <Link to="/imp-dates">Important Dates</Link>
                      </li>
                      <li>
                        <Link to="/paper-submission">Paper Submission</Link>
                      </li>
                      <li>
                        <Link to="/places">Place of Visit</Link>
                      </li>
                      <li>
                        <Link to="/accommodation">Accommodation</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Us Section */}
                  <div className="footer-section contact-section">
                    <h3 className="footer-title">
                      <FaMapMarkerAlt className="section-icon" />
                      Contact Us
                    </h3>
                    <div className="contact-info">
                      <div className="contact-item">
                        <div className="contact-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="contact-details">
                          <h4>Address</h4>
                          <p>
                            Room No: F-221, 2nd Floor, CRC-2
                            <br />
                            Department of ECE, School of Engineering &
                            Technology,
                            <br />
                            Centurion University of Technology and Management,
                            At: R-Sitapur, Allurinagar, Paralakhemundi
                            <br />
                            Dist: Gajapati, Odisha, India - 761211
                          </p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">
                          <FaPhone />
                        </div>
                        <div className="contact-details">
                          <h4>Phone</h4>
                          <p>
                            <a href="tel:+917008242454">+91 7008242454</a>{" "}
                            (Chair)
                            <br />
                            <a href="tel:+919937563329">+91 9937563329</a>{" "}
                            (Convener)
                          </p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">
                          <FaEnvelope />
                        </div>
                        <div className="contact-details">
                          <h4>Email</h4>
                          <p>
                            <a href="mailto:ISHQ2027@cutm.ac.in">
                              ISHQ2027@cutm.ac.in
                            </a>
                            {/* <br />
                            <a href="mailto:debendra.sahoo@cutm.ac.in">
                              debendra.sahoo@cutm.ac.in
                            </a> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Location Map */}
              <div className="footer-right">
                <div className="location-container">
                  <h3 className="location-title">
                    <FaMapMarkerAlt className="section-icon" />
                    Location
                  </h3>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.451155766673!2d83.39253029999999!3d18.189180099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef5e7fab5d93%3A0x8539c45d69778c2f!2sCenturion%20University%20Vizianagaram%20(CUTM)%20-%20BTech%20Engineering%20College%2C%20Paramedical%20Courses!5e0!3m2!1sen!2sin!4v1782239431791!5m2!1sen!2sin"
                      title="Conference Location"
                      className="google-map"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-container">
            <p className="developed-by">
              Design &amp; Developed by{" "}
              <a href="https://www.linkedin.com/in/krushayu/" target="_blank" rel="noopener noreferrer" className="developer-link">krush@yu</a>{" "}
              | 🌐
              <a href="https://krushayu.in" target="_blank" rel="noopener noreferrer" className="developer-link">krushayu.in</a>
            </p>
            <p className="copyright">
              © ISHQ-2027 || All rights reserved by Centurion University of
              Technology &amp; Management, India
            </p>
            <div className="flag-counter-wrap">
            <a href="https://info.flagcounter.com/c7bk">
              <img src="https://s01.flagcounter.com/count2/c7bk/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_50/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" />
            </a>
          </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <div className="mobile-footer">
        <div className="mobile-footer-content">
          <p className="developed-by">
            Design &amp; Developed by{" "}
            <a href="https://www.linkedin.com/in/krushayu/" target="_blank" rel="noopener noreferrer" className="developer-link">krush@yu</a>{" "}
            | 🌐
            <a href="https://krushayu.in" target="_blank" rel="noopener noreferrer" className="developer-link">krushayu.in</a>
          </p>
          <p className="mobile-copyright">
            © ISHQ-2027 || All rights reserved by Centurion University of
            Technology &amp; Management, India
          </p>
          <div className="flag-counter-wrap">
            <a href="https://info.flagcounter.com/c7bk">
              <img src="https://s01.flagcounter.com/count2/c7bk/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_50/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;