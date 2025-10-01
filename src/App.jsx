import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/home/home";
function App() {
  return (
    <Router>
      <Routes>
        
          <Route path="navbar" element={<Navbar />} />
          <Route path="home" element={<Home />} />
        
       
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;