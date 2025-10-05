import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";
import ImpactCards from "./components/impact/ImpactCards";
import EducationCources from "./pages/education/EducationCources";
import JobsSection from "./components/jobs/JobsSection";
import CountdownTimer from "./components/countdown/CountdownTimer"; 
import HomeTab from "./components/home/HomeTab"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* Additional routes */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
        <Route path="/jobs" element={<JobsSection />} /> {/* ✅ Added this */}
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />
        <Route path="/education" element={<EducationCources />} />
      </Routes>
    </Router>
  );
}

export default App;
