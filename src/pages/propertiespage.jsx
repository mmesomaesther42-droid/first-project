import React from "react";
import "./propertiespage.css";
const properties = [
  {
    id: 1,
    name: "Modern Family Home",
    location: "Lekki, Lagos",
    price: "₦185,000,000",
    type: "For Sale",
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Luxury City Apartment",
    location: "Victoria Island, Lagos",
    price: "₦8,500,000 / year",
    type: "For Rent",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Contemporary Duplex",
    location: "GRA, Port Harcourt",
    price: "₦220,000,000",
    type: "For Sale",
    bedrooms: 5,
    bathrooms: 4,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
];

function Properties() {
  return (
    <section className="properties-section" id="properties">
      <div className="properties-container">
        <div className="properties-heading">
          <p className="properties-eyebrow">OUR PROPERTY COLLECTION</p>
          <h2>Find a home that fits your lifestyle</h2>
          <p>
            Explore our featured homes and apartments. Discover a space that
            suits your needs, style, and budget.
          </p>
        </div>

        <div className="properties-grid">
          {properties.map((property) => (
            <article className="property-card" key={property.id}>
              <div className="property-image-wrapper">
                <img
                  src={property.image}
                  alt={property.name}
                  className="property-image"
                  loading="lazy"
                />
                <span className="property-type">{property.type}</span>
              </div>

              <div className="property-details">
                <p className="property-location">
                  <span aria-hidden="true">⌖</span> {property.location}
                </p>

                <h3>{property.name}</h3>

                <div className="property-features">
                  <span>{property.bedrooms} Bedrooms</span>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>

                <div className="property-bottom">
                  <p className="property-price">{property.price}</p>
                  <a
                    className="property-button"
                    href={`#contact?property=${encodeURIComponent(property.name)}`}
                  >
                    Enquire Now →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
