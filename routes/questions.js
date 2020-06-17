const express = require("express");
const router = express.Router();
const Jobs = require("../models/Job");
const QA = require("../models/QuestionAndAnswers");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const Job = require("../models/Job");

// @route  POST /api/questions
// desc    get questions related to a job
// @access private

router.get(
  "/",
  [auth, [check("job", "Job is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { job } = req.body;
    try {
      const questions = await QA.find({ jobName: job });
      res.json(questions);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Sever Error");
    }
  }
);

module.exports = router;
