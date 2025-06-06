import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  animal1: {
    type: String,
    required: true,
  },
  animal2: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    unique: true,
  },
});

imageSchema.index(
  { animal1: 1, animal2: 1 },
  {
    unique: true,
  }
);

export default mongoose.model("Image", imageSchema);
