import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 🔹 Import only the components you need
import JobSection from "../pages/job/JobSection";
import Footer from "../components/footer/Footer";
import EducationCoures from "../pages/education/EducationCoures";
import ImpactCards from "../components/impact/ImpactCards";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/job" element={<JobSection />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />

        {/* Redirect root "/" to /impact */}
        <Route path="/" element={<Navigate to="/impact" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;