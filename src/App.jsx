 HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/home";

import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hometab from "./pages/home/Hometab"; // ✅ fixed path
import Contact from './pages/contact-us/contact-us.jsx';


function App() {
  return (
    <Router>
      <Routes>
HEAD
        <Route path="/" element={<Home />} />
        
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/history" element={<History />} />

        {/* Default route: "/" → redirect to /hometab */}
        <Route path="/" element={<Navigate to="/hometab" />} />

        {/* Routes */}
        <Route path="/hometab" element={<Hometab />} />
        <Route path="/contact-us" element={<Contact />} />
81d6a80 (update: hometab)
      </Routes>
    </Router>
  );
}

export default App;
