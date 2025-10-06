import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";

import Testimonial from "./pages/home/testimonial";//
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";
import ImpactCards from "./components/impact/ImpactCards";
import EducationCources from "./pages/education/EducationCources";
import JobsSection from "./components/jobs/JobsSection";
import CountdownTimer from "./components/countdown/CountdownTimer"; 
import HomeTab from "./components/home/HomeTab"; 
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";

import ImpactCards from "./components/impact/ImpactCards";
import EducationCoures from "./pages/education/EducationCoures";
import Navbar from "./components/navbar/";
import Home from "./pages/home/home/";

function App() {
  return (
    <Router>
      <Routes>

        
        <Route path="/" element={<Home />} />

        {/* Additional routes */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
        <Route path="/jobs" element={<JobsSection />} /> {/* ✅ Added this */}
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />
        <Route path="/education" element={<EducationCources />} />

        {/* Home routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/history" element={<History />} />

        {/* Redirect + Other Components */}
        
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
          <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;