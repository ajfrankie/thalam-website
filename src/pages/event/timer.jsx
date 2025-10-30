import React, { useEffect, useState } from "react";
import "./timer.css";
import timerDecorationImage from "../../assets/images/countdownTimer1.png";

const Timer = () => {
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
    <div className="timer-section">


      <div className="timer-frame">
        {/* Timer display */}
        <div className="timer-time">
          <span>{String(time.days).padStart(2, "0")}</span>:
          <span>{String(time.hours).padStart(2, "0")}</span>:
          <span>{String(time.minutes).padStart(2, "0")}</span>
        </div>

        {/* Labels */}
        <div className="timer-labels">
          <span>DAYS</span>
          <span>HOURS</span>
          <span>MINUTES</span>
        </div>

        {/* Decoration image */}
        <div className="timer-decoration">
          <img
            src={timerDecorationImage}
            alt="decoration"
            className="timer-decoration-img"
          />
        </div>

        {/* Button */}
        <button className="timer-btn">More info.....</button>
      </div>
    </div>
  );
};

export default Timer;