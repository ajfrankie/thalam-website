// NextEvent.jsx
import React from "react";
import "./NextEvent.css";
import logo from "../../assets/images/logo.png"; // correct path

const NextEvent = () => {
  return (
    <div className="next-event-section">
    

      <div className="countdown-frame">
        {/* Left content area */}
        <div className="countdown-left">
          <p className="event-subtext">Next Event</p>
        </div>

    
        <div className="countdown-decoration">
          <img src={logo} alt="Decoration" className="decoration-img" />
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
