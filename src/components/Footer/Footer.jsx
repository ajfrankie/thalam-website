import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import "./Footer.css";  

const Footer = () => {
  return (
    <footer className="footer">
      {/* Container wrapper */}
      <div className="footer-container">
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  );
};

export default Footer;
