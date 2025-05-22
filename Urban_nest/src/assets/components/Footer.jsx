import React from "react";
import "../CSS/footer.css"; // Create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Luxury Hotel</h3>
          <p>
            Experience elegance and comfort in every stay. We offer premium services to make your visit unforgettable.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul className="quicklinks">
            <li><a href="#home-section">Home</a></li>
            <li><a href="#rooms-section">Rooms</a></li>
            <li><a href="#aboutus-section">About Us</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Info</h4>
          <p>Email: adiforpro@gmail.com</p>
          <p>Phone: +91-7016157670</p>
          <p>Address: Raiya Telephone Exchange, Rajkot</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
