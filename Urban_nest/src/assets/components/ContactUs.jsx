import React from "react";
import "../CSS/contact.css"; // Create this CSS file for styling

function ContactUs() {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us.</p>
      
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Hotel Address</h3>
          <p>123 Luxury Lane, Dream City, India</p>
          <p>Email: info@luxuryhotel.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
