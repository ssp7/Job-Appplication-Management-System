const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Job = require("../models/Job");

router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find({});
    var adminData = [];
    for (let i = 0; i <= users.length - 1; i++) {
      const userObject = { name: "", jobName: "", progress: "" };
      userObject["name"] = users[i].name;
      let job = await Job.findById(users[i].job);
      userObject["jobName"] = job.jobName;
      userObject["progress"] = users[i].progress;
      //console.log(i);
      adminData.push(userObject);
    }
    res.json(adminData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
