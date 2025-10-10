import React from 'react';
import '../home/Hometab.css';

// ✅ Importing your local logo files
import eluna from '../../assets/images/eluna.png';
import thamilari from '../../assets/images/tamillari.png'; // ✅ check spelling
import maatram from '../../assets/images/maatram.png';
import naita from '../../assets/images/naita.png';
import noolaham from '../../assets/images/noolaham.png';

const logos = [
  { name: 'Eluna', src: eluna },
  { name: 'Thamilari', src: thamilari },
  { name: 'Maatram', src: maatram },
  { name: 'Naita', src: naita },
  { name: 'Noolaham', src: noolaham },
];

const Hometab = () => {
  return (
    <div className="hometab">
      {/* 🔹 Logo Strip Section */}
      <div className="logo-strip">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="logo"
          />
        ))}
      </div>

      {/* 🔹 Two Column Layout */}
      <div className="two-column-layout">
        {/* Left Column - Objectives */}
        <div className="left-card">
          <div className="card red">
            <h2>Our Objectives</h2>
            <p>To build the skills and capacity of young people through training, workshops, and mentorship.</p>
            <p>To create a platform for volunteerism and civic engagement, encouraging youth to contribute positively to their communities.</p>
            <p>To support educational and cultural initiatives that strengthen knowledge and identity.</p>
            <p>To collaborate with local, national, and international organizations for youth development and community upliftment.</p>
          </div>
        </div>

        {/* Right Column - Mission + Scope */}
        <div className="right-stack">
          <div className="card red">
            <h2>Our Mission</h2>
            <p>
              To empower the youth of Trincomalee by providing opportunities for education, leadership, and
              community engagement, fostering a society built on inclusivity, collaboration, and sustainable
              development.
            </p>
          </div>

          <div className="card gray">
            <h2>Our Scope</h2>
            <p>
              Our scope focuses on youth development, education, volunteerism, and community empowerment across
              Trincomalee, fostering inclusivity and sustainable growth. This extensive range of activities
              ensures that all facets of youth development are covered effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometab;
