const { InfoController } = require("../../controllers");

const express = require("express");
const router = express.Router();

const distributionRoutes = require("./distribution-routes");
const archivedRoutes = require("./archived-routes");
const wishlistRoutes = require("./wishlist-routes");
const userRoutes = require("./user-routes");
const recommendationRoutes = require("./recommendation-routes");
const userResponseRoutes = require("./user-response-routes");
const questionRoutes = require("./questions-routes");
const { replaceOne } = require("../../models/distribution-option-mapping");

router.get("/info", InfoController.info);

router.use("/distributions", distributionRoutes);

router.use("/archived", archivedRoutes);

router.use("/wishlist", wishlistRoutes);

router.use("/user", userRoutes);

router.use("/recommendations", recommendationRoutes);

router.use("/user-response", userResponseRoutes);

router.use("/questions", questionRoutes);

module.exports = router;
