const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  jobName: {
    type: String,
    required: true,
    unique: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuestionAndAnswers",
    },
  ],
  progress: {
    type: Number,
    require: true,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("job", JobSchema);
