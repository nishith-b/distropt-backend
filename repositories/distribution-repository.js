const CrudRepository = require("./crud-repository");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { Distribution, ArchivedVersion } = require("../models");

class DistributionRepository extends CrudRepository {
  constructor() {
    super(Distribution);
  }

  async archiveDistribution(data) {
    try {
      const response = await ArchivedVersion.create(data);
      return response;
    } catch (error) {
      throw new AppError(
        "Error while creating resource",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = DistributionRepository;
