const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Question", QuestionSchema);
