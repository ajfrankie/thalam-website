// src/pages/home/index.jsx
import React from "react";

// Correct imports (check filenames are exact)
import Navbar from "../../components/navbar";
import JobSection from "../../pages/job/JobSection";

import Footer from "../../components/Footer/Footer"; // Footer.jsx

const Job = () => {
  return (
    <>
      {/* Render all components in one page */}
      <Navbar/>
      <JobSection/>
      <Footer />


    </>
  );
};

export default Job;