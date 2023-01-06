const cloudinary = require("cloudinary").v2;
const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: "dhckuejtf",
      api_key: "593525285256374",
      api_secret: "DxBNkV6JBpTMIVwxVUFflcSzElE",
    });
    console.log("Configured cloudinary");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectCloudinary;
