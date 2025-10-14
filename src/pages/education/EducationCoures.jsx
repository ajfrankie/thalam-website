import React, { useState } from "react";
import "./EducationCoures.css"; //  file name spelling fixed

// Logo
import logo from "../../assets/images/logo.png";

// Images
import education1image from "../../assets/images/education1.jpg";
import education2image from "../../assets/images/education2.jpg";
import education3image from "../../assets/images/education3.jpg";

const educationData = [
  {
    id: 1,
    title: "Course 01",
    description: [
      "Foundation and Vision Organization has been creating opportunities for youth. This enables them to learn, lead, and contribute to their communities. Through projects, volunteer programs, and mentorship, we aim to inspire the next generation of leaders.",
      "Founded in 2018, Thalam Organization has been creating opportunities for youth in Trincomalee to learn, lead, and contribute to their communities. Through projects, volunteer programs, and partnerships, we aim to inspire the next generation of leaders.",
      "Founded in 2018, Thalam Organization has been creating opportunities for youth in Trincomalee to learn, lead, and contribute to their communities. Through projects, volunteer programs, and partnerships, we aim to inspire the next generation of leaders."
    ],
    image: education1image,
    reverse: true,
  },
  {
    id: 2,
    title: "Course 02",
    description: [
      "We look for motivated individuals who want to contribute to social projects and community development. The role includes planning, coordination, and close teamwork to deliver measurable impact.",
      "We look for motivated individuals who want to contribute to social projects and community development. The role includes planning, coordination, and close teamwork to deliver measurable impact.",
      "Foundation and Vision Organization has been creating opportunities for youth. This enables them to learn, lead, and contribute to their communities. Through projects, volunteer programs, and mentorship, we aim to inspire the next generation of leaders.",
    ],
    image: education2image,
    reverse: false,
  },
  {
    id: 3,
    title: "Course 03",
    description: [
      "Join our friendly team. You will work on outreach, training sessions, and creating resources that help youth gain leadership skills and practical experience.",
      "Join our friendly team. You will work on outreach, training sessions, and creating resources that help youth gain leadership skills and practical experience.",
      
    ],
    image: education3image,
    reverse: true,
  },
];

export default function EducationCourses() {
  const [activeIndexes, setActiveIndexes] = useState(educationData.map(() => 0));

  const handleDotClick = (eduId, index) => {
    const newActiveIndexes = [...activeIndexes];
    newActiveIndexes[eduId - 1] = index;
    setActiveIndexes(newActiveIndexes);
  };

  return (
    <section className="education-section">
      {/* Header */}
      <div className="education-header">
        <h1 className="education-title">Education</h1>
        <div className="education-logo-wrapper">
          <img
            src={logo}
            alt="Logo"
            className="education-logo"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='50' fill='%23222' /><text x='50%' y='50%' fill='%23fff' font-size='20' text-anchor='middle' alignment-baseline='middle'>Logo</text></svg>";
            }}
          />
        </div>
      </div>

      {/* Education Cards */}
      <div className="education-list">
        {educationData.map((edu, eduIndex) => (
          <article
            key={edu.id}
            className={`education-card ${edu.reverse ? "reverse" : ""}`}
          >
            <div className="education-image-wrapper">
              <img
                src={edu.image}
                alt={edu.title}
                className={`education-image education-image-${edu.id}`}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23222' /><text x='50%' y='50%' fill='%23fff' font-size='20' text-anchor='middle' alignment-baseline='middle'>Image</text></svg>";
                }}
              />
            </div>

            <div className="education-content">
              <h3 className={`education-card-title education-title-${edu.id}`}>
                {edu.title}
              </h3>

              <div className="education-desc-wrapper">
                {edu.description.map((para, idx) => (
                  <p
                    key={idx}
                    className={`education-desc education-desc-${edu.id}`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Footer dots – only for last card */}
              {eduIndex === educationData.length - 1 && (
                <div className="education-footer-dots">
                  {edu.description.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        activeIndexes[eduIndex] === index ? "active" : ""
                      }`}
                      onClick={() => handleDotClick(edu.id, index)}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
