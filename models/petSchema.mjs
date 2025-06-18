import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
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
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Pet", petSchema);