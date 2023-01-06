const express = require("express");
const router = express.Router();
const protect = require("../middleWares/authMiddleWare");
const { upload } = require("../utils/fileUpload");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", protect, upload.single("image"), createProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;
