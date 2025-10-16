// why attend section
import React from "react";
import "./WhyAttend.css";  

const WhyAttend = () => {
  const items = [
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

  return (
    <section className="why-attend-section">
      <h2 className="why-attend-title">WHY ATTEND?</h2>
      <div className="why-attend-grid">
        {items.map((item) => (
          <div key={item.id} className="why-card">
            <span className="why-number">{item.id}</span>
            <div className="why-content">
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;
