const { StatusCodes } = require("http-status-codes");
const { DistributionRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const distributionRepository = new DistributionRepository();

async function createDistribution(data) {
  try {
    const distribution = await distributionRepository.create(data);
    return distribution;
  } catch (error) {
    throw new AppError(
      "Cannot create a Distribution",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getDistribution(data) {
  try {
    const distribution = await distributionRepository.get(data);
    return distribution;
  } catch (error) {
    throw new AppError(
      "Cannot get a Distribution",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getDistributions() {
  try {
    const distributions = await distributionRepository.getAll();
    return distributions;
  } catch (error) {
    throw new AppError(
      "Cannot get all Distributions",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteDistribution(data) {
  try {
    const distribution = await distributionRepository.destroy(data);
    return distribution;
  } catch (error) {
    throw new AppError(
      "Cannot delete a Distribution",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateDistribution(id, data) {
  try {
    const distribution = await distributionRepository.update(id, data);
    return distribution;
  } catch (error) {
    throw new AppError(
      "Cannot update a Distribution",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function archiveDistribution(id) {
  try {
    const distribution = await distributionRepository.get(id);
    if (!distribution) {
      throw new AppError("Distribution not found", StatusCodes.NOT_FOUND);
    }
    const { name, version, release_date, features } = distribution;
    const data = { name, version, release_date, features };
    const archived = await distributionRepository.archiveDistribution(data);
    if (archived) {
      await distributionRepository.destroy(id);
    }
    return archived;
  } catch (error) {
    throw new AppError(
      "Cannot archive a Distribution",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createDistribution,
  getDistribution,
  getDistributions,
  deleteDistribution,
  updateDistribution,
  archiveDistribution,
};
