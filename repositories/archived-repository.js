const CrudRepository = require("./crud-repository");
const { ArchivedVersion } = require("../models");

class ArchivedVersionRepository extends CrudRepository {
  constructor() {
    super(ArchivedVersion);
  }
}

module.exports = ArchivedVersionRepository;
