import React from 'react';
import '../CSS/facilities.css';

function Facilities() {
  const amenities = [
    { name: 'Free Wi-Fi', icon: '📶' },
    { name: '24/7 Reception', icon: '🕒' },
    { name: 'Swimming Pool', icon: '🏊‍♂️' },
    { name: 'Room Service', icon: '🛎️' },
    { name: 'Gym & Fitness', icon: '🏋️‍♀️' },
    { name: 'Laundry Service', icon: '🧺' },
    { name: 'Air Conditioning', icon: '❄️' },
    { name: 'Parking Facility', icon: '🅿️' },
    { name: '24/7 Reception', icon: '🕒' },
    { name: 'Restaurant & Café', icon: '🍽️' },
  ];

  return (
    <section id="facilities-section" className="facilities-container">
      <h2>Our Facilities & Amenities</h2>
      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-card" key={index}>
            <div className="icon">{item.icon}</div>
            <div className="name">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
