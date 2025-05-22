const express = require("express");
const { DistributionController } = require("../../controllers");
const {} = require("../../middlewares");
const router = express.Router();

// /api/v1/distributions POST
router.post(
  "/",
  //AirplaneMiddleware.validateCreateRequest,
  DistributionController.createDistribution
);

/* // /api/v1/airplanes GET
router.get("/", AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
router.get("/:id", AirplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE
router.delete("/:id", AirplaneController.destroyAirplane);

*/

module.exports = router;
