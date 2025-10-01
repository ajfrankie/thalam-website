import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";      
import JobsSection from "./pages/job/JobSection";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/home/home";
function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/jobs" element={<JobsSection />} />
        <Route path="/footer" element={<Footer />} />
=======
        
          <Route path="navbar" element={<Navbar />} />
          <Route path="home" element={<Home />} />
        
       
        <Route path="/Footer" element={<Footer />} />
>>>>>>> 8ed53d9 (update:update homne)
      </Routes>
    </Router>
  );
}

export default App;
