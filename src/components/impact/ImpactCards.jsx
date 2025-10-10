import React from 'react';
import "./ImpactCards.css";

import impactcards1 from "../../assets/images/impactcards1.jpg";
import impactcards2 from "../../assets/images/impactcards2.jpg";
import impactcards3 from "../../assets/images/impactcards3.jpg";//image
import impactcards4 from "../../assets/images/impactcards4.jpg";//image

//image





const ImpactCards = () => {
  return (
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
        </div>

        {/* 4th box (image) */}
        <div className="impact-card image">
          <img src={impactcards2} alt="Custom image for 4th box" />
        </div>

        {/* 5th box (text) */}
        <div className="impact-card text">
          <div className="details">
            <h3 className="text-heading">Resource Persons</h3>
            <h3 className="details-number">15+</h3>
            <p>Experts, trainers, and mentors guiding our activities.</p>
          </div>
        </div>

        {/* 6th box (image) */}
        <div className="impact-card image">
          <img src={impactcards3} alt="Custom image for 5th box" />
        </div>

        {/* 7th box (text) */}
        <div className="impact-card text">
          <div className="details">
            <h3 className="text-heading">Youth Reached</h3>
            <h3 className="details-number">750+</h3>
            <p>Young people empowered through workshops and training.</p>
          </div>
        </div>

        {/* 8th box (image) */}
        <div className="impact-card image">
          <img src={impactcards4} alt="Custom image for 6th box" />
        </div>
      </div>
    </div>
  );
};

export default ImpactCards;
