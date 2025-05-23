const mongoose = require("mongoose");

const archivedVersionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
    },
    features: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ArchivedVersion", archivedVersionSchema);
