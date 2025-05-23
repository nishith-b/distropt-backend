const { StatusCodes } = require("http-status-codes");
const { ArchivedVersionRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const archivedVersionRepository = new ArchivedVersionRepository();

async function createArchived(data) {
  try {
    const archived = await archivedVersionRepository.create(data);
    return archived;
  } catch (error) {
    throw new AppError(
      "Cannot create a archived",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getArchived(data) {
  try {
    const archived = await archivedVersionRepository.get(data);
    return archived;
  } catch (error) {
    throw new AppError(
      "Cannot get a archived",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getArchives() {
  try {
    const archives = await archivedVersionRepository.getAll();
    return archives;
  } catch (error) {
    throw new AppError(
      "Cannot get all archives",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteArchived(data) {
  try {
    const archived = await archivedVersionRepository.destroy(data);
    return archived;
  } catch (error) {
    throw new AppError(
      "Cannot delete a archived",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateArchived(id, data) {
  try {
    const archived = await archivedVersionRepository.update(id, data);
    return archived;
  } catch (error) {
    throw new AppError(
      "Cannot update a archived",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createArchived,
  getArchived,
  getArchives,
  deleteArchived,
  updateArchived,
};
