import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ImpactCards from "./components/impact/ImpactCards";

import EducationCoures from "./pages/education/EducationCoures";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ImpactCards" />} />  {/* ✅ Default redirect */}
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
      </Routes>
    </Router>
  );
}

export default App;