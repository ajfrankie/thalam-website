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
    <div className="container next-event-section">
      <h2 className="next-event-heading">Next Event</h2>
      <div className="countdown-frame position-relative overflow-hidden">
        <div className="background-image-container"></div>

        <div className="countdown-time d-flex justify-content-center align-items-center">
          <span>{String(time.days).padStart(2, "0")}</span>:
          <span>{String(time.hours).padStart(2, "0")}</span>:
          <span>{String(time.minutes).padStart(2, "0")}</span>
        </div>

        <div className="countdown-labels d-flex justify-content-center gap-5">
          <span>DAYS</span>
          <span>HOURS</span>
          <span>MINUTES</span>
        </div>

        <div className="countdown-decoration">
          <img src={countdowntimer1image} alt="decoration" className="decoration-img img-fluid" />
        </div>

        <button className="countdown-btn btn">More info.....</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
