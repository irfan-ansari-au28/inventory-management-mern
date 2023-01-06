const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const { formatBytes } = require("../utils/fileUpload");

const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  // Validation
  if (!name || !sku || !category || !quantity || !price || !description) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Handle image upload
  let fileData = {};
  if (req.file) {
    fileData = {
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: formatBytes(req.file.size),
    };
  }

  // Create product
  const product = await Product.create({
    user: req.user.id,
    name,
    sku,
    category,
    quantity,
    price,
    description,
    image: fileData,
  });

  res.status(201).json({
    product,
    msg: "Product added successfully",
  });
});

module.exports = {
  createProduct,
};
