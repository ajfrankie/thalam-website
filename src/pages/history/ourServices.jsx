import React from "react";
//import "./OurServices.css";
import "./index.css";//update css path

const OurServices = () => {
  const services = [
    {
      id: "01",
      title: "CUTTING-EDGE INSIGHTS",
      description:
        "Gain firsthand knowledge from top AI experts and pioneers shaping the industry.",
    },
    {
      id: "02",
      title: "HANDS-ON LEARNING",
      description:
        "Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.",
    },
    {
      id: "03",
      title: "EXCLUSIVE NETWORKING",
      description:
        "Connect with AI leaders, investors, startups, and fellow professionals at curated networking events.",
    },
    {
      id: "04",
      title: "INNOVATION SHOWCASE",
      description:
        "Explore groundbreaking AI solutions, from emerging startups to tech giants redefining the future.",
    },
  ];
/*  */
  return (
    <section className="our-services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-number">{service.id}</span>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
