const { StatusCodes } = require("http-status-codes");
const { DistributionRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const distributionRepository = new DistributionRepository();

async function createDistribution(data) {
  try {
    const distribution = await distributionRepository.create(data);
    console.log("HEllo",distribution);
    return distribution;
  } catch (error) {
    throw new AppError(
      "Cannot create a Distribution",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createDistribution };
