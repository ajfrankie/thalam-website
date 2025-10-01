import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hometab from "./pages/home/Hometab"; // ✅ fixed path
import Contact from './pages/contact-us/contact-us.jsx'; // ✅ from folder structure

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: "/" → redirect to /hometab */}
        <Route path="/" element={<Navigate to="/hometab" />} />

        {/* Routes */}
        <Route path="/hometab" element={<Hometab />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
