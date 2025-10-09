import React from "react";
import "./contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <header className="contact-header"> 
        <h1>Contact Us</h1>
        <img src="/logo.png" alt="Thalam Logo" className="contact-logo" />
      </header>

      {/* Main Content */}
      <div className="contact-content">
        {/* Contact Info (Dark Box) */}
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

        {/* Contact Form (Gray Box) */}
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

      {/* Map Section - இப்போது Map தெரியும் (Chennai-ஐக் காட்டும்) */}
      <div className="contact-map">
        <iframe
          /* ✅ சென்னை மெரினா பீச்சைக் காட்டும் ஒரு சரியான முகவரி இங்கே இடப்பட்டுள்ளது */
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.98901804797!2d80.27404499999999!3d13.06456095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660a5e2f75fd%3A0xc3f8e5b61e05d0e2!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1727782245362!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Thalam Organization Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;