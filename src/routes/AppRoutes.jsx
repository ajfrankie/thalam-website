// routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import CountdownTimer from "../pages/home/countdownTimer";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/countdownTimer" element={<CountdownTimer />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRouters;
