import React from "react";
import { Link } from "react-router-dom";
import navbar1 from "../assets/images/thalam-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  px-4">
      {/* Logo */}
      <Link className="navbar-brand d-flex align-items-center" to="/Home">
        <div className="logo-img">
          <img src={navbar1} alt="logo" />
        </div>
        <span className="logo-text ms-2">THALAM</span>
      </Link>

      
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

      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link btn-outline-home" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">History</Link>
          </li>
          <li className="nav-item">
            <Link to="/event" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/job" className="nav-link">Job</Link>
          </li>
          <li className="nav-item">
            <Link to="/Education" className="nav-link">Education</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link btn-danger btn-outline" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
