const { WishlistService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function addToWishlist(req, res) {
  req.userId = "6832668895a0fe36045ac683";
  const { userId } = req; //Getting From middleware but for now include it manually in req object
  const { distributionId } = req.body;
  try {
    console.log("Hello");
    const response = await WishlistService.addToWishlist({
      userId,
      distributionId,
    });
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getByUserId(req, res) {
  req.userId = "6832668895a0fe36045ac683";
  const { userId } = req; //Getting From middleware but for now include it manually in req object
  try {
    const response = await WishlistService.getByUserId(userId);
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.OK);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function removeDistribution(req, res) {
  try {
    const response = await WishlistService.removeDistribution(req.params.id);
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  addToWishlist,
  getByUserId,
  removeDistribution,
};
