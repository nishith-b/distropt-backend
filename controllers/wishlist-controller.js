const { WishlistService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function addToWishlist(req, res) {
  const { userId } = req; //Getting From middleware but for now include it manually in req object
  const { distributionId } = req.body;
  try {
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

module.exports = {
  addToWishlist,
};
