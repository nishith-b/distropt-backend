const CrudRepository = require("./crud-repository");
const { Wishlist } = require("../models");

class WishlistRepository extends CrudRepository {
  constructor() {
    super(Wishlist);
  }

  async getAllItems(id) {
    const wishlist = await Wishlist.find({ userId: id }).populate(
      "distributionId"
    );
    if (!wishlist) {
      throw new AppError(
        "Not able to find the resource",
        StatusCodes.NOT_FOUND
      );
    }
    return wishlist;
  }
}

module.exports = WishlistRepository;
