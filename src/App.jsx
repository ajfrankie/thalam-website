import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home will auto-load from pages/home/index.jsx
import Home from "./pages/home";  

// sub components for direct routes
import Testimonial from "./pages/home/Testimonial";
import CountdownTimer from "./pages/home/CountdownTimer";
import HomeTab from "./pages/home/HomeTab";

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
