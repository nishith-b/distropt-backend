const CrudRepository = require("./crud-repository");
const { Wishlist } = require("../models");

class WishlistRepository extends CrudRepository {
  constructor() {
    super(Wishlist);
  }
}

module.exports = WishlistRepository;
