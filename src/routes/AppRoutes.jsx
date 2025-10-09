import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Import only the needed components
import Job from "../pages/job";

import EducationCoures from "../pages/education/EducationCoures";
import ImpactCards from "../components/impact/ImpactCards";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Redirect root "/" to /impact */}
        <Route path="/" element={<Navigate to="/impact" replace />} />

        {/* Main routes */}
        <Route path="/job" element={<Job />} />
        
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
