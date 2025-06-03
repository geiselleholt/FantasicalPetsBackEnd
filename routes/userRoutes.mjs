import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();

////////////
// test route
// router.get("/", (req, res) => {
//   res.send("Testing Routes");
// });
////////////

// @route: POST /api/user/register
// @desc:  CREATE a register user route
// @access: Public
router.post("/register", async (req, res) => {
  const { userName, password, questions } = req.body; // destructure request body

  if (!userName || !password || !questions) {
    return res.status(400).json({
      msg: "Fill in all required fields",
    });
  }

  let user = await User.findOne({ userName });
  if (user) {
    return res.status(400).json({ msg: "User name already exists" });
  }

  user = new User({ userName, password, questions });

  res.status(201).json({ user });
});

// @route: POST /api/user/login
// @desc:  CREATE a login user route
// @access: Public
router.post("/login", async (req, res) => {
  const { userName, password } = req.body; // destructure request body

  if (!userName || !password) {
    return res.status(400).json({
      msg: "All fields are required",
    });
  }

  let user = await User.findOne({ userName });
  if (!user) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  if (password != user.password) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  res.status(200).json({ userId: user._id });
});

// @route: GET /api/user/login
// @desc:  READ all user data
// @access: Private
router.get("/", async (req, res) => {
  let allUsers = await User.find({});
  res.status(200).json(allUsers);
});

export default router;
