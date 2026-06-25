import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="notfound-wrapper">
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Slab:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="notfound-container">
        {/* Animated SVG */}
        <div className="notfound-svg-wrapper">
          <svg
            width="500"
            height="150"
            viewBox="0 0 500 150"
            fill="none"
            className="notfound-svg"
          >
            <style>
              {`
                @keyframes drawText {
                  0% {
                    stroke-dashoffset: 800;
                    fill-opacity: 0;
                    opacity: 0;
                  }
                  30% {
                    opacity: 1;
                  }
                  100% {
                    stroke-dashoffset: 0;
                    fill-opacity: 1;
                    opacity: 1;
                  }
                }

                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }

                @keyframes pulseGlow {
                  0%, 100% { opacity: 0.3; }
                  50% { opacity: 0.8; }
                }

                .cursive-text {
                  stroke-dasharray: 800;
                  stroke-dashoffset: 800;
                  animation: drawText 2.5s ease forwards;
                }

                .float-animation {
                  animation: float 3s ease-in-out infinite;
                }

                .glow-animation {
                  animation: pulseGlow 2s ease-in-out infinite;
                }
              `}
            </style>

            {/* Background glow */}
            <ellipse
              cx="250"
              cy="75"
              rx="200"
              ry="50"
              fill="rgba(71, 110, 158, 0.05)"
              className="glow-animation"
            />

            {/* 404 Number */}
            <text
              x="250"
              y="55"
              dominantBaseline="middle"
              textAnchor="middle"
              className="cursive-text"
              fontSize="90"
              fontFamily="'Pacifico', cursive"
              fill="#0B1E38"
              stroke="#476E9E"
              strokeWidth="1.5"
            >
              404
            </text>

            {/* Subtitle */}
            <text
              x="250"
              y="110"
              dominantBaseline="middle"
              textAnchor="middle"
              className="cursive-text"
              fontSize="30"
              fontFamily="'Pacifico', cursive"
              fill="#476E9E"
              stroke="#476E9E"
              strokeWidth="0.8"
            >
              Page Not Found
            </text>
          </svg>
        </div>

        {/* Message */}
        <div className="notfound-message">
          <h2>Oops! Something went wrong</h2>
          <p>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
        </div>

        {/* Buttons */}
        <div className="notfound-buttons">
          <button
            className="notfound-btn notfound-btn-primary"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="notfound-btn-icon" />
            Go Back
          </button>
          <button
            className="notfound-btn notfound-btn-secondary"
            onClick={() => navigate('/')}
          >
            <FaHome className="notfound-btn-icon" />
            Home Page
          </button>
        </div>

        {/* Auto-redirect info */}
        <p className="notfound-redirect">
          Redirecting to home page in a few seconds...
        </p>
      </div>

      <style jsx>{`
        .notfound-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #F5F0E8 0%, #FFFFFF 50%, #F5F0E8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .notfound-wrapper::before {
          content: 'ISHQ - 2027';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 200px;
          font-weight: 800;
          color: rgba(11, 30, 56, 0.03);
          letter-spacing: 20px;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          font-family: 'Roboto Slab', serif;
        }

        .notfound-container {
          max-width: 600px;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 50px 40px;
          text-align: center;
          box-shadow: 
            0 20px 60px rgba(11, 30, 56, 0.1),
            0 0 0 1px rgba(71, 110, 158, 0.1);
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .notfound-svg-wrapper {
          margin-bottom: 20px;
        }

        .notfound-svg {
          width: 100%;
          max-width: 500px;
          height: auto;
        }

        .notfound-message {
          margin-bottom: 30px;
        }

        .notfound-message h2 {
          font-size: 26px;
          font-weight: 700;
          color: #0B1E38;
          margin: 0 0 12px 0;
          font-family: 'Roboto Slab', serif;
        }

        .notfound-message p {
          font-size: 16px;
          color: #1A3B5C;
          line-height: 1.8;
          margin: 0;
          font-family: 'Roboto Slab', serif;
        }

        .notfound-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .notfound-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 30px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Roboto Slab', serif;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .notfound-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(11, 30, 56, 0.15);
        }

        .notfound-btn:active {
          transform: translateY(-1px);
        }

        .notfound-btn-primary {
          background: #0B1E38;
          color: #F5F0E8;
        }

        .notfound-btn-primary:hover {
          background: #1A3B5C;
          box-shadow: 0 8px 25px rgba(11, 30, 56, 0.25);
        }

        .notfound-btn-secondary {
          background: #F5F0E8;
          color: #0B1E38;
          border: 2px solid #0B1E38;
        }

        .notfound-btn-secondary:hover {
          background: #E8E0D5;
          box-shadow: 0 8px 25px rgba(11, 30, 56, 0.15);
        }

        .notfound-btn-icon {
          font-size: 18px;
        }

        .notfound-redirect {
          font-size: 14px;
          color: #476E9E;
          margin: 0;
          font-family: 'Roboto Slab', serif;
          opacity: 0.8;
          animation: pulseText 2s ease-in-out infinite;
        }

        @keyframes pulseText {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .notfound-container {
            padding: 35px 25px;
          }

          .notfound-message h2 {
            font-size: 22px;
          }

          .notfound-message p {
            font-size: 15px;
          }

          .notfound-btn {
            padding: 12px 24px;
            font-size: 14px;
          }

          .notfound-wrapper::before {
            font-size: 120px;
            letter-spacing: 12px;
          }
        }

        @media (max-width: 576px) {
          .notfound-container {
            padding: 28px 20px;
            border-radius: 20px;
          }

          .notfound-message h2 {
            font-size: 19px;
          }

          .notfound-message p {
            font-size: 14px;
          }

          .notfound-buttons {
            flex-direction: column;
            gap: 12px;
          }

          .notfound-btn {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
          }

          .notfound-wrapper::before {
            font-size: 80px;
            letter-spacing: 8px;
          }

          .notfound-redirect {
            font-size: 12px;
          }
        }

        @media (max-width: 400px) {
          .notfound-container {
            padding: 20px 16px;
          }

          .notfound-message h2 {
            font-size: 17px;
          }

          .notfound-btn {
            font-size: 13px;
            padding: 12px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;