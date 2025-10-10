import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "../pages/home";
import Register from "../pages/auth"; 
import Contact from "../pages/contact-us/contact";
import Job from "../pages/Job";
import Footer from "../components/Footer/Footer";


import Education from "../pages/Education";
import History from "../pages/history";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/Job" element={<Job />} />
         <Route path= "/Footer" element={<Footer/>}/>
        
=======
       
        <Route path="/Home" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/history" element={<History />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/register" element={<Register />} />
        
         
        
        


        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
