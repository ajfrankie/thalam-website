// src/pages/home/index.jsx
import React from "react";

import Navbar from "../../components/navbar";
import HistorySection from "./historySection";
import Footer from "../../components/Footer/Footer"; 
import OurServices from "./ourServices";

const History = () => {
  return (
    <div className="home-page">
      <Navbar/>
      <HistorySection />
      <OurServices/>
      
      <Footer />
    </div>
  );
};


export default History;