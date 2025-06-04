const CrudRepository = require("./crud-repository");
const { UserResponse } = require("../models");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

  // Get all selected option IDs for a user (flattened)
 /* async getOptionIds(userId) {
    try {
      const responses = await UserResponse.find({ userId });
      const selectedOptionIds = responses.flatMap(r => r.response);
      return selectedOptionIds;
    } catch (error) {
      console.error(error);
      throw new AppError(
        "Error while fetching user responses",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
    */