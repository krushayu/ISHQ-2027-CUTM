import React, { useState } from "react";
import "./Place.css";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaWikipediaW,
  FaClock,
  FaMap,
  FaInfoCircle,
} from "react-icons/fa";

const placesData = [
  {
    name: 'Ramanarayanam',
    description: 'A unique spiritual theme park inspired by the Ramayana, featuring magnificent architecture in the shape of a bow and arrow, beautiful gardens, sculptures, and meditation spaces.',
    distance: '22 KM',
    mapLink: 'https://www.google.com/maps?sca_esv=c05f2014a7a2071a&rlz=1C1CHBD_en-GBIN1117IN1117&biw=1536&bih=730&output=search&q=ramanarayanam&source=lnms&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VstEKsVDqPorK0Gahnm2no1YAFtlsByIZaJlK7yr6gI7hZaUci3sPkqKTo9rkt0mZPyo9WccpXQ5c3Pm_sXiIS4ZXAaaghBlkckgV0CuL06vfHQvcxHeVeFPXseaxU4zru5GgjznTnJ8ORfdlQq4Cw5opDD0l2yfL0E6gog9-3KbzH5nw&entry=mc&ved=1t:200715&ictx=111',
    wikipedia: 'https://en.wikipedia.org/wiki/Ramanarayanam',
    image: '/Palce_Visit/Ramanarayanam_temple.png',
    location: 'Vizianagaram, Andhra Pradesh'
  },
  {
    name: 'Sri Varaha Lakshmi Narasimha Swamy Temple (Simhachalam)',
    description: 'One of the most revered Narasimha temples in India, renowned for its rich history, ancient architecture, spiritual significance, and scenic hilltop setting.',
    distance: '48 KM',
    mapLink: 'https://www.google.com/maps/place/Sri+Varaha+Lakshmi+Narasimha+Swami+vari+devasthanam/@17.766639,83.2475455,17z/data=!3m1!4b1!4m6!3m5!1s0x3a39678adaf94731:0x6789f78c46d2ec2b!8m2!3d17.766639!4d83.2501204!16zL20vMDdkaGZw?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D',
    wikipedia: 'https://en.wikipedia.org/wiki/Simhachalam',
    image: '/Palce_Visit/Simhachalam_temple.png',
    location: 'Simhachalam, Visakhapatnam, Andhra Pradesh'
  },
  {
    name: 'Visakhapatnam Port',
    description: 'One of India\'s largest natural seaports and the largest port on the eastern coast, offering impressive harbor views, maritime activities, and coastal landscapes.',
    distance: '58 KM',
    mapLink: 'https://share.google/ghEBffM1c3zxOiKP8',
    wikipedia: 'https://en.wikipedia.org/wiki/Visakhapatnam_Port',
    image: '/Palce_Visit/Visakhapatnam_Port.png',
    location: 'Visakhapatnam, Andhra Pradesh'
  },
  {
    name: 'RK Beach',
    description: 'A popular beach destination in Visakhapatnam known for its scenic coastline, sunrise views, beachside attractions, and relaxing atmosphere.',
    distance: '60 KM',
    mapLink: 'https://www.google.com/maps/place/Ramakrishna+Beach/@17.7138365,83.3040347,14z/data=!3m1!4b1!4m6!3m5!1s0x3a39436f113dca6d:0xd76a1de2271dff26!8m2!3d17.7141618!4d83.3236579!16s%2Fg%2F11f3w6pt9p?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D',
    wikipedia: 'https://en.wikipedia.org/wiki/RK_Beach',
    image: '/Palce_Visit/RK_Beach.png',
    location: 'Visakhapatnam, Andhra Pradesh'
  },
  {
    name: 'Palkonda Beach',
    description: 'A serene and less-crowded beach near Vizianagaram, offering pristine shores, peaceful surroundings, and beautiful sunset views. Perfect for a quiet getaway.',
    distance: '35 KM',
    mapLink: '#',
    wikipedia: '#',
    image: '/Place_Visit/palkonda_beach.jpg',
    location: 'Palkonda, Andhra Pradesh'
  },
  {
    name: 'Rishikonda Beach',
    description: 'A picturesque beach near Visakhapatnam, known for its golden sands, clear waters, and lush green hills surrounding the coastline. Popular for water sports and relaxation.',
    distance: '55 KM',
    mapLink: '#',
    wikipedia: '#',
    image: '/Place_Visit/rishikonda_beach.jpg',
    location: 'Visakhapatnam, Andhra Pradesh'
  },
  {
    name: 'Kailashgiri',
    description: 'A scenic hilltop park in Visakhapatnam offering panoramic views of the city, coastline, and surrounding hills. Features a beautiful Shiva temple, toy train, and lush gardens.',
    distance: '62 KM',
    mapLink: '#',
    wikipedia: '#',
    image: '/Place_Visit/kailashgiri.jpg',
    location: 'Visakhapatnam, Andhra Pradesh'
  },
  {
    name: 'Araku Valley (Coffee Gardens)',
    description: 'A stunning hill station in the Eastern Ghats, famous for its lush coffee plantations, scenic valleys, waterfalls, and tribal culture. A must-visit for nature lovers.',
    distance: '120 KM',
    mapLink: '#',
    wikipedia: '#',
    image: '/Place_Visit/araku_valley.jpg',
    location: 'Araku Valley, Andhra Pradesh'
  }
];

const PlaceImage = ({ src, name }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className="place-image-wrapper">
      {imgLoading && !imgError && (
        <div className="place-image-loader">
          <div className="place-loader-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={name}
        className="place-image"
        onError={() => {
          setImgError(true);
          setImgLoading(false);
        }}
        onLoad={() => setImgLoading(false)}
        style={{ display: imgLoading ? 'none' : 'block' }}
      />
      {imgError && (
        <div className="place-image-error">
          <FaMapMarkerAlt className="error-icon" />
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
};

const Places = () => {
  return (
    <div className="places-wrapper">
      <div className="places-hero">
        <h1 className="places-hero-title">Place of Visit</h1>
        <p className="places-hero-subtitle">ISHQ-2027 Conference — Explore Nearby Attractions</p>
      </div>

      <div className="places-container">
        <div className="places-intro">
          <p>
            Discover the beauty and heritage around Centurion University, Vizianagaram Campus. 
            From spiritual landmarks to scenic beaches, explore these must-visit destinations 
            during your stay for the ISHQ 2027 conference.
          </p>
        </div>

        <div className="places-grid">
          {placesData.map((place, index) => (
            <div className="place-card" key={index}>
              <PlaceImage 
                src={place.image} 
                name={place.name} 
              />
              
              <div className="place-card-content">
                <div className="place-card-header">
                  <div className="place-card-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="place-card-title-group">
                    <h3 className="place-card-title">{place.name}</h3>
                    <span className="place-card-distance">
                      <FaClock className="distance-icon" />
                      {place.distance} from Campus
                    </span>
                  </div>
                </div>

                <div className="place-card-body">
                  <p className="place-card-description">{place.description}</p>
                  <div className="place-card-location">
                    <FaMap className="location-icon" />
                    <span>{place.location}</span>
                  </div>
                </div>

                <div className="place-card-footer">
                  <a
                    href={place.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="place-btn place-btn-map"
                  >
                    <FaExternalLinkAlt />
                    View on Map
                  </a>
                  <a
                    href={place.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="place-btn place-btn-wiki"
                  >
                    <FaWikipediaW />
                    Wikipedia
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="places-note">
          <FaInfoCircle className="note-icon" />
          <p>
            <strong>Note:</strong> All distances mentioned are approximate from 
            Centurion University, Vizianagaram Campus. Plan your visits accordingly 
            during the conference days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Places;