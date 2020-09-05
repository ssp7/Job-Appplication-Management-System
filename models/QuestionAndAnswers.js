const mongoose = require("mongoose");
const QuestionAndAnswerSchema = mongoose.Schema({
  jobName: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  correctAns: {
    type: String,
    required: true,
  },
  givenAnswer: {
    type: String,
    required: false,
  },
  correct: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("QA", QuestionAndAnswerSchema);
