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
      console.log(uploadedFile, "-----");
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

module.exports = {
  createProduct,
};
