import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "../pages/home";
import Register from "../pages/auth"; 







import Footer from "../components/Footer/Footer";
import History from "../pages/History";
import Education from "../pages/education";
import Job from "../pages/job";
import Event from "../pages/event";


function AppRoutes() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
      
        <Route path="/register" element={<Register />} />
        
        
         <Route path= "/Footer" element={<Footer/>}/>
         <Route path="/History" element={<History/>}/>
          <Route path="/job" element={<Job />} />
          <Route path="/education" element={<Education />} />
          <Route path="/event" element={<Event/>} />

        
      </Routes>
    </Router>
  );
}

export default AppRoutes;