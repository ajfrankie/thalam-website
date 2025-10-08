import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";
import EducationCourses from "./pages/education/EducationCoures"; // matches file
import JobSection from "./pages/job/JobSection";                  // matches file

// Components
import ImpactCards from "./components/impact/ImpactCards";
import CountdownTimer from "./pages/home/CountdownTimer";        // correct path
import HomeTab from "./pages/home/HomeTab";                      // correct path
import Navbar from "./components/navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />
        <Route path="/impactcards" element={<ImpactCards />} />
        <Route path="/education" element={<EducationCourses />} />
        <Route path="/job" element={<JobSection />} />
        <Route path="/countdown" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </Router>
  );
}

export default App;
