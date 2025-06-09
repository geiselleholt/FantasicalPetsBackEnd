import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 3 },
  securityQuestion1: {
    question: { type: String, required: true },
    answer: { type: String, required: true }
  },
  securityQuestion2: {
    question: { type: String, required: true },
    answer: { type: String, required: true }
  },
});

export default mongoose.model("User", userSchema);
