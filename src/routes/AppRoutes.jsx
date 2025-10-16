
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "../pages/contact-us"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import Home from "../pages/home";
import Register from "../pages/auth"; 
import Contact from "../pages/contact-us/contact";
import Job from "../pages/Job";
import Footer from "../components/Footer/Footer";
import History from "../pages/History";


function AppRoutes() {
  return (
    <Router>
      <Routes>


        <Route path="/contact-us" element={<ContactUs />} />

        {/* Main routes */}


        <Route path="/" element={<Home />} />
      
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job" element={<Job />} />
        <Route path="/education" element={<Education />} />
        <Route path="/history" element={<History />} />
        <Route path="/impact" element={<ImpactCards />} />

        {/* Redirect unknown routes to /impact */}
        <Route path="*" element={<Navigate to="/impact" replace />} />

         <Route path="/Job" element={<Job />} />
         <Route path= "/Footer" element={<Footer/>}/>
         <Route path="/History" element={<History/>}/>
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
