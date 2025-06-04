const { StatusCodes } = require("http-status-codes");
const { QuestionRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const questionRepository = new QuestionRepository();

async function getQuestions() {
  try {
    const response = questionRepository.getAll();
    return response;
  } catch (error) {
    throw new AppError(
      "Cannot get a question",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getQuestions,
};
