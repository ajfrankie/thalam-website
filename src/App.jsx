import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component name should start with uppercase
import Job from "./pages/job";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Job />} />
      </Routes>
    </Router>
  );
}

export default App;
