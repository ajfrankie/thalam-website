import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Main Pages
import Home from "./pages/home";
import Testimonial from "./pages/home/Testimonial";
import OurServices from "./pages/history/OurServices";
import History from "./pages/history/History";
import EducationCourses from "./pages/education/EducationCourses";
import Register from "./pages/auth/Register";

// Sub Components
import CountdownTimer from "./pages/home/CountdownTimer";
import HomeTab from "./pages/home/HomeTab";
import JobsSection from "./components/jobs/JobsSection";
import ImpactCards from "./components/impact/ImpactCards";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Other Pages */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />
        <Route path="/education" element={<EducationCourses />} />
        <Route path="/register" element={<Register />} />

        {/* Sub Components */}
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
        <Route path="/jobs" element={<JobsSection />} />
        <Route path="/impactcards" element={<ImpactCards />} />

        {/* Redirect fallback */}
        
      </Routes>
    </Router>
  );
}

export default App;
