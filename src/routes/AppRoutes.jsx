import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/contact-us/contact";
import Hometab from "./pages/home/Hometab";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Hometab />} /> 
        
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/hometab" element={<Hometab />} />
      </Routes>
    </Router>
  );
}

export default App;