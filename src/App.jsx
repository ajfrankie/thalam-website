import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* Direct routes if needed */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
      </Routes>
    </Router>
  );
}

export default App;
