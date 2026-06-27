const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");


const app = express();
connectDB();
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://service-booking-platform-w8.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});