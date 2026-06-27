const express = require("express");
const router = express.Router();
const { createService, getServices , getServiceById } = require("../controllers/serviceController");
const protect = require("../middleware/authMiddleware");
router.post("/", protect, createService);
router.get("/", getServices);
router.get("/:id", getServiceById);

module.exports = router;