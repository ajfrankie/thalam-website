import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//  Main Pages
import Home from "./pages/home";
import Testimonial from "./pages/home/Testimonial";
import OurServices from "./pages/history/OurServices";
import History from "./pages/history/History";

//  Sub Components
import CountdownTimer from "./pages/home/CountdownTimer";
import HomeTab from "./pages/home/HomeTab";
import ImpactCards from "./components/impact/ImpactCards";
import EducationCoures from "./pages/education/EducationCoures";
import Navbar from "./components/navbar/Navbar"; //  Correct path

function App() {
  return (
    <Router>
      <Navbar /> {/* optional if navbar shown always */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Other Pages */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />

        {/* Sub Components */}
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />

        {/* Additional Pages */}
        <Route path="/impactcards" element={<ImpactCards />} />
        <Route path="/educationcoures" element={<EducationCoures />} />

        {/* Redirect Example */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
