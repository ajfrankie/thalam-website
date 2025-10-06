import React from "react";
import "./FooterRight.css";

function FooterRight() {
  return (
    <div className="footer-right">
      <h3 className="footer-title">STAY UPDATED</h3>
      <p className="footer-subtitle">
        Subscribe for event updates &amp; exclusive content.
      </p>

      <form className="subscribe-form">
        <input
          type="email"
          placeholder="Email"
          className="subscribe-input"
        />
        <button type="submit" className="subscribe-button"> 
          Stay updated
        </button>
      </form>

      <h4 className="follow-title">FOLLOW US</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  );
}

export default FooterRight;