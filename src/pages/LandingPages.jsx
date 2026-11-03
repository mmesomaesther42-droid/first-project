import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Hero from "../component/Hero/Hero";
import Testimonials from "../component/testimony/Testimonials";
import Footer from "../component/Footer/Footer";
const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPages;
