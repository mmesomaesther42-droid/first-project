import React from "react";
import "./AboutUsPage.css";

function Aboutuspage() {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT SADIMHOMES</span>
          <h1>Making Your Dream Home a Reality</h1>
          <p>
            We believe finding a home should be an exciting and stress-free
            experience. At SadimHomes, we help you discover spaces where your
            future can grow.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
            alt="Beautiful modern home"
          />
        </div>

        <div className="about-story-content">
          <span>OUR STORY</span>
          <h2>Helping You Find More Than Just a House</h2>
          <p>
            SadimHomes is a real estate brand focused on helping individuals and
            families find properties that match their needs, lifestyle, and
            budget.
          </p>
          <p>
            We understand that choosing a property is an important decision.
            That is why we focus on making the process easier through reliable
            information, professional guidance, and a customer-first approach.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To make property buying, selling, and renting easier by connecting
            people with suitable properties and providing dependable real estate
            guidance.
          </p>
        </div>

        <div className="vision-card">
          <h2>Our Vision</h2>
          <p>
            To become a trusted real estate brand known for professionalism,
            transparency, and helping people find places they are proud to call
            home.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <div className="about-section-heading">
          <span>WHAT WE STAND FOR</span>
          <h2>Our Core Values</h2>
          <p>The principles that guide how we serve our clients.</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Trust</h3>
            <p>
              We believe in building honest relationships with our clients
              through clear communication.
            </p>
          </div>

          <div className="value-card">
            <h3>Transparency</h3>
            <p>
              We value clear property information and straightforward dealings
              throughout the process.
            </p>
          </div>

          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We aim to provide professional service and a positive experience
              at every stage.
            </p>
          </div>

          <div className="value-card">
            <h3>Customer Focus</h3>
            <p>
              Your needs, preferences, and satisfaction remain central to the
              way we work.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Ready to Find Your Next Home?</h2>
        <p>
          Let SadimHomes help you take the next step towards finding a property
          you'll love.
        </p>
        <a href="/properties" className="about-cta-button">
          Explore Properties
        </a>
      </section>
    </div>
  );
}

export default Aboutuspage;
