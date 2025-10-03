import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/home";
import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";

import ImpactCards from "./components/impact/ImpactCards";
import EducationCoures from "./pages/education/EducationCoures";

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes merged here from both sides, without duplicates */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/history" element={<History />} />

        {/* Redirect + Other Components */}
        <Route path="/" element={<Navigate to="/ImpactCards" />} /> {/* Default redirect */}
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import all necessary components 
import Home from "./pages/home/Home";
import Testimonial from "./pages/home/testimonial/Testimonial";
import OurServices from "./pages/history/ourservices/OurServices";

// Import components for new routes (If these components exist in your project)
// Note: If you know the correct paths for ImpactCards and EducationCourses, use them instead of the comments.
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