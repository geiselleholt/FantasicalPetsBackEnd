import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 20,
  },
  description: {
    type: String,
    maxlength: 200,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Pet", petSchema);
