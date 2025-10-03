import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/home";

import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/jobs" element={<JobsSection />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;