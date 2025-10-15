import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "../pages/home";
import Register from "../pages/auth"; 
import Contact from "../pages/contact-us/contact";
import Job from "../pages/Job";
import Footer from "../components/Footer/Footer";


import Education from "../pages/Education";
import History from "../pages/history";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Import only the needed components

import ImpactCards from "../components/impact/ImpactCards";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/Job" element={<Job />} />
         <Route path= "/Footer" element={<Footer/>}/>
        

       
        <Route path="/Education" element={<Education />} />
        <Route path="/history" element={<History />} />
        
         
        
        


        

        {/* Redirect root "/" to /impact */}
        <Route path="/" element={<Navigate to="/impact" replace />} />

        {/* Main routes */}
        <Route path="/job" element={<Job />} />
        
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
