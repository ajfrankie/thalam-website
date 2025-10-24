import React from "react";

import Navbar from "../../components/navbar";
import NextEvent from "../../pages/event/NextEvent";
import Timer from "../../pages/event/timer";
import Attend from "../../pages/event/attend"; 

import Footer from "../../components/Footer/Footer";

const Event = () => {
  return (
    <div className="event-page">
      <Navbar />
      <NextEvent />
      <Timer />
      <Attend/>
      <Footer />
    </div>
  );
};

export default Event;