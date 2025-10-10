// src/pages/home/index.jsx
import React from "react";

import Navbar from "../../components/navbar";
import NextEvent from "./NextEvent";
import CountdownTimer from "../../pages/home/CountdownTimer";
import Footer from "../../components/Footer/Footer"; 


const Event = () => {
  return (
    <div className="home-page">
      <Navbar/>
      <NextEvent />
      <CountdownTimer />
      <Footer />
    </div>
  );
};


export default Event;