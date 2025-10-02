import React from "react";
import { Routes, Route } from "react-router-dom";
import ImpactCards from "../home/ImpactCards"; // path must match exactly

function AppRouters() {
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<ImpactCards />} />

      {/* Example additional routes */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}
// AppRouters.jsx
export default AppRouters;