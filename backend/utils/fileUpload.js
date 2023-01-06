const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date.toISOString().replace(/:/g, "-")) +
      "-" +
      file.originalname;
  },
});

// Specify file formats that can be saved

function fileFilter(req, file, cb) {
  if (
    file.mimeType === "image/png" ||
    file.mimeType === "image/jpg" ||
    file.mimeType === "image/jpeg"
  ) {
    cb(null, false);
  } else {
    cb(null, true);
  }
}

const upload = multer({ storage, fileFilter });

module.exports = upload;
