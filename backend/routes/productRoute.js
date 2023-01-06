const express = require("express");
const router = express.Router();
const protect = require("../middleWares/authMiddleWare");
const { upload } = require("../utils/fileUpload");
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

router.post("/", protect, upload.single("image"), createProduct);
router.get("/", protect, getProducts);

module.exports = router;
