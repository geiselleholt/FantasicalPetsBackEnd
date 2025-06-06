import express from "express";
import Hybrid from "../models/Hybrid.mjs";
import "dotenv/config";

const router = express.Router();

//////////
// test route
// router.get("/", async (req, res) => {
//   res.send("Test Route ");
// });
//////////

// @route: POST /api/image
// @desc:  Find existing image in Hybrid db or CREATE a new image
// @access: Public

router.post("/hybrid", async (req, res, next) => {
  let { animal1, animal2 } = req.body;

  let existing = await Hybrid.findOne({ animal1, animal2 });

  if (existing) {
    return res.status(200).json({
      imageUrl: existing.imageUrl,
      hybridId: existing._id,
    });
  }

  // code snippet from DeepAI API
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

  const newHybrid = await Hybrid.create({
    animal1: animal1,
    animal2: animal2,
    imageUrl: newImageUrl,
  });

  res.status(200).json({
    imageUrl: newImageUrl,
    hybridId: newHybrid._id,
  });
});

export default router;
