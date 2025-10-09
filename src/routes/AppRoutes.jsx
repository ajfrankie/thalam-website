import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EducationCoures from "./pages/education/EducationCoures";
import ImpactCards from "./components/impact/ImpactCards";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/impact" replace />} />//code
        
        {/* Routes */}
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


import Home from "../pages/Home";       
import Education from "../pages/Education";
import History from "../pages/history";








function AppRoutes() {
  return (
    <Router>
      <Routes>
       
        <Route path="/Home" element={<Home />} />
        <Route path="/Education" element={<Education />} />
         <Route path="/history" element={<History />} />
       
       
        
        


        

      </Routes>
    </Router>
  );
}


export default App;

export default AppRoutes;

/* 🔹 Added Syne font */

