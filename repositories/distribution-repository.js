const CrudRepository = require("./crud-repository");
const { Distribution } = require("../models");

class DistributionRepository extends CrudRepository {
  constructor() {
    super(Distribution);
  }
}

module.exports = DistributionRepository;
