const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const { formatBytes } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;

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
    // Save image to cloudinary
    let uploadedFile;

    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Inventory app",
        resource_type: "image",
      });
      console.log(uploadedFile, "-----file-----");
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
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

// Get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.user.id }).sort("-createdAt");
  res.status(200).json(products);
});

// Get a product by its id
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Match product to its user
  if (product.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("User not authorized");
  }
  res.status(200).json(product);
});

// Get a product by its id
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Match product to its user
  if (product.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("User not authorized");
  }
  await product.remove();
  res.status(200).json({ msg: "product deleted successfully" });
});

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
};
