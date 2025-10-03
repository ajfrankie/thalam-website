import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

// Footer.jsx
import "./Footer.css";  



const Footer = () => {
  return (
    <footer className="footer">
      <FooterLeft />
      <FooterRight />
    </footer>
  );
};

export default Footer;

