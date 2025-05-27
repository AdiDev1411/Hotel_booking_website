const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const Booking = require("./models/Booking");

const app = express(); // ✅ This should come before app.use



// ✅ Only one CORS setup — no duplicates
app.use(cors({
  credentials: true
}));

const PORT = process.env.PORT;

// Middleware
app.use(express.json()); // ✅ No need to repeat cors()

// Routes
app.get("/", (req, res) => {
  res.send("Hotel Booking API Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Booking Route
app.post("/api/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "✅ Booking saved", data: booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Error saving booking", error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
