import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";

import ImpactCards from "./components/impact/ImpactCards";
import EducationCoures from "./pages/education/EducationCoures";
import Footer from "./components/Footer";
import CountdownTimer from "./pages/home/countdownTimer";

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

        {/* Redirect + Other Components */}
        
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
         <Route path="/Footer" element={<Footer />} />
          <Route path="/countdownTimer" element={<CountdownTimer />} />
      </Routes>
    </Router>
  );
}

export default App;