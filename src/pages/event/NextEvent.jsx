import React from "react";
import "./NextEvent.css";
import logo from "../../assets/images/logo.png";

const NextEvent = () => {
  return (
    <div className="next-event-main-container">
      <div className="next-event-title-box">
        {/* Left side: heading */}
        <h1 className="next-event-title">Next Event</h1>

        {/* Right side: logo image */}
        <div className="next-event-header-logo">
          <img src={logo} alt="Thalam Logo" className="next-event-logo-image" />
        </div>
      </div>
    </div>
  );
};

export default NextEvent;