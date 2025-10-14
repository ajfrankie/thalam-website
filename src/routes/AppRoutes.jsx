import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "../pages/home";
import Register from "../pages/auth"; 
import Contact from "../pages/contact-us/contact";
import Job from "../pages/Job";
import Footer from "../components/Footer/Footer";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✅ இந்த line சேர்க்கணும் */}
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/Job" element={<Job />} />
         <Route path= "/Footer" element={<Footer/>}/>
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
