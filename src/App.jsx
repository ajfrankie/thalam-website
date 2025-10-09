import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";//code
import EducationCoures from "./pages/education/EducationCoures";//code


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component name should start with uppercase
import Job from "./pages/job";


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EducationCoures from "./pages/education/EducationCoures";

import ImpactCards from "./components/impact/ImpactCards";//code


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Job />} />
      </Routes>
    </Router>
        <Route path="/" element={<Navigate to="/education" replace />} />
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />
      </Routes>
    </Router>


import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
   
      <AppRoutes />
   


  );
}

export default App;
 