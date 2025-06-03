import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 3 },
  securityQuestions: {
    type: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    _id: false,
    required: true,
    validate: {
      validator: function (arr) {
        return arr.length === 3;
      },
      message: `Please provide exactly 3 security questions.`,
    },
  },
});

export default mongoose.model("User", userSchema);
