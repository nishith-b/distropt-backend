const express = require("express");
const { RecommendationController } = require("../../controllers");
const {} = require("../../middlewares");
const router = express.Router();

router.post("/", RecommendationController.getOptionIds);

module.exports = router;
