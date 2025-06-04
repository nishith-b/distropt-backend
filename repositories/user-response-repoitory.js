const CrudRepository = require("./crud-repository");
const { UserResponse } = require("../models");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

class UserResponseRepository extends CrudRepository {
  constructor() {
    super(UserResponse);
  }

  // Save or update user response for a question (upsert)
  async optionEntry(data) {
    const { userId, questionId, selectedOptionIds } = data;
    try {
      const response = await UserResponse.findOneAndUpdate(
        { userId, questionId },
        {
          $set: {
            selectedOptionIds: selectedOptionIds.map(
              (id) => new mongoose.Types.ObjectId(id)
            ),
          },
        },
        { upsert: true, new: true }
      );
      return response;
    } catch (error) {
      console.error(error);
      throw new AppError(
        "Error while creating or updating user response",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = UserResponseRepository;
