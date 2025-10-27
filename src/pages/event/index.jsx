import React from "react";

import Navbar from "../../components/navbar";
import NextEvent from "./NextEvent";
import Timer from "./timer";
import Attend from "./attend"; 

import Footer from "../../components/Footer/Footer";

const Event = () => {
  return (
    <div className="home-page">
      <Navbar />
      <NextEvent />
      <Timer />
      <Attend/>
      <Footer />
    </div>
  );
};

export default Event;