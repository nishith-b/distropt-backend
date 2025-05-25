const { WishlistRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const wishlistRepository = new WishlistRepository();

async function addToWishlist(data) {
  try {
    console.log("Hello Agian");
    const wishlist = await wishlistRepository.create(data);
    return wishlist;
  } catch (error) {
    throw new AppError(
      "Cannot add to wishlist",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getByUserId(userId) {
  try {
    const wishlist = await wishlistRepository.getAllItems(userId);
    return wishlist;
  } catch (error) {
    throw new AppError(
      "Cannot find wishlist",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function removeDistribution(id) {
  try {
    const wishlist = await wishlistRepository.destroy(id);
    return wishlist;
  } catch (error) {
    throw new AppError(
      "Cannot Remove an Distribution From Wishlist",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  addToWishlist,
  getByUserId,
  removeDistribution,
};
