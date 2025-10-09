import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";//code
import EducationCoures from "./pages/education/EducationCoures";//code
import ImpactCards from "./components/impact/ImpactCards";//code

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/education" replace />} />
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />
      </Routes>
    </Router>
  );
}

export default App;
