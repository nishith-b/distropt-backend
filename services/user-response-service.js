const { StatusCodes } = require("http-status-codes");
const { UserResponseRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const userResponseRepository = new UserResponseRepository();

async function optionEntry(data) {
  try {
    const response = await userResponseRepository.optionEntry(data);
    return response;
  } catch (error) {
    throw new AppError(
      "Cannot add user response",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  optionEntry,
};
