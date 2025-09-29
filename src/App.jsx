



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Home from "./pages/home";
import AppRouters from "./routes/AppRoutes"; 
import CountdownTimer from "./pages/home/countdownTimer";
import NextEvent from "./pages/event/NextEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ountdownTimer" element={<CountdownTimer />} />
        <Route path="/NextEvent" element={<NextEvent />} />
        
      </Routes>
    </Router>
  );
}

export default App;