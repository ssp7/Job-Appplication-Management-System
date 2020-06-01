const express = require("express");
const router = express.Router();
const QA = require("../models/QuestionAndAnswers");

// @route  GET /api/questions
// desc    get questions related to a job
// @access private

router.get("/", async (req, res) => {
  const jobName = "Software Developer";
  const question1 = new QA({
    jobName: jobName,
    question: "What does MVC stands for?",
    option1: "Model View Controller",
    option2: "Model Load Cannot",
    option3: "Make View Controller",
    option4: "Most Viwed Controller",
    correctAns: "Model View Controller",
  });
  const question2 = new QA({
    jobName: jobName,
    question: "What is fullstack?",
    option1: "Only frontend",
    option2: "Only Backend",
    option3: "Frontend and Backend",
    option4: "None",
    correctAns: "Frontend and Backend",
  });
  await question1.save();
  await question2.save();

  const questions = await QA.find({ jobName: jobName });
  res.json(questions);
});

module.exports = router;
