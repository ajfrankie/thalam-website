import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import JobsSection from "./pages/job/JobSection";
import EducationCources from "./pages/education/EducationCources";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsSection />} />
        <Route path="/education" element={<EducationCources />} />
      </Routes>

      {/* Footer always at bottom */}
      <Footer />
    </Router>
  );
}

export default App;
