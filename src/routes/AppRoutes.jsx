import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Home (index.jsx) matthum import pannunga
import Home from "../pages/Home";       
import Education from "../pages/Education";
import History from "../pages/history";
import Job from "../pages/job";

function AppRoutes() {
  return (
    <Router>
      <Routes>
       
        <Route path="/Home" element={<Home />} />
        <Route path="/Education" element={<Education />} />
         <Route path="/history" element={<History />} />
         <Route path="/Job" element={<Job />} />
        

        
         
        
        


    </Routes>
    </Router>
  );
}

export default AppRoutes;