import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/home";

import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourServices" element={<OurServices />} />
      </Routes>
    </Router>
  );
}

export default App;
