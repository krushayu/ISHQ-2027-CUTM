import React, { useEffect, useRef } from "react";
import { FaRegClock } from "react-icons/fa";
import "./Committee.css";
import committees from "./committeeData";

const Committee = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.05 },
    );
    pageRef.current
      ?.querySelectorAll(".ishq-comm-block, .ishq-comm-chip")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ishq-comm-container" ref={pageRef}>
      {/* Hero */}
      <div className="ishq-comm-hero">
        <div className="ishq-comm-hero-content">
          <h1 className="ishq-comm-title">ISHQ-Committee</h1>
          {/* <p className="ishq-comm-subtitle">ISHQ-2027 Conference — Organizing Committee</p> */}
        </div>
        <div className="ishq-comm-hero-shapes">
          <div className="ishq-comm-shape ishq-comm-shape-1"></div>
          <div className="ishq-comm-shape ishq-comm-shape-2"></div>
        </div>
      </div>

      {/* Blocks */}
      <div className="ishq-comm-body">
        {committees.map((c) => {
          // Extract name without prefix and designation
          const formatName = (fullName) => {
            // Remove prefixes like Prof. (Dr.), Dr., Mr., Ms., etc.
            const cleanName = fullName
              .replace(/^(Prof\.\s*\(Dr\.\)|Prof\.\s*Dr\.|Prof\.|Dr\.|Mr\.|Ms\.)\s*/i, "")
              .trim();
            
            // If there's a comma, split name and designation
            const commaIndex = cleanName.indexOf(",");
            if (commaIndex !== -1) {
              const name = cleanName.substring(0, commaIndex).trim();
              const desig = cleanName.substring(commaIndex + 1).trim();
              return { name, desig };
            }
            
            // Check for parentheses pattern like "(Chair)" or "(Co-Chair)"
            const parenMatch = cleanName.match(/\(([^)]+)\)/);
            if (parenMatch) {
              const name = cleanName.replace(/\s*\([^)]+\)/, "").trim();
              const desig = parenMatch[1];
              return { name, desig: `(${desig})` };
            }
            
            return { name: cleanName, desig: "" };
          };

          const getInitial = (name) => {
            // Get first letter of first word
            const words = name.split(" ");
            return words[0]?.charAt(0).toUpperCase() || "?";
          };

          return (
            <div className="ishq-comm-block" key={c.id}>
              {/* Section Title Bar */}
              <div
                className="ishq-comm-block-header"
                style={{ borderColor: c.color }}
              >
                <span
                  className="ishq-comm-block-dot"
                  style={{ background: c.color }}
                ></span>
                <h2 className="ishq-comm-block-title" style={{ color: c.color }}>
                  {c.title}
                </h2>
                <span
                  className="ishq-comm-block-count"
                  style={{
                    background: c.members.length ? c.color : "transparent",
                    color: c.members.length ? undefined : c.color,
                    border: c.members.length ? "none" : `1px dashed ${c.color}`,
                  }}
                >
                  {c.members.length || "—"}
                </span>
              </div>
              {/* Members - or a placeholder while the list is being finalised */}
              <div className="ishq-comm-chips">
                {c.members.length === 0 && (
                  <div className="ishq-comm-pending" style={{ "--chip-color": c.color }}>
                    <FaRegClock className="ishq-comm-pending-icon" />
                    <span>Members will be updated shortly</span>
                  </div>
                )}
                {c.members.map((m, i) => {
                  const { name, desig } = formatName(m);
                  return (
                    <div
                      className="ishq-comm-chip"
                      key={i}
                      style={{
                        animationDelay: `${i * 0.04}s`,
                        "--chip-color": c.color,
                        "--chip-bg": c.bg,
                      }}
                    >
                      <div
                        className="ishq-comm-chip-avatar"
                        style={{ background: c.color }}
                      >
                        {getInitial(name)}
                      </div>
                      <div className="ishq-comm-chip-info">
                        <p className="ishq-comm-chip-name">{name}</p>
                        {desig && <p className="ishq-comm-chip-desig">{desig}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Committee;