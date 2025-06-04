const mongoose = require("mongoose");

const distributionOptionMappingSchema = new mongoose.Schema({
  optionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  distributionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Distribution",
    required: true,
  },
});

module.exports = mongoose.model(
  "DistributionOptionMapping",
  distributionOptionMappingSchema
);
