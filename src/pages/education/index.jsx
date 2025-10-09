// src/pages/home/index.jsx
import React from "react";

import Navbar from "../../components/navbar";
import EducationCoures from "./EducationCoures";
import Footer from "../../components/Footer/Footer"; 

const Education = () => {
  return (
    <div className="home-page">
      <Navbar/>
      <EducationCoures />
      
      <Footer />
    </div>
  );
};


export default Education;