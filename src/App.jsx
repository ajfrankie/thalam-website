import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Main Pages
import Home from "./pages/home";
import testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/OurServices";
import History from "./pages/history/History";

// ✅ Sub Components for Direct Routes
import CountdownTimer from "./pages/home/CountdownTimer";
import HomeTab from "./pages/home/HomeTab";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Other Pages */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />

        {/* Direct Sub Routes */}
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
      </Routes>
    </Router>
  );
}

export default App;
