const asyncHandler = require("express-async-handler");

const contactUs = asyncHandler(async (req, res) => {
  res.send("contactus");
});

module.exports = { contactUs };
