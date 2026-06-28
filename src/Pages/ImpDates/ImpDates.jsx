import React from 'react';
import './ImpDates.css';
import { FaRocket, FaFileAlt, FaBell, FaUserCheck, FaStar, FaCalendarCheck } from 'react-icons/fa';

const ImpDates = () => {
  const now = new Date();

  const dates = [
    {
      event: 'Paper Submission Open',
      date: '30 December 2026',
      desc: 'Portal opens for manuscript submissions across all tracks.',
      start: new Date('2026-12-30'), end: new Date('2026-12-30'),
      icon: <FaRocket />,
    },
    {
      event: 'Last Date for Paper Submission',
      date: '30 April 2027',
      desc: 'Final deadline to submit your full paper via Microsoft CMT.',
      start: new Date('2027-04-30'), end: new Date('2027-04-30'),
      icon: <FaFileAlt />,
    },
    {
      event: 'Notification of Acceptance',
      date: '30 May 2027',
      desc: 'Authors will be notified about acceptance or rejection.',
      start: new Date('2027-05-30'), end: new Date('2027-05-30'),
      icon: <FaBell />,
    },
    {
      event: 'Registration & Camera-Ready Start',
      date: '01 June 2027',
      desc: 'Start date for registration and camera-ready paper submission.',
      start: new Date('2027-06-01'), end: new Date('2027-06-01'),
      icon: <FaUserCheck />,
    },
    {
      event: 'Registration & Camera-Ready Deadline',
      date: '30 June 2027',
      desc: 'Last date for registration and camera-ready paper submission.',
      start: new Date('2027-06-30'), end: new Date('2027-06-30'),
      icon: <FaCalendarCheck />,
    },
    {
      event: 'Conference Dates of ISHQ 2027',
      date: '10 - 12 August 2027',
      desc: 'ISHQ 2027 at Centurion University of Technology and Management, Paralakhemundi, Odisha.',
      start: new Date('2027-08-10'), end: new Date('2027-08-12'),
      icon: <FaStar />,
    },
  ];

  const getStatus = (item) => {
    if (now > item.end)    return 'over';
    if (now >= item.start) return 'active';
    return 'upcoming';
  };

  const statusMeta = {
    active:   { label: 'Active Now', color: '#476E9E', glow: 'rgba(71,110,158,0.25)' },
    upcoming: { label: 'Upcoming',   color: '#A93122', glow: 'rgba(169,49,34,0.2)' },
    over:     { label: 'Closed',     color: '#1A3B5C', glow: 'rgba(26,59,92,0.15)' },
  };

  return (
    <div className="impd-wrapper">

      {/* Hero */}
      <div className="impd-hero">
        <h1>Important Dates</h1>
        <p>ISHQ 2027 — Key Deadlines & Milestones</p>
      </div>

      <div className="impd-container">

        {/* Roadmap */}
        <div className="impd-roadmap">

          {/* Center spine */}
          <div className="impd-spine"></div>

          {dates.map((item, index) => {
            const status = getStatus(item);
            const meta = statusMeta[status];
            const isLeft = index % 2 === 0;

            return (
              <div className={`impd-row ${isLeft ? 'left' : 'right'} ${status}`} key={index}>

                {/* Card */}
                <div className="impd-rm-card" style={{ '--glow': meta.glow, '--accent': meta.color }}>
                  <div className="impd-rm-card-inner">
                    <div className="impd-rm-top">
                      <span className="impd-rm-badge" style={{ background: meta.color }}>
                        {meta.label}
                      </span>
                      <span className="impd-rm-num">0{index + 1}</span>
                    </div>
                    <h3 className="impd-rm-event">{item.event}</h3>
                    <p className="impd-rm-desc">{item.desc}</p>
                    <div className="impd-rm-date" style={{ color: meta.color }}>
                      📅 {item.date}
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="impd-node" style={{ background: meta.color, boxShadow: `0 0 0 5px ${meta.glow}, 0 0 0 10px ${meta.glow}` }}>
                  <span className="impd-node-icon">{item.icon}</span>
                </div>

                {/* Spacer for opposite side */}
                <div className="impd-spacer"></div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="impd-note">
          <h3>⚠️ Note</h3>
          <ul>
            <li>Ensure to submit your papers and register before the deadlines to avoid any inconvenience.</li>
            <li>For any queries, contact <a href="mailto:ishq2027@cutmap.ac.in">ishq2027@cutmap.ac.in</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ImpDates;