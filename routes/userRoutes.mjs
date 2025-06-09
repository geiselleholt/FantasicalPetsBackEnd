import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.mjs";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

////////////
// test route
// router.get("/", (req, res) => {
//   res.send("Testing Routes");
// });
////////////

// @route: POST /api/user/signUp
// @desc:  CREATE a register user route
// @access: Public
router.post("/signUp", async (req, res) => {
  const { userName, password, securityQuestion1, securityQuestion2 } = req.body; // destructure request body

  try {
    if (!userName || !password || !securityQuestion1 || !securityQuestion2 ||
        !securityQuestion1.question || !securityQuestion1.answer ||
        !securityQuestion2.question || !securityQuestion2.answer) {
      return res.status(400).json({
        msg: "Fill in all required fields",
      });
    }

    let user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ msg: "User name already exists" });
    }

    user = new User({ userName, password, securityQuestion1, securityQuestion2 });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      id: user._id,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          return res.status(500).json({
            msg: "Could not generate JWT authentication token",
          });
        }

        res.status(201).json({ token });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error during Sign Up" });
  }
});

// @route: POST /api/user/signIn
// @desc:  Authenticate user and log them in
// @access: Public
router.post("/signIn", async (req, res) => {
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

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      id: user._id,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          return res.status(500).json({
            msg: "Could not generate JWT authentication token",
          });
        }
        res.status(200).json({
          token,
          userId: user._id,
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error during Sign In" });
  }
});



export default router;
