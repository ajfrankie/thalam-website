// AppRouters.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";


function AppRouters() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouters;
