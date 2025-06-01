const mongoose = require("mongoose");

const userResponseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Question",
    },
    response: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserResponse = mongoose.model("UserResponse", userResponseSchema);

module.exports = UserResponse;
