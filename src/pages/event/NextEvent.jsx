// NextEvent.jsx
import React from "react";
import "./NextEvent.css";
import DecorationImg from "../../assets/12.png"; // correct path

const NextEvent = () => {
  return (
    <div className="next-event-section">
      {/* Heading on the left */}
      <h1 className="next-event-heading">Next Event</h1>

      <div className="countdown-frame">
        {/* Left content area */}
        <div className="countdown-left">
          <p className="event-subtext">Next Event</p>
        </div>

        {/* Right decoration image */}
        <div className="countdown-decoration">
          <img src={DecorationImg} alt="Decoration" className="decoration-img" />
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
