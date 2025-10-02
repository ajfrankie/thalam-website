// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CountdownTimer from "./pages/home/countdownTimer";
import AppRouters from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRouters />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/countdownTimer" element={<CountdownTimer />} />
      </Routes>
    </Router>
  );
}

export default App;
