import { useState, useEffect } from "react";
import "../CSS/BookingPage.css";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();



  

const roomPrices = {
  "Super Deluxe": 5000,
  "Deluxe": 3500,
  "Premium": 2500,
};

const acPrices = {
  AC: 500,
  "Non-AC": 0,
};

const breakfastPrices = {
  Included: 300,
  "Not Included": 0,
};

const MAX_GUESTS_PER_ROOM = 4;

const BookingPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomType: "",
    acOption: "",
    startDate: "",
    endDate: "",
    numRooms: 1,
    breakfast: "",
    guests: 1,
    paymentMethod: "",
    specialRequests: "",
    name: "",
    email: "",
    phone: "",
    idType: "",
    idNumber: "",
  });

  const [totalBill, setTotalBill] = useState({
    days: 0,
    roomCost: 0,
    acCost: 0,
    breakfastCost: 0,
    total: 0,
  });

  const [guestLimitExceeded, setGuestLimitExceeded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" || name === "numRooms" ? parseInt(value) : value,
    }));
  };

  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const startD = new Date(start);
    const endD = new Date(end);
    const diffTime = endD - startD;
    if (diffTime <= 0) return 0;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    const days = calculateDays(formData.startDate, formData.endDate);

    const guestsAllowed = formData.numRooms * MAX_GUESTS_PER_ROOM;
    setGuestLimitExceeded(formData.guests > guestsAllowed);

    const roomCost = formData.roomType ? (roomPrices[formData.roomType] || 0) * days * formData.numRooms : 0;
    const acCost = formData.acOption ? (acPrices[formData.acOption] || 0) * days * formData.numRooms : 0;
    const breakfastCost = formData.breakfast ? (breakfastPrices[formData.breakfast] || 0) * days * formData.numRooms : 0;

    const total = roomCost + acCost + breakfastCost;

    setTotalBill({ days, roomCost, acCost, breakfastCost, total });
  }, [
    formData.roomType,
    formData.acOption,
    formData.breakfast,
    formData.startDate,
    formData.endDate,
    formData.numRooms,
    formData.guests,
  ]);

const handleSubmit = async (e) => {
    e.preventDefault();

    if (guestLimitExceeded) {
      alert(`Guest limit exceeded! Max ${formData.numRooms * MAX_GUESTS_PER_ROOM} guests allowed.`);
      return;
    }

    try {
      const response = await fetch("http://localhost:5002/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "🎉 Congratulations!",
          text: "Thanks for booking with us!",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

      setTimeout(() => {
  navigate("/confirmation", {
    state: {
      formData,
      totalBill,
      bookingId: `BOOK${Date.now()}`
    }
  });
}, 3000);

      } else {
        Swal.fire("Oops!", "Something went wrong while booking.", "error");
      }
    } catch (error) {
      console.error("Booking error:", error);
      Swal.fire("Error", "Could not connect to the server.", "error");
    }
  };
  return (
    <>
    <div className="booking-container">
      <h2>Book Your Room</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-columns">
          <div className="form-section">
            <h3>Room Details</h3>

            <div className="form-group">
              <label>Room Type</label>
              <select name="roomType" value={formData.roomType} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Super Deluxe">Super Deluxe</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div className="form-group">
              <label>Number of Rooms</label>
              <input type="number" name="numRooms" min="1" value={formData.numRooms} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>AC Preference</label>
              <select name="acOption" value={formData.acOption} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>

            <div className="form-group">
              <label>Start Date</label>
                <input
                type="date"
                name="startDate"
                value={formData.startDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleChange}
                required
                />            
            </div>

            <div className="form-group">
              <label>End Date</label>
                <input
                type="date"
                name="endDate"
                value={formData.endDate}
                min={formData.startDate || new Date().toISOString().split("T")[0]}
                onChange={handleChange}
                required
                />            
            </div>

            <div className="form-group">
              <label>Number of Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
              />
              {guestLimitExceeded && (
                <small style={{ color: "red" }}>
                  Max {formData.numRooms * MAX_GUESTS_PER_ROOM} guests allowed for {formData.numRooms} room(s).
                </small>
              )}
            </div>

            <div className="form-group">
              <label>Breakfast Preference</label>
              <select name="breakfast" value={formData.breakfast} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Included">Included</option>
                <option value="Not Included">Not Included</option>
              </select>
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
                {/* <option value="Cash">Cash</option> */}
              </select>
            </div>

            <div className="form-group">
              <label>Special Requests</label>
              <textarea
                name="specialRequests"
                rows="3"
                placeholder="Anything else you'd like us to know?"
                value={formData.specialRequests}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h3>Your Information</h3>

            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>ID Proof Type</label>
              <select name="idType" value={formData.idType} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Aadhar">Aadhar</option>
                <option value="Passport">Passport</option>
                <option value="Driving License">Driving License</option>
              </select>
            </div>

            <div className="form-group">
              <label>ID Number</label>
              <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
            </div>

            <div className="total-bill">
              <h3>Total Bill</h3>
              {totalBill.days > 0 ? (
                <>
                  <p>Days: {totalBill.days}</p>
                  <p>Room ({formData.roomType} × {formData.numRooms}): ₹{totalBill.roomCost}</p>
                  <p>AC Option ({formData.acOption}): ₹{totalBill.acCost}</p>
                  <p>Breakfast ({formData.breakfast}): ₹{totalBill.breakfastCost}</p>
                  <hr />
                  <p>
                    <strong>Total: ₹{totalBill.total}</strong>
                  </p>
                </>
              ) : (
                <p>Please select valid start and end dates.</p>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Confirm Booking
        </button>
      </form>
    </div>
       <Footer />
       </>
   
  );
};

export default BookingPage;
