import React from "react";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";   





=======
import { NavLink } from "react-router-dom";
import navbar1 from "../assets/images/thalam-logo.png";
>>>>>>> Stashed changes
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4">
      {/* Logo */}
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <div className="logo-img">
          <img src={navbar1} alt="logo" />
        </div>
        <span className="logo-text ms-2">THALAM</span>
      </NavLink>

<<<<<<< Updated upstream
      
      <ul className="nav-links">
        <li>
          <Link to="/Home" className="nav-btn">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
        <li>
          <Link to="/history" className="nav-link">History</Link>
        </li>
        <li>
          <Link to="/event" className="nav-link">Events</Link>
        </li>
        <li>
          <Link to="/register" className="nav-btn red">Register</Link>
        </li>
      </ul>
=======
      {/* Toggle button (for mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" end className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/history" className="nav-link">History</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/event" className="nav-link">Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/job" className="nav-link">Jobs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/education" className="nav-link">Education</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link btn-danger btn-outline">Register</NavLink>
          </li>
        </ul>
        {/* Moving background indicator */}
        <span className="nav-indicator"></span>
      </div>
>>>>>>> Stashed changes
    </nav>
  );
}

export default Navbar;
