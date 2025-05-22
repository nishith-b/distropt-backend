const { InfoController } = require("../../controllers");

const express = require("express");
const router = express.Router();

const distributionRoutes = require("./distribution-routes");

router.get("/info", InfoController.info);

router.use("/distributions", distributionRoutes);

module.exports = router;
