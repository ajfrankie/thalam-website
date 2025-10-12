import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ImpactCards.css";
import impactcards1 from "../../assets/images/impactcards1.jpg";
import impactcards2 from "../../assets/images/impactcards2.jpg";
<<<<<<< Updated upstream
import impactcards3 from "../../assets/images/impactcards3.jpg";//image
import impactcards4 from "../../assets/images/impactcards4.jpg";//image


const ImpactCards = () => {
  return (
    <div className="impact-container">
      <h2>
        Creating Impact <br /> in Trincomalee
      </h2>

//image



=======
import impactcards3 from "../../assets/images/impactcards3.jpg";
import impactcards4 from "../../assets/images/impactcards4.jpg";
>>>>>>> Stashed changes

const cardsData = [
  {
    type: 'text',
    heading: 'Community Projects',
    number: '20+',
    desc: 'Programs and initiatives supporting youth and local communities.'
  },
  {
    type: 'image',
    src: impactcards1,
  },
  {
    type: 'text',
    heading: 'Volunteer Service',
    number: '100+',
    desc: 'Dedicated volunteers contributing time, skills, and passion.'
  },
  {
    type: 'image',
    src: impactcards2,
  },
  {
    type: 'text',
    heading: 'Resource Persons',
    number: '15+',
    desc: 'Experts, trainers, and mentors guiding our activities.'
  },
  {
    type: 'image',
    src: impactcards3,
  },
  {
    type: 'text',
    heading: 'Youth Reached',
    number: '750+',
    desc: 'Young people empowered through workshops and training.'
  },
  {
    type: 'image',
    src: impactcards4,
  },
];

const ImpactCards = () => {
  return (
<<<<<<< Updated upstream
    <div className="impact-container">


  <h2 className="impact-heading">
    Creating Impact <br /> in Trincomalee
  </h2>


      <div className="impact-grid">
        {/* 1st box (text) */}
        <div className="impact-card text">
          <div className="details">
            <h3 className="text-heading">Community Projects</h3>
            <h3 className="details-number">20+</h3>
            <p>Programs and initiatives supporting youth and local communities.</p>
          </div>
        </div>

        {/* 2nd box (image) */}
        <div className="impact-card image">
          <img src={impactcards1} alt="Custom image for 2nd box" />
        </div>

        {/* 3rd box (text) */}
        <div className="impact-card text">
          <div className="details">
            <h3 className="text-heading">Volunteer Service</h3>
            <h3 className="details-number">100+</h3>
            <p>Dedicated volunteers contributing time, skills, and passion.</p>
          </div>
=======
    <div className="impact-container container">
      <h2>
        Creating Impact <br /> in Trincomalee
      </h2>
      <div className="impact-grid row justify-content-center">
        {cardsData.map((card, idx) => (
          <div 
            key={idx} 
            className={`impact-card ${card.type === 'text' ? 'text' : 'image'} col-lg-3 col-md-6 col-sm-12 mb-4`}
          >
            {card.type === 'text' ? (
              <div className="details">
                <h3 className="text-heading">{card.heading}</h3>
                <h3 className="details-number">{card.number}</h3>
                <p>{card.desc}</p>
              </div>
            ) : (
              <img src={card.src} alt={`impact-${idx}`} />
            )}
          </div>
>>>>>>> Stashed changes
        ))}
      </div>
    </div>
  );
};

export default ImpactCards;