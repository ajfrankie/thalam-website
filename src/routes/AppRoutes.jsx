import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";
import Register from "../pages/auth"; 
import Contact from "../pages/contact-us/contact";
import Job from "../pages/Job";
import Education from "../pages/Education";
import History from "../pages/history";
import ImpactCards from "../components/impact/ImpactCards";

import "@fortawesome/fontawesome-free/css/all.min.css";

function AppRoutes() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default AppRoutes;
