import React, { useState } from 'react';
import './testimonial.css';

// ✅ Correct image imports (make sure these files exist)
import testimonialimage1 from '../../assets/images/testimonial1.jpg';
import testimonialimage2 from '../../assets/images/testimonial2.jpg';
import testimonialimage3 from '../../assets/images/testimonial3.jpg';

const initialTestimonials = [
  {
    title: "GAME-CHANGING INSIGHTS",
    quote: "This summit opened my eyes to AI and how it will shape industries.",
    author: "Mark Vandenberg",
    position: "CTO, NuralTeach",
    img: testimonialimage1,
  },
  {
    title: "THE BEST AI EVENT!",
    quote: "Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.",
    author: "Elena Rojas",
    position: "AI Researcher, DeepMind",
    img: testimonialimage2,
  },
  {
    title: "UNMATCHED OPPORTUNITIES",
    quote: "From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals.",
    author: "David Laurent",
    position: "CEO, FutureAI Labs",
    img: testimonialimage3,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextTestimonial = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % initialTestimonials.length);
      setAnimate(false);
    }, 500); // match CSS animation duration
  };

  const prevTestimonial = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + initialTestimonials.length) % initialTestimonials.length);
      setAnimate(false);
    }, 500);
  };

  const getCardData = (position) => {
    const cardIndex = (index + position) % initialTestimonials.length;
    return initialTestimonials[cardIndex];
  };

  const cardClasses = ["testimonial-card-black", "testimonial-card-red", "testimonial-card-white"];

  return (
    <section className="testimonial-section">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        
        {/* Header */}
        <div className="testimonial-header d-flex justify-content-between align-items-center w-100 mb-4">
          <h2 className="text-white">What Past Attendees Say</h2>
          <div className="testimonial-navigation d-flex gap-2">
            <button className="nav-arrow left-arrow" onClick={prevTestimonial}>&#8249;</button>
            <button className="nav-arrow right-arrow" onClick={nextTestimonial}>&#8250;</button>
          </div>
        </div>

        {/* Cards */}
        <div className="testimonial-container d-flex justify-content-center align-items-center position-relative">
          {[0, 1, 2].map((pos) => {
            const item = getCardData(pos);
            return (
              <div key={pos} className={`testimonial-card ${cardClasses[pos]} position-relative`}>
                <div className={`testimonial-content ${animate ? "fade-out" : "fade-in"}`}>
                  <h5 className="testimonial-title">{item.title}</h5>
                  <p className="testimonial-quote">"{item.quote}"</p>
                  <div className="logo-rectangle">
                    <img src={item.img} alt={item.author} className="testimonial-logo" />
                    <div className="author-details">
                      <h6 className="author-name">{item.author}</h6>
                      <p className="author-position">{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
