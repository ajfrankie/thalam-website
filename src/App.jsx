import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Footer from "./components/Footer";      
import JobsSection from "./pages/job/JobSection";
import "./App.css";
=======




import Footer from "./components/Footer";
import Navbar from "./components/navbar";
>>>>>>> 6bfa837103c634524c8ca6506fdb9fa4ac1170b2
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/home/home";
import Register from "./pages/auth/register";
function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/jobs" element={<JobsSection />} />
        <Route path="/footer" element={<Footer />} />
=======
=======
>>>>>>> 6bfa837103c634524c8ca6506fdb9fa4ac1170b2
        
          <Route path="navbar" element={<Navbar />} />
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
       
        <Route path="/Footer" element={<Footer />} />
<<<<<<< HEAD
>>>>>>> 8ed53d9 (update:update homne)
=======
>>>>>>> 6bfa837103c634524c8ca6506fdb9fa4ac1170b2
      </Routes>
    </Router>
  );
}

export default App;
