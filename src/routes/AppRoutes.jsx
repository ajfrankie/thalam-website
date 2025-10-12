import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

           // adjust if needed
import Register from "../pages/auth/register";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
