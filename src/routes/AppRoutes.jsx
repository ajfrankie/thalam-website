import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Import only the components you need
import JobSection from "../pages/job/JobSection";
import Footer from "../components/footer/Footer";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* ✅ Job Page Route */}
        <Route path="/job" element={<JobSection />} />

        {/* ✅ Footer Page Route */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
