const express = require("express");
const router = express.Router();
const controllerComment = require("../controller/comment");

router.post("/createComment", controllerComment.createComment);
router.get("/getAllComment", controllerComment.getAllComment);

module.exports = router;
