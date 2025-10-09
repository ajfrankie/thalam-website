import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Correct import path
import Job from "../pages/job/Job";

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
