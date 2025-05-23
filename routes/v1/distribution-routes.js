const express = require("express");
const { DistributionController } = require("../../controllers");
const {} = require("../../middlewares");
const router = express.Router();

// /api/v1/distributions POST
router.post("/", DistributionController.createDistribution);

// /api/v1/distributions GET
router.get("/", DistributionController.getDistributions);

// /api/v1/distributions/:id GET
router.get("/:id", DistributionController.getDistributions);

// /api/v1/distributions/:id DELETE
router.delete("/:id", DistributionController.deleteDistributions);

// /api/v1/distributions/:id PATCH
router.patch("/:id", DistributionController.updateDistribution);

// /api/v1/distributions/archive/:id PATCH
router.post("/archive/:id", DistributionController.archiveDistribution);

module.exports = router;
