import React from "react";
import "./ServicePage.css";
const services = [
  {
    icon: "🏡",
    title: "Property Sales",
    description:
      "Find your ideal property or connect with potential buyers to sell your property confidently.",
  },
  {
    icon: "🔑",
    title: "Property Rentals",
    description:
      "Discover comfortable rental homes and apartments that suit your lifestyle and budget.",
  },
  {
    icon: "🤝",
    title: "Property Management",
    description:
      "Get support managing rental properties, tenants, and everyday property needs.",
  },
  {
    icon: "📍",
    title: "Property Inspection",
    description:
      "Arrange property visits to inspect a home and understand its features before making a decision.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <p className="services-subtitle">WHAT WE OFFER</p>
          <h2>Our Real Estate Services</h2>
          <p className="services-intro">
            We make finding, renting, selling, and managing properties simpler
            and more convenient.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Learn more <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
