import React from "react";
import "./index.css";

import image1 from "../../assets/images/history1.jpg";
import image2 from "../../assets/images/history1.jpg";
import logoimage from "../../assets/images/logo.png"; // image

const historyData = [
  {
    id: 1,
    title: "", 
    description: [
      "Foundation and Vision Organization has been creating opportunities for youth. This enables them to learn, lead, and contribute to their communities. Through projects, volunteer programs, and mentorship, we aim to inspire the next generation of leaders.",
      "Founded in 2018, Thalam Organization has been creating opportunities for youth in Trincomalee to learn, lead, and contribute to their communities. Through projects, volunteer programs, and partnerships, we aim to inspire the next generation of leaders.",
      "Founded in 2018, Thalam Organization has been creating opportunities for youth in Trincomalee to learn, lead, and contribute to their communities. Through projects, volunteer programs, and partnerships, we aim to inspire the next generation of leaders."
    ],
    image: image1,
    reverse: true,
  },
  {
    id: 2,
    title: "",
    description: [
      "We look for motivated individuals who want to contribute to social projects and community development. The role includes planning, coordination, and close teamwork to deliver measurable impact.",
      "We look for motivated individuals who want to contribute to social projects and community development. The role includes planning, coordination, and close teamwork to deliver measurable impact.",
      "We look for motivated individuals who want to contribute to social projects and community development. The role includes planning, coordination, and close teamwork to deliver measurable impact.",
    ],
    image: image2,
    reverse: false,
  },
];

export default function HistorySection() {
  return (
    <section className="history-section">
      <div className="history-header">
        <div className="history-header-text">History</div>
        <div className="history-header-logo">
          <img
            src={logoimage}
            alt="Logo"
            className="logo-image"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='50' fill='%23222' /><text x='50%' y='50%' fill='%23fff' font-size='20' text-anchor='middle' alignment-baseline='middle'>Logo</text></svg>";
            }}
          />
        </div>
      </div>

      <div className="history-list">
        {historyData.map((history) => (
          <article key={history.id} className={`history-card ${history.reverse ? "reverse" : ""}`}>
            <div className="history-image-wrapper">
              <img
                src={history.image}
                alt={history.title}
                className={`history-image history-image-${history.id}`}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23222' /><text x='50%' y='50%' fill='%23fff' font-size='20' text-anchor='middle' alignment-baseline='middle'>Image</text></svg>";
                }}
              />
            </div>

            <div className="history-content">
              <h3 className={`history-title history-title-${history.id}`}>{history.title}</h3>
              <div className="history-desc-wrapper">
                {history.description.map((para, idx) => (
                  <p key={idx} className={`history-desc history-desc-${history.id}`}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
