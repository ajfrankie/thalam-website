import React from "react";
import { Link } from "react-router-dom";

import navbar1 from "../assets/images/thalam-logo.png";   





import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
   
      <div className="logo">
        <div className="logo-img">
        <img src={navbar1} alt="logo" />
        </div>
        <span className="logo-text">THALAM</span>
      </div>

      
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
          <Link to="/events" className="nav-link">Events</Link>
        </li>
         <li>
          <Link to="/job" className="nav-link">Job</Link>
        </li>
         <li>
          <Link to="/Education" className="nav-link">Education</Link>
        </li>
        <li>
          <Link to="/register" className="nav-btn red">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;