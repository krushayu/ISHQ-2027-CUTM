import React, { useState } from "react";
import "./Scope.css";
import {
  FaSignal,
  FaNetworkWired,
  FaBolt,
  FaMicrochip,
  FaIndustry,
  FaFlask,
  FaAtom,
  FaSeedling,
} from "react-icons/fa";

// SDG images mapping for each track
const trackSDGImages = {
  0: [ // Track 1 - Artificial Intelligence and Intelligent Systems
    { src: "/assets/sdg/track1-1.png", name: "SDG 1", alt: "track1-1" },
    { src: "/assets/sdg/track1-2.png", name: "SDG 2", alt: "track1-2" },
    { src: "/assets/sdg/track1-3.png", name: "SDG 3", alt: "track1-3" },
    { src: "/assets/sdg/track1-4.png", name: "SDG 4", alt: "track1-4" },
  ],
  1: [ // Track 2 - Communication Systems and Next-Generation Networks
    { src: "/assets/sdg/track2-1.png", name: "SDG 5", alt: "track2-1" },
    { src: "/assets/sdg/track2-2.png", name: "SDG 6", alt: "track2-2" },
    { src: "/assets/sdg/track2-3.png", name: "SDG 7", alt: "track2-3" },
    { src: "/assets/sdg/track2-4.png", name: "SDG 8", alt: "track2-4" },
  ],
  2: [ // Track 3 - Communication Hardware and Embedded Technologies
    { src: "/assets/sdg/track3-1.png", name: "SDG 9", alt: "track3-1" },
    { src: "/assets/sdg/track3-2.png", name: "SDG 10", alt: "track3-2" },
    { src: "/assets/sdg/track3-3.png", name: "SDG 11", alt: "track3-3" },
    { src: "/assets/sdg/track3-4.png", name: "SDG 12", alt: "track3-4" },
    { src: "/assets/sdg/track3-5.png", name: "SDG 13", alt: "track3-5" },
  ],
  3: [ // Track 4 - Sustainable Energy and Green Technologies
    { src: "/assets/sdg/track4-1.png", name: "SDG 14", alt: "track4-1" },
    { src: "/assets/sdg/track4-2.png", name: "SDG 15", alt: "track4-2" },
    { src: "/assets/sdg/track4-3.png", name: "SDG 16", alt: "track4-3" },
    { src: "/assets/sdg/track4-4.png", name: "SDG 17", alt: "track4-4" },
    { src: "/assets/sdg/track4-5.png", name: "SDG 18", alt: "track4-5" },
    { src: "/assets/sdg/track4-6.png", name: "SDG 19", alt: "track4-6" },
  ],
  4: [ // Track 5 - Quantum Computing and Emerging Technologies
    { src: "/assets/sdg/track5-1.png", name: "SDG 20", alt: "track5-1" },
    { src: "/assets/sdg/track5-2.png", name: "SDG 21", alt: "track5-2" },
    { src: "/assets/sdg/track5-3.png", name: "SDG 22", alt: "track5-3" },
    { src: "/assets/sdg/track5-4.png", name: "SDG 23", alt: "track5-4" },
    { src: "/assets/sdg/track5-5.png", name: "SDG 24", alt: "track5-5" },
  ],
  5: [ // Track 6 - Cybersecurity, Blockchain and Digital Trust
    { src: "/assets/sdg/track6-1.png", name: "SDG 25", alt: "track6-1" },
    { src: "/assets/sdg/track6-2.png", name: "SDG 26", alt: "track6-2" },
    { src: "/assets/sdg/track6-3.png", name: "SDG 27", alt: "track6-3" },
    { src: "/assets/sdg/track6-4.png", name: "SDG 28", alt: "track6-4" },
    { src: "/assets/sdg/track6-5.png", name: "SDG 29", alt: "track6-5" },
  ],
  6: [ // Track 7 - Robotics, Automation and Smart Applications
    { src: "/assets/sdg/track7-1.png", name: "SDG 30", alt: "track7-1" },
    { src: "/assets/sdg/track7-2.png", name: "SDG 31", alt: "track7-2" },
    { src: "/assets/sdg/track7-3.png", name: "SDG 32", alt: "track7-3" },
  ],
  7: [ // Track 8 - Advanced Computing and Digital Transformation
    { src: "/assets/sdg/track8-1.png", name: "SDG 33", alt: "track8-1" },
    { src: "/assets/sdg/track8-2.png", name: "SDG 34", alt: "track8-2" },
    { src: "/assets/sdg/track8-3.png", name: "SDG 35", alt: "track8-3" },
    { src: "/assets/sdg/track8-4.png", name: "SDG 36", alt: "track8-4" },
    { src: "/assets/sdg/track8-5.png", name: "SDG 37", alt: "track8-5" },
    { src: "/assets/sdg/track8-6.png", name: "SDG 38", alt: "track8-6" },
    { src: "/assets/sdg/track8-7.png", name: "SDG 39", alt: "track8-7" },
  ],
};

// SDG Image Component with Error Handling
const SDGImage = ({ src, alt, name }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className="sdg-card">
      {imgLoading && !imgError && (
        <div className="sdg-loading">
          <span className="sdg-loader"></span>
          <span className="sdg-loading-text">Loading...</span>
        </div>
      )}
      {!imgError ? (
        <img
          src={src}
          alt={alt || name}
          className="sdg-img"
          loading="lazy"
          onError={() => {
            setImgError(true);
            setImgLoading(false);
          }}
          onLoad={() => setImgLoading(false)}
          style={{ display: imgLoading ? 'none' : 'block' }}
        />
      ) : (
        <div className="sdg-error">
          <span className="sdg-error-icon">📄</span>
          <span className="sdg-error-text">SDG Image</span>
          <span className="sdg-error-sub">Coming Soon</span>
        </div>
      )}
    </div>
  );
};

const tracks = [
  {
    icon: <FaSignal />,
    title: "Artificial Intelligence and Intelligent Systems",
    color: "#476E9E",
    topics: [
      "Machine Learning and Deep Learning",
      "Computer Vision and NLP",
      "Explainable and Responsible AI",
      "AI for Healthcare, Agriculture, and Education",
      "Intelligent Automation and Robotics",
      "Data Analytics and Predictive Systems",
    ],
  },
  {
    icon: <FaNetworkWired />,
    title: "Communication Systems and Next-Generation Networks",
    color: "#A93122",
    topics: [
      "5G/6G Communication Technologies",
      "IoT and Wireless Sensor Networks",
      "Optical and Satellite Communication",
      "Edge and Cloud Networking",
      "Software Defined Networks",
      "Secure and Energy-Efficient Communication",
    ],
  },
  {
    icon: <FaMicrochip />,
    title: "Communication Hardware and Embedded Technologies",
    color: "#1A3B5C",
    topics: [
      "Embedded Systems and IoT Hardware",
      "FPGA, VLSI, and SoC Design",
      "RF, Microwave, and Antenna Systems",
      "Smart Sensors and MEMS",
      "Low-Power Electronics",
      "Hardware Security and Reliability",
    ],
  },
  {
    icon: <FaBolt />,
    title: "Sustainable Energy and Green Technologies",
    color: "#D4A017",
    topics: [
      "Renewable Energy Systems",
      "Smart Grid and Microgrid Technologies",
      "Electric Vehicles and Battery Systems",
      "Green Communication and Green Computing",
      "Energy Efficient Devices and Systems",
      "Environmental Monitoring Technologies",
    ],
  },
  {
    icon: <FaAtom />,
    title: "Quantum Computing and Emerging Technologies",
    color: "#6c5ce7",
    topics: [
      "Quantum Computing and Algorithms",
      "Quantum Communication and Cryptography",
      "Quantum Machine Learning",
      "Quantum Hardware and Devices",
      "Hybrid Classical–Quantum Systems",
      "Future Computing Technologies",
    ],
  },
  {
    icon: <FaFlask />,
    title: "Cybersecurity, Blockchain and Digital Trust",
    color: "#00897b",
    topics: [
      "Cybersecurity and Network Security",
      "Blockchain and Distributed Systems",
      "Secure IoT Architectures",
      "Privacy and Trust Management",
      "Digital Forensics and Threat Analysis",
      "Authentication and Access Control",
    ],
  },
  {
    icon: <FaIndustry />,
    title: "Robotics, Automation and Smart Applications",
    color: "#8e44ad",
    topics: [
      "Industrial Automation and Industry 4.0",
      "Autonomous Systems and Drones",
      "Intelligent Control Systems",
      "Smart Healthcare and Biomedical Systems",
      "Smart Agriculture and Smart Cities",
      "Human–Machine Interaction",
    ],
  },
  {
    icon: <FaSeedling />,
    title: "Advanced Computing and Digital Transformation",
    color: "#2ecc71",
    topics: [
      "Cloud, Edge, and High-Performance Computing",
      "Digital Twin and Virtual Systems",
      "AR/VR and Metaverse Applications",
      "Computational Intelligence",
      "Intelligent Software Systems",
      "Digital Transformation and Smart Infrastructure",
    ],
  },
];

const Scope = () => {
  const [active, setActive] = useState(0);
  const currentSDGs = trackSDGImages[active] || [];

  return (
    <div className="scope-wrapper">
      <div className="scope-hero">
        <h1>Scope of the Conference</h1>
        <p>ISHQ 2027 — Major Technical Tracks</p>
      </div>

      <div className="scope-content">
        <div className="scope-intro">
          <p>
            ISHQ provides a technical forum for original research at the intersection of sustainable computing, intelligent systems, communication hardware, and quantum technology. The conference solicits contributions on energy-efficient and green computing architectures, machine learning and edge-AI systems, embedded and reconfigurable hardware, RF and photonic communication circuits, antenna and signal-processing design, quantum computing, quantum communication, and quantum sensing. It further covers enabling areas such as low-power VLSI, hardware security, networked and distributed systems, and quantum-classical hybrid algorithms. ISHQ emphasizes both theoretical foundations and experimental validation, encouraging work that demonstrates scalability, reliability, and real-world deployment. By integrating these domains, the conference aims to advance interdisciplinary research and foster industry-academia collaboration toward sustainable and intelligent next-generation technologies.
          </p>
        </div>
        
        <div>
          <h2 className="scope-subtitle">
            The conference invites original research contributions in the following tracks, but not limited to...
          </h2>
        </div>
        <br />

        <div className="scope-layout">
          {/* Left — Track List */}
          <div className="scope-tabs">
            {tracks.map((track, i) => (
              <button
                key={i}
                className={`scope-tab ${active === i ? "active" : ""}`}
                style={{ "--c": track.color }}
                onClick={() => setActive(i)}
              >
                <span className="scope-tab-icon">{track.icon}</span>
                <span className="scope-tab-label">{track.title}</span>
              </button>
            ))}
          </div>

          {/* Right — Topics Panel with SDGs */}
          <div className="scope-panel" style={{ "--c": tracks[active].color }}>
            <div className="scope-panel-header">
              <div className="scope-panel-icon">{tracks[active].icon}</div>
              <h2>{tracks[active].title}</h2>
            </div>

            {/* Topics and SDGs Side by Side */}
            <div className="scope-panel-content">
              {/* Left Side - Topics List */}
              <div className="scope-panel-topics">
                <ul className="scope-panel-list">
                  {tracks[active].topics.map((topic, i) => (
                    <li key={i}>
                      <span className="scope-panel-dot" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side - SDG Images */}
              <div className="scope-panel-sdgs">
                <div className="sdg-grid">
                  {currentSDGs.map((sdg, idx) => (
                    <SDGImage 
                      key={idx}
                      src={sdg.src} 
                      alt={sdg.alt}
                      name={sdg.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;