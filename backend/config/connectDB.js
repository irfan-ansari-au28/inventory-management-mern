const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Suppress warning
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URI);
    console.log("-------- Database Connected -------");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
