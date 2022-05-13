const express = require("express");
const router = express.Router();
const controllerMylist = require("../controller/myList");

router.post("/addMylist", controllerMylist.addMyList);
router.get("/getOneMylist/:userId/:movieId", controllerMylist.getOneMyList);
router.get("/getAllMyList", controllerMylist.getAllList);
router.delete("/removeList/:userId/:movieId", controllerMylist.removeFromList);

module.exports = router;
