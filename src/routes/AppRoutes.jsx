import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Register from "../pages/auth/register";//code
function AppRoutes() {
  return (
    <Router>
      <Routes>

        
        
          
          <Route path="/register" element={<Register />} />
       
       




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


// Import only the needed components
import JobSection from "../pages/job/JobSection";
import Footer from "../components/footer/Footer";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/job" replace />} />

        {/* Job & Footer routes */}
        <Route path="/job" element={<JobSection />} />
        <Route path="/footer" element={<Footer />} />

import EducationCoures from "../pages/education/EducationCoures";
import ImpactCards from "../components/impact/ImpactCards";// code
import AppRoutes from "../routes/AppRoutes"; // separate file import


// இந்தப் பாதையில் மாற்றம் செய்யப்பட்டுள்ளது: "./" -> "../"
import Contact from "../pages/contact-us/contact"; 
import Hometab from "../pages/home/Hometab";
function App() {
  return (
    <Router>
      <Routes>
        
         
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/hometab" element={<Hometab />} />

       
        <Route path="/" element={<Navigate to="/impact" replace />} />
        <Route path="/education" element={<EducationCoures />} />
        <Route path="/impact" element={<ImpactCards />} />


      </Routes>
    </Router>
  );
}


export default AppRoutes;


export default App;


export default AppRoutes;

export default App;



