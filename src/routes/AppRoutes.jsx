import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "../pages/contact-us"; 
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
