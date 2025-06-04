const { StatusCodes } = require("http-status-codes");
const {
  RecommendationRepository,
  DistributionRepository,
} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const recommendationRepository = new RecommendationRepository();
const distributionRepository = new DistributionRepository();

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

async function getRecommendations(data) {
  try {
    const { userId, limit } = data;
    const preferences = await recommendationRepository.getOptionIds({ userId });
    if (!preferences || preferences.length === 0) {
      return res
        .status(400)
        .json({ error: "No preferences found for this user." });
    }
    const distributions = await distributionRepository.getAll();
    if (!distributions || distributions.length === 0) {
      return res.status(404).json({ error: "No distributions found." });
    }
    const distributionsWithScores = [];
    for (const distribution of distributions) {
      const matchScore = await recommendationRepository.calculateScore(
        distribution._id,
        preferences
      );
      distributionsWithScores.push({ distribution, matchScore });
    }
    distributionsWithScores.sort((a, b) => b.matchScore - a.matchScore);
    const topRecommendations = distributionsWithScores
      .slice(0, limit)
      .map((item) => item.distribution);
    return topRecommendations;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot get recommendations",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getOptionIds,
  getRecommendations,
};
