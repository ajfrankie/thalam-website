import React, { useState } from "react";
import "./Jobs.css";

// ✅ சரியான image import path
import image1 from "../../assets/images/job1.jpg";
import image2 from "../../assets/images/job2.jpg";
import image3 from "../../assets/images/job3.jpg";
import logoimage from "../../assets/images/logo.png";


const jobsData = [
  {
    id: 1,
    title: "Job title",
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
    title: "Job title",
    description: [
      "We look for motivated individuals who want to contribute to social projects and community development. The role includes planning, coordination, and close teamwork to deliver measurable impact.",
      "We look for motivated individuals who want to contribute to social projects and community development. The role includes planning, coordination, and close teamwork to deliver measurable impact."
    ],
    image: image2,
    reverse: false,
  },
  {
    id: 3,
    title: "Job title",
    description: [
      "Join our friendly team. You will work on outreach, training sessions, and creating resources that help youth gain leadership skills and practical experience.",
      "Join our friendly team. You will work on outreach, training sessions, and creating resources that help youth gain leadership skills and practical experience."
    ],
    image: image3,
    reverse: true,
  },
];

export default function Job() {
  const [activeIndexes, setActiveIndexes] = useState(jobsData.map(() => 0));

  const handleDotClick = (jobId, index) => {
    const newActiveIndexes = [...activeIndexes];
    newActiveIndexes[jobId - 1] = index;
    setActiveIndexes(newActiveIndexes);
  };

  return (
    <section className="jobs-section">
      {/* Header */}
      <div className="jobs-header">
        <div className="jobs-header-text">Jobs</div>
        <div className="jobs-header-logo">
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

      
      <div className="jobs-list">
        {jobsData.map((job, jobIndex) => (
          <article key={job.id} className={`jobs-card ${job.reverse ? "reverse" : ""}`}>
            <div className="job-image-wrapper">
              <img
                src={job.image}
                alt={job.title}
                className={`job-image job-image-${job.id}`}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23222' /><text x='50%' y='50%' fill='%23fff' font-size='20' text-anchor='middle' alignment-baseline='middle'>Image</text></svg>";
                }}
              />
            </div>

            <div className="job-content">
              <h3 className={`job-title job-title-${job.id}`}>{job.title}</h3>
              <div className="job-desc-wrapper">
                {job.description.map((para, idx) => (
                  <p key={idx} className={`job-desc job-desc-${job.id}`}>{para}</p>
                ))}
              </div>

              {/* Dots (only last job) */}
              {jobIndex === jobsData.length - 1 && (
                <div className="jobs-footer-dots">
                  {job.description.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${activeIndexes[jobIndex] === index ? "active" : ""}`}
                      onClick={() => handleDotClick(job.id, index)}
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
