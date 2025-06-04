const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // manually set to keep track of option ID
  optionText: {
    type: String,
    required: true,
  },
});

const questionSchema = new mongoose.Schema({
  questionText: { 
    type: String, 
    required: true 
  },
  questionPreview: String,
  allowsMultipleAnswers: { type: Boolean, default: false },
  options: [optionSchema],
});

module.exports = mongoose.model("Question", questionSchema);
