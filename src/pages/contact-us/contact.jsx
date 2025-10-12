import React from "react";
import "./contact.css";
import logoimage from "../../assets/images/logo.png"; 

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-container">
      
      <header className="contact-header">
        <h1>Contact Us</h1>
        <img src={logoimage} alt="Thalam Logo" className="contact-logo" />
      </header>

      
      <div className="contact-content">
        
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
              <p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{" "}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{" "}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </p>
            </div>
          </div>
        </div>

        
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

      {/* ---------------- Map Section ---------------- */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.2345024389!2d81.19040810274905!3d8.570622145888497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe548f6fcd264b%3A0xa77bc36a3d0c79a0!2sDockyard%20Rd%2C%20Trincomalee%2031000%2C%20Sri%20Lanka!5e0!3m2!1sen!2sin!4v1696852349101!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Thalam — Trincomalee Dockyard Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
