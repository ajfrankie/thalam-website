import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//  Main Pages
import Home from "./pages/home";
import testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/OurServices";
import History from "./pages/history/History";


import testimonial from "./pages/home/testimonial";//
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";
import ImpactCards from "./components/impact/ImpactCards";
import EducationCources from "./pages/education/EducationCources";
import JobsSection from "./components/jobs/JobsSection";
import CountdownTimer from "./components/countdown/CountdownTimer"; 
import HomeTab from "./components/home/HomeTab"; 
import testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";


//  Sub Components
import CountdownTimer from "./pages/home/CountdownTimer";
import HomeTab from "./pages/home/HomeTab";
import ImpactCards from "./components/impact/ImpactCards";
import EducationCoures from "./pages/education/EducationCoures";
import Navbar from "./components/navbar/Navbar"; //  Correct path

function App() {
  return (
    <Router>
      <Navbar /> {/* optional if navbar shown always */}
      <Routes>

        {/* Home */}


        
        <Route path="/" element={<Home />} />

        {/* Additional routes */}
        <Route path="/testimonial" element={<testimonial />} />
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />
        <Route path="/jobs" element={<JobsSection />} /> {/* ✅ Added this */}
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />
        <Route path="/education" element={<EducationCources />} />

        {/* Home routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Other Pages */}
        <Route path="/testimonial" element={<testimonial />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/history" element={<History />} />


        {/* Sub Components */}
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/hometab" element={<HomeTab />} />

        {/* Additional Pages */}
        <Route path="/impactcards" element={<ImpactCards />} />
        <Route path="/educationcoures" element={<EducationCoures />} />

        {/* Redirect Example */}
        <Route path="*" element={<Navigate to="/" replace />} />

        {/* Redirect + Other Components */}
        
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
          <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<Home />} />


      </Routes>
    </Router>
  );
}

export default App;
