const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async (req, res) => {
  res.send("product controller");
});

module.exports = {
  createProduct,
};
