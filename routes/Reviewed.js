const express = require("express");
const router = express.Router();
const reviewedController = require("../controller/Reviewed");

router.post("/createReview", reviewedController.createReview);
router.get("/getReview", reviewedController.getReview);
router.get("/getOneReview/:movieId/:userId", reviewedController.getOneReview);

module.exports = router;
