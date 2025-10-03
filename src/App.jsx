import React from "react";
HEAD
HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/home";

import Testimonial from "./pages/home/testimonial";
import OurServices from "./pages/history/ourServices";
import History from "./pages/history/history";


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ImpactCards from "./components/impact/ImpactCards";

import EducationCoures from "./pages/education/EducationCoures";
d315f69 (qwerty)

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ImpactCards from "./components/impact/ImpactCards";

import EducationCoures from "./pages/education/EducationCoures";
d315f69 (qwerty)

function App() {
  return (
    <Router>
      <Routes>
HEAD
        <Route path="/home" element={<Home />} />
HEAD
        
        
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/history" element={<History />} />

        <Route path="/" element={<Navigate to="/ImpactCards" />} />  {/*  Default redirect */}
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
d315f69 (qwerty)

        <Route path="/" element={<Navigate to="/ImpactCards" />} />  {/*  Default redirect */}
        <Route path="/ImpactCards" element={<ImpactCards />} />
        <Route path="/EducationCoures" element={<EducationCoures />} />
d315f69 (qwerty)
      </Routes>
    </Router>
  );
}

export default App;