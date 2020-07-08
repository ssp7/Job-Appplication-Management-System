const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Job = require("../models/Job");

router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find({});
    var adminData = [];
    let sdCounter = 0;
    let hrCounter = 0;

    for (let i = 0; i <= users.length - 1; i++) {
      let job = await Job.findById(users[i].job);
      if (job.jobName === "Software Developer") {
        sdCounter++;
      } else if (job.jobName === "Human Resources") {
        hrCounter++;
      }
    }
    let sdData = { jobName: "Software Developer", applicants: sdCounter };
    let hrData = { jobName: "Human Resources", applicants: hrCounter };
    adminData.push(sdData);
    adminData.push(hrData);
    res.json(adminData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
