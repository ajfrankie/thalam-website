import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Import only the needed components
import Job from "../pages/job";
import Event from "../pages/Event";
import Education from "../pages/Education";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Redirect root "/" to /impact */}
        <Route path="/Home" element={<Home />} />
        {/* Main routes */}
        <Route path="/job" element={<Job />} />
        
        <Route path="/education" element={<Education />} />
        <Route path="/Event" element={<Event />} />

     
      </Routes>

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

//Home index
import Home from "../pages/home";       
import Education from "../pages/Education";
import History from "../pages/history";
import Job from "../pages/Job";

function AppRoutes() {
  return (
    <Router>
      <Routes>
       
        <Route path="/Home" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/Job" element={<Job />} /> */}
        <Route path="/Job" element={<Job />} />
        
        </Routes>
    </Router>
  );
}

export default AppRoutes;
export default AppRoutes; 
