import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EducationCoures from "../pages/education/EducationCoures";
import ImpactCards from "../components/impact/ImpactCards";// code
import AppRoutes from "../routes/AppRoutes"; // separate file import

function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/impact" replace />} />
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />
      </Routes>

      {/* Include extra  */}
      <AppRoutes />
    </Router>
  );
}

export default App;
