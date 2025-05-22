const { DistributionService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function createDistribution(req, res) {
  try {
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

async function getDistribution(req, res) {
  try {
    const response = await DistributionService.getDistribution(req.params.id);
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getDistributions(req, res) {
  try {
    const response = await DistributionService.getDistributions();
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function deleteDistributions(req, res) {
  try {
    const response = await DistributionService.deleteDistribution(
      req.params.id
    );
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function updateDistribution(req, res) {
  try {
    const response = await DistributionService.updateDistribution(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        features: req.body.features,
        version: req.body.version,
        release_date: req.body.release_date,
        latest: req.body.latest,
      }
    );
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createDistribution,
  getDistribution,
  getDistributions,
  updateDistribution,
  deleteDistributions,
};
