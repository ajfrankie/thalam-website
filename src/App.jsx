// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Home from "./pages/home";
import AppRouters from "./routes/AppRoutes"; 
import CountdownTimer from "./pages/home/countdownTimer";

function App() {
  return (
    <BrowserRouter>
      {/* You can add a header, nav, or layout wrapper here */}
      <AppRouters />
      {/* You can add a footer here */}
    </BrowserRouter>
  );
}

export default App;