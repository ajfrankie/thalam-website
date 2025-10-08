import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";
import countdowntimer1image from "../../assets/images/countdownTimer1.png";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 12,
    hours: 5,
    minutes: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes } = prev;

        if (minutes > 0) {
          minutes -= 1;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours -= 1;
          } else {
            hours = 23;
            if (days > 0) {
              days -= 1;
            }
          }
        }

        return { days, hours, minutes };
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="next-event-section">
      <h2 className="next-event-heading">NEXT EVENT</h2>
      <div className="countdown-frame">
        <div className="background-image-container">
          
        </div>

        <p className="countdown-title">Early Bird Pricing Ends In:</p>
        <div className="countdown-time">
          <span>{String(time.days).padStart(2, "0")}</span>:
          <span>{String(time.hours).padStart(2, "0")}</span>:
          <span>{String(time.minutes).padStart(2, "0")}</span>
        </div>
        <div className="countdown-labels">
          <span>DAYS</span>
          <span>HOURS</span>
          <span>MINUTES</span>
        </div>

        {/* Decoration image on the right */}
        <div className="countdown-decoration">
          <img src={countdowntimer1image} alt="decoration" className="decoration-img" />
        </div>

        <button className="countdown-btn">More info.....</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
