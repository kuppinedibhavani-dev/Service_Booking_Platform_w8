const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true
},
service: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Service",
  required: true
},
date: {
  type: String,
  required: true
},
time: {
  type: String,
  required: true
},
address: {
  type: String,
  required: true
},
status: {
  type: String,
  enum: ["pending", "confirmed", "completed", "cancelled"],
  default: "pending"
}
});
module.exports = mongoose.model("Booking", bookingSchema);
