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

        {/* Home page should ideally point to /ImpactCards, so using Navigate or ImpactCards here */}
        <Route path="/" element={<Navigate to="/ImpactCards" />} /> 
        
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
