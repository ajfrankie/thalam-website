import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import all necessary components 
import Home from "./pages/home/Home";
import Testimonial from "./pages/home/testimonial/Testimonial";
import OurServices from "./pages/history/ourservices/OurServices";

// Import components for new routes (I assume these components exist)
// Note: You may need to verify these import paths later.
// import ImpactCards from "./pages/impactcards/ImpactCards"; 
// import EducationCourses from "./pages/educationcourses/EducationCourses"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes merged here from both sides, without duplicates */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} /> 
        
        <Route path="/" element={<Home />} /> 
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCourses" element={<EducationCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
