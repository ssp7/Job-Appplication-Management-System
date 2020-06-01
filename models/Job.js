const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  jobName: {
    type: String,
    required: true,
    unique: true,
  },
  QA: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QA",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("job", JobSchema);
