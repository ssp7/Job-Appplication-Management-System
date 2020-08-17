const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const Job = require("../models/Job");
const User = require("../models/User");
// @route  POST/api/users
// desc    Register a user
// @access public
router.post(
  "/",
  [
    check("name", "Please enter name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter password with 6 or more characters"
    ).isLength({
      min: 6,
    }),
    check("jobName", "Please enter a job").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, jobName } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      let job = await Job.find({ jobName: jobName });
      if (job.length === 0) {
        return res.status(404).json({ msg: "Please enter correct job" });
      }
      user = new User({
        name,
        email,
        password,
        job,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.put("/:id", auth, async (req, res) => {
  const { name, email, job, progress } = req.body;

  const userFields = {};

  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (job) userFields.phone = job;
  if (progress) userFields.progress = progress;

  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(401).json({ msg: "User not found" });

    //Making sure user owns that contact
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
