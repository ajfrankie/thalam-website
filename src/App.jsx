



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Home from "./pages/home";
import AppRouters from "./routes/AppRoutes"; 
import CountdownTimer from "./pages/home/countdownTimer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countdownTimer" element={<CountdownTimer />} />
        
      </Routes>
    </Router>
  );
}

export default App;