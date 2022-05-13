require("dotenv").config();
const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const uploadMiddlerware = require("../middleware/multer");

router.post("/sign_up", userController.signUp);
router.post("/login", userController.login);
router.put("/update/:id", userController.update);
router.get("/get_one_user/:id", userController.getOneUser);
router.put(
  "/upload/:id",
  uploadMiddlerware.single("image"),
  userController.upload
);
router.get("/getalluser", userController.getAllUser);

module.exports = router;
