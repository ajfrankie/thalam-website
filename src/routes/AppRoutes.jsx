import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../pages/contact-us/contact";
import Hometab from "../pages/home/Hometab";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        
        <Route path="/hometab" element={<Hometab />} />

      
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
