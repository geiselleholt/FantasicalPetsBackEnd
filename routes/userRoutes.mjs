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
router.post("/register", async (req, res, next) => {
  const { userName, password, securityQuestions } = req.body; // destructure request body

  try {
    if (!userName || !password || !securityQuestions) {
      return res.status(400).json({
        msg: "Fill in all required fields",
      });
    }

    let user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ msg: "User name already exists" });
    }

    user = new User({ userName, password, securityQuestions });

    await user.save();

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

// @route: POST /api/user/login
// @desc:  Authenticate user and log them in
// @access: Public
router.post("/login", async (req, res, next) => {
  const { userName, password } = req.body; // destructure request body

  try {
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
  } catch (error) {
    next(error);
  }
});

// @route: GET /api/user/all
// @desc:  READ all user data
// @access: Public (for dev testing, not to be used on the FrontEnd)
router.get("/all", async (req, res) => {
  try {
    let allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});

export default router;
