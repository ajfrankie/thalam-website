// src/pages/home/index.jsx
import React from "react";
import Navbar from "../../components/navbar";
import JobSection from "../../pages/job/JobSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <JobSection />
      <Footer />
    </main>
  );
};

export default Home;
