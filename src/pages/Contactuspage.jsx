
import React, { useState } from "react";
import "./ContactUsPage.css";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p>GET IN TOUCH</p>
          <h1>Let's Find Your <span>Perfect Home</span></h1>
          <p>
            Have questions about a property? Our team is ready to help
            you make your next move.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-details">
            <p className="contact-label">CONTACT US</p>
            <h2>We'd Love To Hear From You</h2>
            <p className="contact-description">
              Whether you want to buy, rent, or sell a property,
              get in touch with our team today.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Our Location</h3>
                <p>Port Harcourt, Rivers State, Nigeria</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone Number</h3>
                <p>+234 800 000 0000</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email Address</h3>
                <p>hello@sadimhomes.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 9am - 5pm</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us A Message</h2>
            <p>Fill out the form below and we'll get back to you.</p>

            {submitted && (
              <div className="contact-success">
                Thank you! Your message has been submitted.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="contact-input-row">
                <div className="contact-input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-input-row">
                <div className="contact-input-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-input-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
