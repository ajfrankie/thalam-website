// src/pages/home/index.jsx
import React from "react";

import HomeTab from "./Hometab";          // Hometab.jsx
import CountdownTimer from "./countdownTimer"; // ✅ Case match
import Testimonial from "./Testimonial";  // Testimonial.jsx
import Navbar from "../../components/navbar";
import HomeSection from "./homeSection";
import ImpactCards from "../../components/impact/impactCards";
import Footer from "../../components/Footer/Footer"; // Footer.jsx

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <HomeTab />
      <ImpactCards />
      <CountdownTimer /> {/* ✅ Correct import */}
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
