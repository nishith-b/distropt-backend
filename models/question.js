const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const questionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    preview: { type: String },
    allowsMultiple: { type: Boolean, default: false },
    options: [optionSchema],
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
