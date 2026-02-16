const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create absolute uploads path
const uploadsPath = path.join(__dirname, "..", "uploads");

// Ensure uploads folder exists
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg and .png formats are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;



// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only .jpeg, .jpg and .png formats are allowed"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });

// module.exports = upload;

