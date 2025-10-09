import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";   





import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
   
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
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
          <Link to="/register" className="nav-btn red">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;