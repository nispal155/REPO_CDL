import React from "react";

function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Head of Operations",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About GetGadgets</h1>
        <p>Delivering the best gadgets to your doorstep!</p>
      </div>

      {/* Company Description */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          GetGadgets is your ultimate online destination for the latest and greatest gadgets. 
          From cutting-edge smartphones to smartwatches and headphones, we provide technology 
          enthusiasts with top-quality products at unbeatable prices. Our team is passionate 
          about delivering an exceptional shopping experience.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>To make technology accessible to everyone with fast delivery and great prices.</p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To become the most trusted online gadget store worldwide.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section why-choose">
        <h2>Why Choose GetGadgets?</h2>
        <div className="features">
          <div className="feature">
            <h4>Top Quality Products</h4>
            <p>We handpick only the best gadgets for our customers.</p>
          </div>
          <div className="feature">
            <h4>Fast Delivery</h4>
            <p>Get your gadgets delivered quickly and reliably.</p>
          </div>
          <div className="feature">
            <h4>Customer Support</h4>
            <p>We’re here to help with 24/7 customer support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
