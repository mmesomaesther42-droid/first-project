import React from 'react'

const Hero = () => {
  return (
    <div>
      
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO SADIMHOMES</p>
            <h1>
              Find Your
              <br />
              <span>Dream Home</span>
            </h1>
            <p className="hero-description">
              subscribe to one or more of our luxury offers
            </p>

            <a href="#properties" className="primary-button">
              Explore Properties →
            </a>
          </div>
        </section>

        <section className="welcome" id="welcome">
          <p className="eyebrow">YOUR NEXT HOME STARTS HERE</p>
          <h2>Find a place you'll love</h2>
          <p>Browse our property listings and discover your perfect home.</p>
        </section>
      </main>
    </div>
  )
}

export default Hero
