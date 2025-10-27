import React from "react";
import Navbar from "../../components/navbar";
import Contact from "./contact";
import Footer from "../../components/Footer/Footer"; 

const ContactUs = () => { 
  return (
    <div className="home-page">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;