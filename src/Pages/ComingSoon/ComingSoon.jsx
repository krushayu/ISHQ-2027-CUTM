import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./ComingSoon.css";
import { FaHome, FaArrowLeft, FaEnvelope, FaCheck } from "react-icons/fa";

const CONFERENCE_START = "2027-08-10T00:00:00";

/**
 * Milestone track rendered as the page infographic.
 *
 * NOTE: these dates are also duplicated in Home.jsx, ImpDates.jsx and
 * Registraton.jsx. Worth consolidating into one shared module.
 */
const MILESTONES = [
  { label: "Submission Opens", short: "30 Dec 2026", date: new Date("2026-12-30") },
  { label: "Submission Closes", short: "30 Apr 2027", date: new Date("2027-04-30") },
  { label: "Acceptance Notice", short: "30 May 2027", date: new Date("2027-05-30") },
  { label: "Registration Opens", short: "01 Jun 2027", date: new Date("2027-06-01") },
  { label: "Camera-Ready Due", short: "30 Jun 2027", date: new Date("2027-06-30") },
  { label: "Conference", short: "10 Aug 2027", date: new Date("2027-08-10") },
];

/** Single ticking clock - both the countdown and the milestone track read it,
 *  so nothing calls Date.now() during render. */
const useNow = (intervalMs = 1000) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
};

const breakdown = (ms) =>
  ms <= 0
    ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
    : {
        days: Math.floor(ms / 86400000),
        hours: Math.floor((ms % 86400000) / 3600000),
        minutes: Math.floor((ms % 3600000) / 60000),
        seconds: Math.floor((ms % 60000) / 1000),
      };

/* Decorative hexagon trio - two complete, one still being built */
const HexArt = () => (
  <svg
    className="cs-art"
    viewBox="0 0 240 120"
    role="img"
    aria-label="Two completed stages and a third still in progress"
  >
    <line className="cs-art-link" x1="62" y1="60" x2="98" y2="60" />
    <line className="cs-art-link cs-art-link--pending" x1="142" y1="60" x2="178" y2="60" />

    <polygon className="cs-art-hex cs-art-hex--done"
      points="62,60 51,79.05 29,79.05 18,60 29,40.95 51,40.95" />
    <polygon className="cs-art-hex cs-art-hex--done"
      points="142,60 131,79.05 109,79.05 98,60 109,40.95 131,40.95" />
    <polygon className="cs-art-hex cs-art-hex--building"
      points="222,60 211,79.05 189,79.05 178,60 189,40.95 211,40.95" />

    <circle className="cs-art-dot" cx="40" cy="60" r="4" />
    <circle className="cs-art-dot" cx="120" cy="60" r="4" />
    <circle className="cs-art-pulse" cx="200" cy="60" r="6" />
  </svg>
);

const ComingSoon = ({ title, note }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const now = useNow();

  const item = title || searchParams.get("item") || "This Page";

  const countdown = breakdown(new Date(CONFERENCE_START).getTime() - now);
  const first = MILESTONES[0].date.getTime();
  const last = MILESTONES[MILESTONES.length - 1].date.getTime();
  const progress = Math.min(100, Math.max(0, ((now - first) / (last - first)) * 100));
  const nextIndex = MILESTONES.findIndex((m) => m.date.getTime() > now);

  return (
    <div className="cs-wrapper">
      <div className="cs-hero">
        <span className="cs-hero-eyebrow">ISHQ 2027</span>
        <h1 className="cs-hero-title">{item}</h1>
      </div>

      <div className="cs-container">
        <div className="cs-card">
          <HexArt />

          <span className="cs-badge">
            <span className="cs-badge-dot"></span>
            Coming Soon
          </span>

          <h2 className="cs-title">We&rsquo;re still putting this together</h2>

          <p className="cs-text">
            {note ||
              `${item} has not been published yet. The organising committee is
               finalising the details and this page will be updated shortly.`}
          </p>

          {/* Countdown */}
          <div className="cs-countdown" aria-label="Time remaining until the conference">
            {[
              ["Days", countdown.days],
              ["Hours", countdown.hours],
              ["Minutes", countdown.minutes],
              ["Seconds", countdown.seconds],
            ].map(([label, value]) => (
              <div className="cs-count-box" key={label}>
                <span className="cs-count-num">{String(value).padStart(2, "0")}</span>
                <span className="cs-count-label">{label}</span>
              </div>
            ))}
          </div>
          <p className="cs-countdown-cap">until ISHQ 2027 opens &mdash; 10 August 2027</p>

          {/* Milestone track */}
          <div className="cs-track-section">
            <h3 className="cs-track-heading">Where we are</h3>
            <div className="cs-track">
              <div className="cs-track-rail">
                <div className="cs-track-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <ol className="cs-track-steps">
                {MILESTONES.map((m, i) => {
                  const done = m.date.getTime() <= now;
                  const isNext = i === nextIndex;
                  const state = done ? "done" : isNext ? "next" : "upcoming";
                  return (
                    <li className={`cs-step cs-step--${state}`} key={m.label}>
                      <span className="cs-step-node">
                        {done ? <FaCheck /> : <span className="cs-step-ring"></span>}
                      </span>
                      <span className="cs-step-label">{m.label}</span>
                      <span className="cs-step-date">{m.short}</span>
                      {isNext && <span className="cs-step-tag">Next up</span>}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="cs-actions">
            <button
              type="button"
              className="cs-btn cs-btn-secondary"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft className="cs-btn-icon" />
              Go Back
            </button>
            <Link to="/" className="cs-btn cs-btn-primary">
              <FaHome className="cs-btn-icon" />
              Back to Home
            </Link>
          </div>

          <p className="cs-help">
            Need this information sooner?{" "}
            <a href="mailto:ishq2027@cutmap.ac.in">
              <FaEnvelope className="cs-help-icon" />
              ishq2027@cutmap.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
