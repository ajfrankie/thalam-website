import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<<<<<<< HEAD

import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";
=======
// Home will auto-load from pages/home/index.jsx
import Home from "./pages/home";  
>>>>>>> b1f6279adf01e7a4999cabb82d211531b40e856d

// sub components for direct routes
import Testimonial from "./pages/home/Testimonial";
import CountdownTimer from "./pages/home/CountdownTimer";
import HomeTab from "./pages/home/HomeTab";

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* Home page */}
        <Route path="/home" element={<Home />} />
=======
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />
>>>>>>> b1f6279adf01e7a4999cabb82d211531b40e856d

        {/* Direct routes if needed */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
      </Routes>
    </Router>
  );
}

export default App;
