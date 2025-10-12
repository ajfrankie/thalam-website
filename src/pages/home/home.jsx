

import React from 'react';
import './home.css';
import ThalamLogo from "../../assets/thalamlogo.png"; // லோகோ image import

const Home = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="content-wrapper">

          {/* Left side text */}

       

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
              <img src={ThalamLogo} alt="Thalam Logo" />
              <span className="tamil-text"></span>
              <span className="english-text"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
