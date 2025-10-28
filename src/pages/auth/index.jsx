import React from "react";
import Navbar from "../../components/navbar";
import Register from "../../pages/auth/register";
import Footer from "../../components/Footer/Footer";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <Register />
      <Footer /> 
    </>
  );
};

export default RegisterPage;