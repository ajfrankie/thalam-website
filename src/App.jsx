import React from "react";
 contact-us
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/contact-us/contact";
import Hometab from "./pages/home/Hometab"; // ✅ updated path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/hometab" element={<Hometab />} />
      </Routes>
    </Router>


import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
   
      <AppRoutes />
   
 main
  )
};

export default App;
 