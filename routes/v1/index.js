const { InfoController } = require("../../controllers");

const express = require("express");
const router = express.Router();

const distributionRoutes = require("./distribution-routes");
const archivedRoutes = require("./archived-routes");

router.get("/info", InfoController.info);

router.use("/distributions", distributionRoutes);

router.use("/archived", archivedRoutes);

module.exports = router;
