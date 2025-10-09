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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState('active');

  const nextTestimonial = () => {
    setAnimationState('slide-out-left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % initialTestimonials.length);
      setAnimationState('slide-in-left');
      setTimeout(() => {
        setAnimationState('active');
      }, 600);
    }, 300);
  };

  const prevTestimonial = () => {
    setAnimationState('slide-out-right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + initialTestimonials.length) % initialTestimonials.length);
      setAnimationState('slide-in-right');
      setTimeout(() => {
        setAnimationState('active');
      }, 600);
    }, 300);
  };

  const cardClasses = ["testimonial-card-black", "testimonial-card-red", "testimonial-card-white"];

  return (
    <section className="testimonial-section">
      {/* Header */}
      <div className="testimonial-header d-flex justify-content-between align-items-center w-100 mb-4">
        <h2 className="text-white">What Past Attendees Say</h2>
        <div className="testimonial-navigation d-flex gap-2">
          <button className="nav-arrow left-arrow" onClick={prevTestimonial}>&#8249;</button>
          <button className="nav-arrow right-arrow" onClick={nextTestimonial}>&#8250;</button>
        </div>
      </div>

      {/* Cards - Fixed Position */}
      <div className="testimonial-container d-flex justify-content-center align-items-center position-relative">
        {[0, 1, 2].map((pos) => {
          const itemIndex = (currentIndex + pos) % initialTestimonials.length;
          const item = initialTestimonials[itemIndex];
          
          return (
            <div key={pos} className={`testimonial-card ${cardClasses[pos]} position-relative`}>
              <div className="testimonial-content">
                {/* Text Content Only - This Moves Side by Side */}
                <div className="text-content-container">
                  <div className={`text-slide ${animationState}`}>
                    <h5 className="testimonial-title">{item.title}</h5>
                    <p className="testimonial-quote">"{item.quote}"</p>
                  </div>
                </div>
                
                {/* Fixed Content - This Doesn't Move */}
                <div className="fixed-content">
                  <div className="logo-rectangle">
                    <img src={item.img} alt={item.author} className="testimonial-logo" />
                    <div className="author-details">
                      <h6 className="author-name">{item.author}</h6>
                      <p className="author-position">{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;