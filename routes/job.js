const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const QA = require("../models/QuestionAndAnswers");

const Jobs = require("../models/Job");
// @route  GET /api/job
// desc    Get jobs
// @access public
router.get("/", async (req, res) => {
  try {
    const jobName = "Software Developer";
    const questionsForJob = await QA.find({ jobName: jobName });
    const job1 = new Jobs({
      jobName: jobName,
      QA: questionsForJob,
    });
    await job1.save();
    const job2 = new Jobs({
      jobName: "Human Resources",
    });
    await job2.save();
    const jobs = await Jobs.find();
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  PUT /api/job
// desc    Update a job status
// @access public
router.put("/:id", (req, res) => {
  res.send("Updating a job status");
});

// @route  DELETE /api/job
// desc    Delete an applied job
// @access public
router.delete("/:id", (req, res) => {
  res.send("Delete an applied job");
});

module.exports = router;
