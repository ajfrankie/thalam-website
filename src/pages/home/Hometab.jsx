import React from 'react';
import './Hometab.css'; 

const logos = [
  { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', active: true },
  { name: 'Dribbble', src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Dribbble_logo.png', active: true },
  { name: 'HubSpot', src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/HubSpot_Logo.svg', active: true },
  { name: 'Notion', src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', active: true },
  { name: 'Gumroad', src: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Gumroad_logo_2023.svg', active: true }
];


const Hometab = () => {
  return (
    <div className="hometab">
      {/* Logo strip */}
      <div className="logo-strip">
        {logos.map((logo) => (
          <img key={logo.name} src={logo.src} alt={logo.name} className="logo" />
        ))}
      </div>

      {/* Two column layout */}
      <div className="two-column-layout">
        {/* Left Column */}
        <div className="left-card">
          <div className="card red">
            <h2>Our Objectives</h2>
            <ul>
              To build the skills and capacity of young people through training, workshops, and mentorship.
              To create a platform for volunteerism and civic engagement, encouraging youth to contribute positively to their communities.
              To support educational and cultural initiatives that strengthen knowledge and identity.
              To collaborate with local, national, and international organizations for youth development and community upliftment.
            </ul>
          </div>
        </div>

        {/* Right Column */}
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
              Trincomalee, fostering inclusivity and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometab;
