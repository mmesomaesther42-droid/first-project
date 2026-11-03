import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Amara Okafor",
    role: "Property Buyer",
    initials: "AO",
    review:
      "The property search process felt simple and organised. I could compare options and understand the next steps clearly.",
  },
  {
    name: "David Williams",
    role: "Tenant",
    initials: "DW",
    review:
      "I like how the property details are presented. It makes exploring available homes much easier and more convenient.",
  },
  {
    name: "Chidinma Eze",
    role: "Property Investor",
    initials: "CE",
    review:
      "The website provides a clean way to explore property opportunities. The layout makes the information easy to follow.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <p className="testimonials-subtitle">CLIENT EXPERIENCES</p>
          <h2>What Our Clients Say</h2>
          <p>
            We aim to make every property journey clear, convenient, and
            stress-free.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div
                className="testimonial-stars"
                aria-label="Sample five-star rating"
              >
                ★★★★★
              </div>

              <p className="testimonial-review">“{testimonial.review}”</p>

              <div className="testimonial-person">
                <div className="testimonial-avatar">{testimonial.initials}</div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
