const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const errorHandler = require("./middleWares/errorHandler");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const path = require("path");
const connectCloudinary = require("./config/connectCloudinary");

dotenv.config();

const app = express();

// Config cloudinary

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Server is running on 5000");
});

// ERROR Handle
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to DB
    await connectDB();
    await connectCloudinary();
    // Server
    app.listen(PORT, () => {
      console.log(`+++++++ Server is running on port ${PORT} ++++++++`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
