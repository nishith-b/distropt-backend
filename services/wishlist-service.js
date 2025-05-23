const { WishlistRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const wishlistRepository = new WishlistRepository();

async function addToWishlist(data) {
  try {
    const wishlist = await wishlistRepository.create(data);
    return wishlist;
  } catch (error) {
    throw new AppError(
      "Cannot create a archived",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getWishlists() {
  try {
    const wishlist = await wishlistRepository.create(data);
    return wishlist;
  } catch (error) {
    throw new AppError(
      "Cannot add to wishlist",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function deleteWishlist() {
  try {
    const wishlist = await wishlistRepository.create();
    return wishlist;
  } catch (error) {
    throw new AppError(
      "Cannot create a archived",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  addToWishlist,
};
