const express = require("express");
const { contactUs } = require("../controllers/contactController");
const router = express.Router();
const protect = require("../middleWares/authMiddleWare");

router.post("/", protect, contactUs);

module.exports = router;
