const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId, // or String depending on how you store questions
      required: true,
      ref: "Question", // Optional: reference to the Question model
    },
    optionText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Option = mongoose.model("Option", optionSchema);

module.exports = Option;
