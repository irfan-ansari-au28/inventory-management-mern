const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const protect = asyncHandler(async (req, res, next) => {
  try {
    if (!req.headers.authorization.split(" ")[1]) {
      return res.status(403).json({ error: "No credentials sent!" });
    }
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, please login");
    }

    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // Get user id from the token
    const user = await User.findById(verified.id).select("-password");
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, please login");
  }
});

module.exports = protect;
