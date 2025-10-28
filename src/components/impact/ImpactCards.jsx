import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ImpactCards.css";

import impactcards1 from "../../assets/images/impactcards1.jpg";
import impactcards2 from "../../assets/images/impactcards2.jpg";
import impactcards3 from "../../assets/images/impactcards3.jpg";
import impactcards4 from "../../assets/images/impactcards4.jpg";

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
    <div className="impact-container container">
      <h2>
        Creating Impact <br /> in Trincomalee
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
        ))}
      </div>
    </div>
  );
};

export default ImpactCards;