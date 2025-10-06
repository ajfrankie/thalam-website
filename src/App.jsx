import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";

import ImpactCards from "./components/impact/ImpactCards";
import EducationCoures from "./pages/education/EducationCoures";
import Register from "./pages/auth/register";

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
          <Route path="/register" element={<Register />} />

        {/* Redirect + Other Components */}
        
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
      </Routes>
    </Router>
  );
}

export default App;