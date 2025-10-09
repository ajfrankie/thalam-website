import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// இந்தப் பாதையில் மாற்றம் செய்யப்பட்டுள்ளது: "./" -> "../"
import Contact from "../pages/contact-us/contact"; 
import Hometab from "../pages/home/Hometab";
function App() {
  return (
    <Router>
      <Routes>
        
         
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/hometab" element={<Hometab />} />
      </Routes>
    </Router>
  );
}

export default App;