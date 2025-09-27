import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

// Footer.jsx
import "./Footer.css";  // Only Footer-ku styles



const Footer = () => {
  return (
    <footer className="footer">
      <FooterLeft />
      <FooterRight />
    </footer>
  );
};

export default Footer;

