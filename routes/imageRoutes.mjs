import express from "express";
import "dotenv/config";
import Image from "../models/ImageSchema.mjs";
import images from "../utilities/imageSeedData.mjs";

const router = express.Router();

////// test route //////
// router.get("/", async (req, res) => {
//   res.send("Test Route ");
// });
//////////

// @route: POST /api/image
// @desc:  Find existing image or CREATE a new image
// @access: Public
router.post("/", async (req, res, next) => {
  let { animal1, animal2 } = req.body;

  let existing = await Image.findOne({ animal1, animal2 });

  if (existing) {
    return res.status(200).json({
      imageUrl: existing.imageUrl,
      ImageId: existing._id,
    });
  }

  ////////// code snippet from DeepAI API
  const resp = await fetch("https://api.deepai.org/api/text2img", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.DEEPAI_API_KEY,
    },
    body: JSON.stringify({
      text: `cartoon image of a cute ${animal1} / ${animal2} mix`,
    }),
  });

  const data = await resp.json();

  let newImageUrl = data.output_url;

  const newImage = await Image.create({
    animal1: animal1,
    animal2: animal2,
    imageUrl: newImageUrl,
  });

  res.status(200).json({
    imageUrl: newImageUrl,
    ImageId: newImage._id,
  });
});

// @route: GET /api/image/seed
// @desc: Seed DB information
// @access: Public
router.get("/seed", async (req, res) => {
  try {
    await Image.deleteMany({});

    await Image.create(images);

    res.send("Seeded DB");
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
