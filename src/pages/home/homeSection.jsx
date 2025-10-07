

import React from 'react';
import './homeSection .css';
import logo from "../../assets/images/logo.png"; // லோகோ image import

const Homesection = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="content-wrapper">
       
          <div className="text-content">
            <h1>Thalam <br />Organization</h1>
            <p>
              Founded in 2018, Thalam Organization has been creating opportunities for
              youth in Trincomalee to learn, lead, and contribute to their communities.
              Through projects, volunteer programs, and partnerships, we aim to inspire
              the next generation of leaders.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          {/* Right side image + texts */}
          <div className="image-content">
            <div className="thalam-logo-box">
              <img src={logo} alt=" logo" />
              <span className="tamil-text"></span>
              <span className="english-text"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesection;
