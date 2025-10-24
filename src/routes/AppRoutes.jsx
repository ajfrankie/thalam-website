import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "../pages/home";
import Register from "../pages/auth"; 
import Contact from "../pages/contact-us/contact";
import Job from "../pages/Job";
import Footer from "../components/Footer/Footer";
import Event from "../pages/event";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/Job" element={<Job />} />
         <Route path= "/Footer" element={<Footer/>}/>
         <Route path="/Event" element={<Event/>}/>
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
