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
      const { userId } = data;

      if (!userId) {
        throw new AppError("User ID is required", StatusCodes.BAD_REQUEST);
      }

      // Fetch all user responses
      const responses = await UserResponse.find({ userId });

      // Map to an array of objects containing questionId and selectedOptionIds
      const formattedResponses = responses.map((response) => ({
        questionId: response.questionId,
        optionIds: response.selectedOptionIds,
      }));

      console.log(formattedResponses);
      return formattedResponses;
    } catch (error) {
      console.error(error);
      throw new AppError(
        "Error while fetching user responses",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async calculateScore(distributionId, preferences) {
    try {
      // Fetch distribution's question-option mappings from MongoDB
      const distributionOptions = await DistributionOptionMapping.find({
        distributionId,
      }).select("questionId optionId -_id");

      if (distributionOptions.length === 0) {
        return 0;
      }

      let score = 0;

      // Iterate through user preferences and match with distribution options
      for (let preference of preferences) {
        const { questionId, optionIds } = preference;

        if (!questionId || !Array.isArray(optionIds)) {
          // Defensive: skip malformed preference object
          continue;
        }

        for (let userOptionId of optionIds) {
          if (!userOptionId) {
            // Defensive: skip undefined/null optionIds
            continue;
          }

          const match = distributionOptions.find((opt) => {
            if (!opt.questionId || !opt.optionId) {
              return false;
            }

            // Convert to string safely before comparison
            return (
              opt.questionId.toString() === questionId.toString() &&
              opt.optionId.toString() === userOptionId.toString()
            );
          });

          if (match) {
            score += 1;
          }
        }
      }

      return score;
    } catch (err) {
      console.error(
        `Error calculating match score for distribution ${distributionId}:`,
        err
      );
      return 0;
    }
  }
}

module.exports = RecommendationRepository;
