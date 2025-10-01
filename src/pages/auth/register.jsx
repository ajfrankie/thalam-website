import React from "react";
import "./register.css";
import ThalamLogo from "../../assets/thalamlogo.png"; 

function Register() {
  return (
    <div className="register-section">
      
      <div className="register-header">
  <h1>
    <span>Register</span>
    <span>With Us</span>
  </h1>
  <img
    src={ThalamLogo}
    alt="Thalam Logo"
    className="register-logo"
  />
</div>


      
      <div className="register-box">
        <div className="register-card">
         
          <div className="form-side">
            <div className="card-header">
              <h3>GET IN TOUCH</h3>
              <p>
                Reach out with inquiries about tickets, partnerships, or event
                details.
              </p>
            </div>

            <form className="register-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" required />
              <input type="text" placeholder="Organization / Company" />
              <input type="text" placeholder="Designation" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Country" />
              <textarea placeholder="Message" rows="4" required></textarea>
              /* Card inside */
              <div className="btn-container">
                <button type="submit" className="register-btn">
                  REGISTER
                </button>
              </div>
            </form>
          </div>

       
          <div className="image-side">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
