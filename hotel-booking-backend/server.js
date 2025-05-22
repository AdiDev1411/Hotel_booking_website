const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const Booking = require("./models/Booking");


const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Your routes here (example)
app.get("/", (req, res) => {
  res.send("Hotel Booking API Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

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
