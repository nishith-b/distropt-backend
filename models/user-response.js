const mongoose = require("mongoose");

const userResponseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  selectedOptionIds: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model("UserResponse", userResponseSchema);
