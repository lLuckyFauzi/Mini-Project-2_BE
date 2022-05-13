const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join("image"),
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(".");
    const splittedFormat = file.mimetype.split("/");
    const extension = splittedFormat[splittedFormat.length - 1];

    cb(null, `/${file.fieldname}-${fileName}.${extension}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
