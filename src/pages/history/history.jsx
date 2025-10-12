import React from "react";
import "./history.css";
import historyimage1 from "../../assets/images/history1.jpg";
import logo from "../../assets/images/logo.png"; 

export default function History() {
  return (
    <div className="history-main-container">
      <div className="history-title-box">
        <h2 className="history-title">History</h2>

        //this is paragraph 

        
        <div className="jobs-header-logo">
          <img src={logo} alt="Thalam Logo" className="logo-image" />
        </div>
      </div>

      <div className="history-content-box first-box">
        <div className="history-text-section">
          <p>
            Founded in 2018, Thalam Organization has been creating opportunities
            for youth in Trincomalee to learn, lead, and contribute to their
            communities. Through projects, volunteer programs, and partnerships,
            we aim to inspire the next generation of leaders.
          </p>
          <p>
            Founded in 2018, Thalam Organization has been creating opportunities
            for youth in Trincomalee to learn, lead, and contribute to their
            communities. Through projects, volunteer programs, and partnerships,
            we aim to inspire the next generation of leaders.
          </p>
          <p>
            Founded in 2018, Thalam Organization has been creating opportunities
            for youth in Trincomalee to learn, lead, and contribute to their
            communities. Through projects, volunteer programs, and partnerships,
            we aim to inspire the next generation of leaders.
          </p>
        </div>
        <div className="history-image-box">
          <img src={historyimage1} alt="History of Thalam Organization" className="history-image" />
        </div>
      </div>

      <div className="history-content-box second-box">
        <div className="history-image-box">
          <img src={historyimage1} alt="History of Thalam Organization" className="history-image" />
        </div>
        
        <div className="history-text-section">
          
          <p>
            Founded in 2020, we expanded our programs to include environmental initiatives,
            focusing on sustainability and community gardens. Our goal is to educate
            and empower local youth to make a positive impact.
          </p>
          <p>
            Founded in 2018, Thalam Organization has been creating opportunities
            for youth in Trincomalee to learn, lead, and contribute to their
            communities. Through projects, volunteer programs, and partnerships,
            we aim to inspire the next generation of leaders.
          </p>
          <p>
            Founded in 2018, Thalam Organization has been creating opportunities
            for youth in Trincomalee to learn, lead, and contribute to their
            communities. Through projects, volunteer programs, and partnerships,
            we aim to inspire the next generation of leaders.
          </p>
        </div>
      </div>
    </div>
  );
}
