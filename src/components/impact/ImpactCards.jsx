import React from 'react';
import "./ImpactCards.css";
import a1Image from "../../assets/a1.jpg";
import a2Image from "../../assets/a2.jpg";
import a4Image from "../../assets/a4.jpg";
import a5Image from "../../assets/a5.jpg";

const ImpactCards = () => {
  return (
    <div className="impact-container">
      <h2>
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
          <img src={a1Image} alt="Custom image for 2nd box" />
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
          <img src={a2Image} alt="Custom image for 4th box" />
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
          <img src={a4Image} alt="Custom image for 5th box" />
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
          <img src={a5Image} alt="Custom image for 6th box" />
        </div>
      </div>
    </div>
  );
};

export default ImpactCards;
