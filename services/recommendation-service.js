const { StatusCodes } = require("http-status-codes");
const { RecommendationRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const recommendationRepository = new RecommendationRepository();

async function getOptionIds(data) {
  try {
    const response = await recommendationRepository.getOptionIds(data);
    console.log("At Service", response);
    return response;
  } catch (error) {
    throw new AppError(
      "Cannot add user response",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getOptionIds,
};
