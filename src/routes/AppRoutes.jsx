import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Home (index.jsx) matthum import pannunga
import Home from "../pages/Home";       
import Education from "../pages/Education";
import Event from "../pages/event";




function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* "/" path la Home component render aagum */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Event" element={<Event />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;