const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  job: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
      required: true,
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
