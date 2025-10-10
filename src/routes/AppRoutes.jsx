import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Home (index.jsx) matthum import pannunga
import ImpactCards from "../components/impact/ImpactCards";








function AppRoutes() {
  return (
    <Router>
      <Routes>
       
        <Route path="/ImpactCards" element={<ImpactCards />} />
       
        
         
        
        


        
      </Routes>
    </Router>
  );
}

export default AppRoutes;