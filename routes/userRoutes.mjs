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
// @desc:  CREATE a token and signUp a User
// @access: Public
router.post("/signUp", async (req, res) => {
  const { userName, password, securityQuestion1, securityQuestion2 } = req.body;

  try {
    const normalizedUserName = userName ? userName.trim().toLowerCase() : "";
    const normalizedPassword = password ? password.trim().toLowerCase() : "";
    const normalizedSecurityQuestion1Answer = securityQuestion1.answer
      ? securityQuestion1.answer.trim().toLowerCase()
      : "";
    const normalizedSecurityQuestion2Answer = securityQuestion2.answer
      ? securityQuestion2.answer.trim().toLowerCase()
      : "";

    if (
      !normalizedUserName ||
      !normalizedPassword ||
      !securityQuestion1.question ||
      !normalizedSecurityQuestion1Answer ||
      !securityQuestion2.question ||
      !normalizedSecurityQuestion2Answer
    ) {
      return res.status(400).json({
        msg: "Fill in all required fields",
      });
    }

    let user = await User.findOne({ userName: normalizedUserName });
    if (user) {
      return res.status(400).json({ msg: "User name already exists" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(normalizedPassword, salt);
    const hashedSecurityAnswer1 = await bcrypt.hash(
      normalizedSecurityQuestion1Answer,
      salt
    );
    const hashedSecurityAnswer2 = await bcrypt.hash(
      normalizedSecurityQuestion2Answer,
      salt
    );

    user = new User({
      userName: normalizedUserName,
      password: hashedPassword,
      securityQuestion1: {
        question: securityQuestion1.question,
        answer: hashedSecurityAnswer1,
      },
      securityQuestion2: {
        question: securityQuestion2.question,
        answer: hashedSecurityAnswer2,
      },
    });

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
// @desc:  CREATE a token to authenticate and signIn a User
// @access: Public
router.post("/signIn", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const normalizedUserName = userName ? userName.trim().toLowerCase() : "";

    if (!userName || !password) {
      return res.status(400).json({
        msg: "All fields are required",
      });
    }

    let user = await User.findOne({ userName: normalizedUserName });
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

// @route: POST /api/user/questions
// @desc:  Find User and return their security questions
// @access: Public
router.post("/questions", async (req, res) => {
  const { userName } = req.body;
  const normalizedUserName = userName ? userName.trim().toLowerCase() : "";
  try {
    if (!normalizedUserName) {
      return res.status(400).json({ msg: "Username is required." });
    }

    const user = await User.findOne({ userName: normalizedUserName });

    if (!user) {
      return res.status(404).json({ msg: "Username not found" });
    }

    res.status(200).json({
      question1: user.securityQuestion1.question,
      question2: user.securityQuestion2.question,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error getting questions" });
  }
});

// @route: POST /api/user/answers
// @desc:  Verify security answers and signIn User
// @access: Public
router.post("/answers", async (req, res) => {
  const { userName, answer1, answer2 } = req.body;
  const normalizedUserName = userName ? userName.trim().toLowerCase() : "";
  const normalizedAnswer1 = answer1 ? answer1.trim().toLowerCase() : "";
  const normalizedAnswer2 = answer2 ? answer2.trim().toLowerCase() : "";

  try {
    if (!normalizedUserName || (!normalizedAnswer1 && !normalizedAnswer2)) {
      return res
        .status(400)
        .json({ msg: "Username and at least one answer are required." });
    }

    const user = await User.findOne({ userName: normalizedUserName });

    let isAnswer1Correct = false;
    let isAnswer2Correct = false;

    if (normalizedAnswer1) {
      isAnswer1Correct = await bcrypt.compare(
        normalizedAnswer1,
        user.securityQuestion1.answer
      );
    }
    if (normalizedAnswer2) {
      isAnswer2Correct = await bcrypt.compare(
        normalizedAnswer2,
        user.securityQuestion2.answer
      );
    }

    if (!isAnswer1Correct && !isAnswer2Correct) {
      return res.status(400).json({ msg: "Incorrect answer(s)" });
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
            msg: "Could not generate JWT authentication token for login",
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
    res.status(500).json({ msg: "Server Error getting answers" });
  }
});

export default router;
