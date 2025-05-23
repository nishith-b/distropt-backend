const { InfoController } = require("../../controllers");

const express = require("express");
const router = express.Router();

const distributionRoutes = require("./distribution-routes");
const archivedRoutes = require("./archived-routes");
const wishlistRoutes = require("./wishlist-routes");

router.get("/info", InfoController.info);

router.use("/distributions", distributionRoutes);

router.use("/archived", archivedRoutes);

router.use("/wishlist", wishlistRoutes);

module.exports = router;
