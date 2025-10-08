import React from "react";
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

export default AppRoutes;

/* 🔹 Added Syne font */