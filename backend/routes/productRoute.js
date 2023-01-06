const express = require("express");
const router = express.Router();
const protect = require("../middleWares/authMiddleWare");
const { upload } = require("../utils/fileUpload");
const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controllers/productController");

router.post("/", protect, upload.single("image"), createProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);

module.exports = router;
