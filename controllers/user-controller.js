const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const bcryptjs = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");

async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const response = await UserService.createUser({
      username: username,
      email: email,
      password: hashedPassword,
    });
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}
module.exports = {
  createUser,
};
