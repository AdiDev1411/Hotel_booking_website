import React, { useState } from "react";
import "../CSS/rooms.css";
import superdelux from "../Images/Super-Deluxe.png";
import delux from "../Images/Deluxe.png";
import premium from "../Images/premium.png";
import { Link } from 'react-router-dom';


function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState("Super Delux");

  const roomDetails = {
    "Super Delux": {
      img: superdelux,
      description:
        "A luxurious Super Delux room with all modern amenities including a king-sized bed, minibar, and balcony with a view.",
      features: [
        "King-sized bed",
        "Private balcony with view",
        "Mini bar",
        "Complimentary breakfast",
        "Air conditioning",
        "Free Wi-Fi",
      ],
      price: "₹4,999 / night",
    },
    Premium: {
      img: delux,
      description:
        "Premium room with elegant interiors, comfortable bedding, and complimentary breakfast included.",
      features: [
        "Queen-sized bed",
        "Elegant interior",
        "Complimentary breakfast",
        "Free Wi-Fi",
        "Air conditioning",
        "24/7 room service",
      ],
      price: "₹3,499 / night",
    },
    Delux: {
      img: premium,
      description:
        "Affordable yet comfortable Delux room perfect for a relaxing stay, complete with all essential facilities.",
      features: [
        "Double bed",
        "Essential toiletries",
        "Flat screen TV",
        "Free Wi-Fi",
        "Daily housekeeping",
      ],
      price: "₹2,499 / night",
    },
  };

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
  };

  return (
    <>
      <section id="#rooms">
        <div className="types">
          {Object.keys(roomDetails).map((room) => (
            <button
              key={room}
              className={`optionbtn ${selectedRoom === room ? "active" : ""}`}
              onClick={() => handleRoomChange(room)}
            >
              {room}
            </button>
          ))}
        </div>

        <div className="room-details">
          <div className="room-image">
            <img src={roomDetails[selectedRoom].img} alt={selectedRoom} />
          </div>
          <div className="room-description">
            <h2>{selectedRoom}</h2>
            <p>{roomDetails[selectedRoom].description}</p>
            <h4>Features:</h4>
            <ul className="features-list">
              {roomDetails[selectedRoom].features.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
            <p className="price">{roomDetails[selectedRoom].price}</p>
            <Link to="/book-room">
            <button className="book-now-btn">Book Now</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rooms;
