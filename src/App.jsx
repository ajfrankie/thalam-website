import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";

import ImpactCards from "./components/impact/ImpactCards";
import EducationCoures from "./pages/education/EducationCoures";
import ContactUs from "./pages/home/contact-us";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";      
import Navbar from "./components/Navbar";      
import JobsSection from "./pages/job/JobSection";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import Home from "./pages/home/home";
import Register from "./pages/auth/register";
function App() {
  return (
    <Router>
      <Routes>

       
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/history" element={<History />} />
         <Route path="/contact-us" element={<contact-us />} />


        
      <Route path="/ImpactCards" element={<ImpactCards />} />
      <Route path="/EducationCoures" element={<EducationCoures />} />
      <Route path="/jobs" element={<JobsSection />} />
      <Route path="/footer" element={<Footer />} />
       
       <Route path="/jobs" element={<JobsSection />} />
       <Route path="/footer" element={<Footer />} />
       <Route path="navbar" element={<Navbar />} />
       <Route path="home" element={<Home />} />
       <Route path="/Footer" element={<Footer />} />
    
      </Routes>
    </Router>
  );
}

export default App; 