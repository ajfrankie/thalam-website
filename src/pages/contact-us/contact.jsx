import React from "react";
import "./contact.css";

const Contact = () => {
  // Optional: handle form submission to prevent page reload
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <img src="/logo.png" alt="Thalam Logo" className="contact-logo" />
      </div>

      {/* Main Content */}
      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>We’re Here To Connect And Assist You</h2>
          <p>
            Have questions about the summit? Need help with registration or travel?
            Our team is ready to assist you.
          </p>

          <div className="info-section">
            <div>
              <h3>Contact Number</h3>
              <p>+91 20 123 4567</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>info@thalam.com</p>
            </div>
            <div>
              <h3>Event Location</h3>
              <p>Horizon Convention Center, Amsterdam, Netherlands</p>
            </div>
            <div>
              <h3>Follow Us</h3>
              <p>Facebook | Instagram | Twitter</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <img src="/map.png" alt="Map" />
      </div>
    </div>
  );
};

export default Contact;
