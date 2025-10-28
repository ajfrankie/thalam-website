<<<<<<< Updated upstream
// src/pages/home/index.jsx
import React from "react";

import HomeTab from "./HomeTab";
import CountdownTimer from "./CountdownTimer";
import Testimonial from "./Testimonial";


          


import Navbar from "../../components/navbar";
import HomeSection from "./homeSection";
import ImpactCards from "../../components/impact/impactCards";
import Footer from "../../components/Footer/Footer"; 


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

=======
// src/pages/home/index.jsx
import React from "react";




          


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

>>>>>>> Stashed changes
export default Home;