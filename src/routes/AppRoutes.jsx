import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

//Home index

import HomeTab from "../pages/home/Hometab";

function AppRoutes() {
  return (
    <Router>
      <Routes>
       
        
        <Route path="/Hometab" element={<HomeTab />} />
        
        </Routes>
    </Router>
  );
}

export default AppRoutes;