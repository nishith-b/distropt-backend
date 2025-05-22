const { DistributionService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function createDistribution(req, res) {
  try {
    console.log(req.body);
    const response = await DistributionService.createDistribution({
      name: req.body.name,
      description: req.body.description,
      features: req.body.features,
      version: req.body.version,
      release_date: req.body.release_date,
      latest: req.body.latest,
    });
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createDistribution,
};
