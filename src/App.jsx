// App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRoutes"; // adjust the path if needed

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
