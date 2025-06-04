const express = require("express");
const { RecommendationController } = require("../../controllers");
const {} = require("../../middlewares");
const router = express.Router();

router.post("/", RecommendationController.getOptionIds);

router.post("/distros", RecommendationController.getRecommendations);

module.exports = router;
