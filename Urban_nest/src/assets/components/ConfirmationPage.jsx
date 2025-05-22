import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../CSS/ConfirmationPage.css";
import superdelux from "../Images/Super-Deluxe.png";
import delux from "../Images/Deluxe.png";
import premium from "../Images/premium.png";

const ConfirmationPage = () => {
  const location = useLocation();
  const { formData, totalBill, bookingId } = location.state;

  let showimg;
  if (formData.roomType === 'Super Deluxe') {
    showimg = superdelux;
  } else if (formData.roomType === 'Deluxe') {
    showimg = delux;
  } else if (formData.roomType === 'Premium') {
    showimg = premium;
  }

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.text("Booking Confirmation", 20, 20);

    // Call autoTable by passing the doc instance explicitly
    autoTable(doc, {
      startY: 30,
      head: [["Field", "Value"]],
      body: [
        ["Booking ID", bookingId],
        ["Name", formData.name],
        ["Email", formData.email],
        ["Phone", formData.phone],
        ["Room Type", formData.roomType],
        ["AC Option", formData.acOption],
        ["Breakfast", formData.breakfast],
        ["Guests", formData.guests],
        ["Rooms", formData.numRooms],
        ["Start Date", formData.startDate],
        ["End Date", formData.endDate],
        ["Payment Method", formData.paymentMethod],
        ["Total Amount", `₹${totalBill.total}`],
      ],
    });

    doc.save(`${bookingId}.pdf`);
  };

  return (
    <div className="confirm-container">
      <div className="confirm-right">
      <div className="confirm-left">
        <img src={showimg} alt="Room" />
      </div>
        <h2>🎉 Congratulations! Booking Confirmed</h2>
        <p><strong>Booking ID:</strong> {bookingId}</p>
        <ul>
          <li><strong>Name:</strong> {formData.name}</li>
          <li><strong>Email:</strong> {formData.email}</li>
          <li><strong>Phone:</strong> {formData.phone}</li>
          <li><strong>Room Type:</strong> {formData.roomType}</li>
          <li><strong>AC:</strong> {formData.acOption}</li>
          <li><strong>Breakfast:</strong> {formData.breakfast}</li>
          <li><strong>Guests:</strong> {formData.guests}</li>
          <li><strong>Rooms:</strong> {formData.numRooms}</li>
          <li><strong>Dates:</strong> {formData.startDate} to {formData.endDate}</li>
          <li><strong>Payment Method:</strong> {formData.paymentMethod}</li>
        </ul>
        <h3>Total Amount: ₹{totalBill.total}</h3>
        <button onClick={handleDownload}>📄 Save as PDF</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
