import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  img: { type: String, required: true },
});

export default mongoose.model("Pet", petSchema);
