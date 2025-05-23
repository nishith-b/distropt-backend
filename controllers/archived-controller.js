const { ArchivedVersionService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function createArchived(req, res) {
  try {
    const response = await ArchivedVersionService.createArchived({
      name: req.body.name,
      version: req.body.version,
      release_date: req.body.release_date,
      features: req.body.features,
    });
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getArchived(req, res) {
  try {
    const response = await ArchivedVersionService.getArchived(req.params.id);
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getArchives(req, res) {
  try {
    const response = await ArchivedVersionService.getArchives();
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function deleteArchived(req, res) {
  try {
    const response = await ArchivedVersionService.deleteArchived(req.params.id);
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function updateArchived(req, res) {
  try {
    const response = await ArchivedVersionService.updateArchived(
      req.params.id,
      {
        name: req.body.name,
        version: req.body.version,
        release_date: req.body.release_date,
        features: req.body.features,
      }
    );
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createArchived,
  getArchived,
  getArchives,
  updateArchived,
  deleteArchived,
};
