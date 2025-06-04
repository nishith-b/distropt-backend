const CrudRepository = require("./crud-repository");
const {
  UserResponse,
  DistributionOptionMapping,
  Distribution,
} = require("../models");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

class RecommendationRepository {
  async getOptionIds(data) {
    try {
      // Extract userId (or other filters) from data
      const { userId } = data;

      if (!userId) {
        throw new AppError("User ID is required", StatusCodes.BAD_REQUEST);
      }

      //Find all responses by this user
      const responses = await UserResponse.find({ userId });

      // Flatten all selected option IDs (assuming response field holds option IDs)
      const selectedOptionIds = responses.flatMap((r) => r.selectedOptionIds);

      console.log(selectedOptionIds);
      console.log(responses);
      return selectedOptionIds;
    } catch (error) {
      console.error(error);
      throw new AppError(
        "Error while fetching user responses",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = RecommendationRepository;
