const { RecommendationService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function getOptionIds(req, res) {
  try {
    const { userId } = req.body;
    const response = await RecommendationService.getOptionIds({
      userId,
    });
    console.log("At controller", response);
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getRecommendations(req, res) {
  try {
    const limit = req.body.limit || 1;
    const userId = req.body.userId || req.userId;
    const response = await RecommendationService.getRecommendations({
      limit,
      userId,
    });
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  getOptionIds,
  getRecommendations,
};
