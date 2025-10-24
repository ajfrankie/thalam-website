import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "../pages/home";
import Register from "../pages/auth"; 


import Footer from "../components/Footer/Footer";
import History from "../pages/History";
import Education from "../pages/education";
import ContactUs from "../pages/contact-us";
import Job from "../pages/job";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/register" element={<Register />} />
        
        
         <Route path= "/Footer" element={<Footer/>}/>
         <Route path="/History" element={<History/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/job" element={<Job />} />
          <Route path="/education" element={<Education />} />

        
      </Routes>
    </Router>
  );
}

export default AppRoutes;