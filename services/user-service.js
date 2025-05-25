const { UserRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const userRepository = new UserRepository();

async function createUser(data) {
  try {
    //Password Hashing
    const user = await userRepository.create(data);
    return user;
  } catch (error) {
    throw new AppError(
      "Cannot create a user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function authenticateUser(data) {
  
}

module.exports = {
  createUser,
  authenticateUser
};
