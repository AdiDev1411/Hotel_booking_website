import React from "react";
import "../CSS/Explore.css";
import hotelimg from '../Images/hotel.png'
import dinning from '../Images/dinnig.png'
import pool from '../Images/pool.png'
import spa from '../Images/spa.png'
import { Navigate, useNavigate } from "react-router-dom";

const Explore = () => {
    const navigate = useNavigate()
  return (
    <div className="explore-container">
      <header className="explore-header">
        <h1>Discover Our Hotel</h1>
        <p>Experience comfort, elegance, and unmatched hospitality</p>
      </header>

      <section className="explore-about">
        <img
          src={hotelimg}
          alt="Hotel View"
        />
        <div>
          <h2>About Our Hotel</h2>
          <p>
            Located in the heart of the city, our hotel offers luxury and
            relaxation with world-class amenities, beautiful interiors, and
            top-rated service. Whether you're here for business or leisure,
            you'll feel at home.
          </p>
        </div>
      </section>

      <section className="explore-features">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-box">
            <img
              src={pool}
              alt="Pool"
            />
            <h3>Infinity Pool</h3>
            <p>Relax and refresh in our stunning rooftop pool with skyline views.</p>
          </div>
          <div className="feature-box">
            <img
              src={spa}
              alt="Spa"
            />
            <h3>Spa & Wellness</h3>
            <p>Pamper yourself with massages, therapies, and full-body rejuvenation.</p>
          </div>
          <div className="feature-box">
            <img
              src={dinning}
              alt="Dining"
            />
            <h3>Fine Dining</h3>
            <p>Enjoy gourmet cuisine from our award-winning chefs in elegant settings.</p>
          </div>
          <div className="feature-box">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Conference Hall"
            />
            <h3>Event Spaces</h3>
            <p>Host your meetings or celebrations with modern facilities and style.</p>
          </div>
        </div>
      </section>

      <section className="explore-cta">
        <h2>Visit Us Today</h2>
        <p>Ready to indulge in a luxury experience?</p>

        <button className="book-now-btn"
        onClick={()=>{
            navigate('/book-room')
        }}>Book Your Stay</button>
      </section>
    </div>
  );
};

export default Explore;
