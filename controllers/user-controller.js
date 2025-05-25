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

async function authenticateUser(req, res) {
  try {
    const { email, password } = req.body;
    const hashedPassword =
      "$2b$10$nB0rpjtKWzlLbPyTHqP35e/XbVGP5TjcwvOUc1HM.1x/IfZWf/Ur.";
    const response = await bcrypt.compare(password, hashedPassword);
    SuccessResponse.data = response;
    return res.json(SuccessResponse).status(StatusCodes.CREATED);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function isAdmin(req, res) {}
async function getProfile(req, res) {}
async function getAllUsers(req, res) {}
async function editProfile(req, res) {}
async function deleteUser(req, res) {}
async function adminEditProfile(req, res) {}
async function adminDeleteUser(req, res) {}

module.exports = {
  createUser,
  authenticateUser,
  isAdmin,
  getProfile,
  getAllUsers,
  editProfile,
  deleteUser,
  adminDeleteUser,
  adminEditProfile,
};
