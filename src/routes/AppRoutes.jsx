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

import EducationCoures from "../pages/education/EducationCoures";
import ImpactCards from "../components/impact/ImpactCards";// code
import AppRoutes from "../routes/AppRoutes"; // separate file import

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/impact" replace />} />
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />

      </Routes>

 
      <AppRoutes />
    </Router>
  );
}


export default AppRoutes;

export default App;

