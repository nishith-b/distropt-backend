const { UserResponseService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function optionEntry(req, res) {
  try {
    const { userId, questionId, selectedOptionIds } = req.body;

    const response = UserResponseService.optionEntry({
      userId,
      questionId,
      selectedOptionIds,
    });
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  optionEntry,
};
