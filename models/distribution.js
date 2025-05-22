const mongoose = require("mongoose");

const distributionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    latest: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Distribution = mongoose.model("Distribution", distributionSchema);

module.exports = Distribution;
