const express = require("express");
const { createProduct } = require("../controllers/productController");
const router = express.Router();
const protect = require("../middleWares/authMiddleWare");

router.post("/", protect, createProduct);

module.exports = router;