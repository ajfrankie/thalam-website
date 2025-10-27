import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeSection.css';
import logo from "../../assets/images/logo.png"; 

const Homesection = () => {
  return (
    <div className="home-section d-flex align-items-center justify-content-center">
      {/* 🔹 Main Bootstrap Container */}
      <div className="container py-5 px-3 rounded-4 shadow-lg bg-dark">
        <div className="row align-items-center">

          {/* 🔸 Left Side (Text Content) */}
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3">Thalam <br />Organization</h1>
            <p className="lead mb-4">
              Founded in 2018, Thalam Organization has been creating opportunities for
              youth in Trincomalee to learn, lead, and contribute to their communities.
              Through projects, volunteer programs, and partnerships, we aim to inspire
              the next generation of leaders.
            </p>
            <button className="btn btn-gradient btn-lg">Read more</button>
          </div>

          {/* 🔸 Right Side (Image Box inside responsive container) */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div className="thalam-logo-container">
              <div className="thalam-logo-box text-center">
                <img src={logo} alt="Thalam Logo" className="img-fluid" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Homesection;
