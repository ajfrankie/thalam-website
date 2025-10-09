import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import only the needed components
import JobSection from "../pages/job/JobSection";
import Footer from "../components/footer/Footer";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/job" replace />} />

        {/* Job & Footer routes */}
        <Route path="/job" element={<JobSection />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
