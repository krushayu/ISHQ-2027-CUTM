import React, { useState } from "react";
import "./PaperSubmission.css";
import {
  FaFileAlt,
  FaDownload,
  FaUpload,
  FaExclamationTriangle,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const PaperSubmission = () => {
  const [btnState, setBtnState] = useState("idle");

  const handleSubmit = () => {
    if (btnState === "loading") return;
    setBtnState("loading");
    setTimeout(() => {
      setBtnState("success");
      setTimeout(() => {
        window.open("#", "_blank");
        setBtnState("idle");
      }, 1000);
    }, 2000);
  };

  return (
    <div className="paper-wrapper">
      <div className="paper-hero">
        <h1 className="paper-hero-title">Paper Submission</h1>
        <p className="paper-hero-subtitle">ISHQ-2027 Conference</p>
      </div>

      <div className="paper-container">
        <section className="paper-section">
          <h2 className="paper-section-title">
            <FaFileAlt className="paper-icon" />
            Submission Guidelines
          </h2>
          <p className="paper-intro">
            ISHQ-2027 welcomes papers related to the conference tracks. (Please
            refer scope of the conference)
          </p>
          <p className="paper-text">
            The following instructions should be followed to make a successful
            submission:
          </p>
        </section>

        {/* Paper Size */}
        <section className="paper-card">
          <h3 className="paper-card-title">Paper Size:</h3>
          <p>
            Please ensure pinned manuscript adheres to the specified length
            requirement of <strong>4-6 pages</strong> with Abstract word count
            limit <strong>150-250 words</strong>, following the IEEE Conference
            format guidelines. You can download the template from the provided
            link:
          </p>
        </section>

        {/* Paper Template */}
        <section className="paper-card">
          <h3 className="paper-card-title">
            <FaDownload className="paper-small-icon" />
            Paper Template:
          </h3>
          <div className="paper-template-links">
            <a href="/doc/ms_word_template.docx" className="paper-template-btn">
              <FaDownload />
              MS Word Template
            </a>
            <a href="/doc/latex_template.zip" className="paper-template-btn">
              <FaDownload />
              LaTeX Template
            </a>
            <a
              href="https://www.ieee.org/conferences/publishing/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="paper-template-btn"
            >
              <FaDownload />
              IEEE - Manuscript Templates
            </a>
          </div>
          <div className="paper-note">
            <FaExclamationTriangle className="note-icon" />
            <p>
              <strong>Note:</strong> Manuscripts that do not conform to the
              formatting guidelines will be removed from further consideration
              without review.
            </p>
          </div>
        </section>

        {/* Paper Submission Method */}
        <section className="paper-card">
          <h3 className="paper-card-title">
            <FaUpload className="paper-small-icon" />
            Paper Submission Method:
          </h3>
          <div className="paper-instructions">
            <h4>Instructions:</h4>
            <ol>
              <li>Upload papers in IEEE format only.</li>
              <li>
                Remove the author details from the manuscript for double blind
                review.
              </li>
              <li>
                Select the track as per suitable theme of the conference as
                mentioned in the Author Guidelines.
              </li>
            </ol>
          </div>

          {/* CMT Submit Card - IMPROVED DESIGN */}
          <div className="cmt-card">
            <div className="cmt-card-content">
              <div className="cmt-badge">
                <span className="cmt-badge-dot"></span>
                Submission Open
              </div>

              <h3 className="cmt-card-heading">Ready to Submit Your Paper?</h3>

              <p
                className="submit-card-text"
                style={{
                  fontSize: "15px",
                  color: "#F8F8F5",
                  lineHeight: "1.8",
                  margin: "0 0 12px 0",
                  fontFamily: "'Roboto Slab', serif",
                }}
              >
                Click the button below to open the Microsoft CMT submission
                portal for ISHQ 2027. Make sure your paper follows IEEE format
                before submitting.
              </p>

              <button
                className={`cmt-btn cmt-btn--${btnState}`}
                onClick={handleSubmit}
                disabled={btnState === "loading"}
              >
                {btnState === "idle" && (
                  <>
                    <FaRocket className="cmt-btn-icon" /> Submit via CMT
                  </>
                )}
                {btnState === "loading" && (
                  <>
                    <span className="cmt-ring"></span> Launching...
                  </>
                )}
                {btnState === "success" && (
                  <>
                    <FaCheckCircle className="cmt-btn-icon" /> Opening CMT!
                  </>
                )}
              </button>
              <br></br>
              <p
                className="submit-card-text"
                style={{
                  fontSize: "13px",
                  color: "#F8F8F5",
                  lineHeight: "1.8",
                  margin: "0 0 12px 0",
                  fontFamily: "'Roboto Slab', serif",
                }}
              >
                Having issues?{" "}
                <a style={{
                  fontSize: "13px",
                  color: "#F8F8F5",
                  lineHeight: "1.8",
                  margin: "0 0 12px 0",
                  fontFamily: "'Roboto Slab', serif",
                  textDecoration: "underline"
                }} href="mailto:ishq2027@cutmap.ac.in">ishq2027@cutmap.ac.in</a>
              </p>
            </div>

            <div className="cmt-card-qr">
              <div className="cmt-qr-wrapper">
                <p
                className="submit-card-text"
                style={{
                  fontSize: "15px",
                  color: "#F8F8F5",
                  lineHeight: "1.8",
                  margin: "0 0 12px 0",
                  fontFamily: "'Roboto Slab', serif",
                }}
              >Scan to Submit</p>
                <div className="cmt-qr-frame">
                  <img
                    src="/assets/cmt_qr.png"
                    alt="CMT QR Code"
                    className="cmt-qr-img"
                  />
                </div>
                <p
                className="submit-card-text"
                style={{
                  fontSize: "14px",
                  color: "#F8F8F5",
                  lineHeight: "2.5",
                  margin: "0 0 12px 0",
                  fontFamily: "'Roboto Slab', serif",
                }}
              >Microsoft CMT Portal</p>
              </div>
            </div>
          </div>
        </section>

        {/* CMT Acknowledgment - Plain <p> tag without styling */}
        <p>
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </p>
        <br />

        {/* IEEE Policies */}
        <section className="paper-card policy-card">
          <h3 className="paper-card-title">IEEE Policies:</h3>
          <p>
            Papers are reviewed on the basis that they do not contain
            plagiarized material and have not been submitted to any other
            conference at the same time (double submission).
          </p>
        </section>

        {/* Plagiarism */}
        <section className="paper-card plagiarism-card">
          <h3 className="paper-card-title">
            <FaExclamationTriangle className="paper-small-icon" />
            Plagiarism:
          </h3>
          <p>
            Learn how to avoid plagiarism. IEEE defines plagiarism as the use of
            another's ideas, processes, results, or words without explicitly
            acknowledging the original author and source. Plagiarism in any form
            is unacceptable and is considered a serious breach of professional
            conduct, with potentially severe ethical and legal consequences
            (IEEE Publication Services and Products Board Operations Manual,
            Section 8.2.1.B.7).
          </p>
          <p>
            Follow proper citation practices noted above to avoid plagiarism.
            All papers are checked for plagiarism before review process and the{" "}
            <strong>
              plagiarism should not exceed 30% (Including references.)
            </strong>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PaperSubmission;
