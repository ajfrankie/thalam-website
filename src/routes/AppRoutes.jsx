import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Home (index.jsx) matthum import pannunga
import Home from "../pages/home";       








function AppRoutes() {
  return (
    <Router>
      <Routes>
       
        <Route path="/Home" element={<Home />} />
        
        
         
        
        


        
      </Routes>
    </Router>
  );
}

export default AppRoutes;