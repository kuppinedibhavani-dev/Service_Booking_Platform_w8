const express = require("express");
const router = express.Router();
const { createBooking, getMyBookings,  getAllBookings,updateBookingStatus} = require("../controllers/bookingController");
const protect = require("../middleware/authMiddleware");
router.get("/", protect, getAllBookings);
router.post("/", protect, createBooking);
router.get("/my-bookings", protect, getMyBookings);
router.put("/:id", protect, updateBookingStatus);

module.exports = router;