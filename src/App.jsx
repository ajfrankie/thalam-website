import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";

import ImpactCards from "./components/impact/ImpactCards";
import EducationCources from "./pages/education/EducationCources";
import JobsSection from "./components/jobs/JobsSection";   // <-- include this import

function App() {
  return (
    <Router>
      <Routes>
        {/* Home routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/history" element={<History />} />
        <Route path="/jobs" element={<JobsSection />} />   {/* <-- keep jobs route */}

        {/* Redirect + Other Components */}
        <Route path="/impact" element={<ImpactCards />} />
        <Route path="/education" element={<EducationCources />} />
        <Route path="*" element={<Navigate to="/impact" />} />
      </Routes>
    </Router>
  );
}

export default App;
