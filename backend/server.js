const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const { urlencoded } = require("body-parser");
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running on 5000");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to DB
    await connectDB();
    // Server
    app.listen(PORT, () => {
      console.log(`+++++++ Server is running on port ${PORT} ++++++++`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
