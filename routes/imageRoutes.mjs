import express from "express";
import dotenv from "dotenv";
import Image from "../models/imageSchema.mjs";
import images from "../utilities/imageSeedData.mjs";

dotenv.config();

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

  if (animal1 > animal2) {
    [animal1, animal2] = [animal2, animal1];
  }

  let existing = await Image.findOne({ animal1, animal2 });

  if (existing) {
    return res.status(200).json({
      imageUrl: existing.imageUrl,
      defaultName: existing.defaultName || "",
      defaultDescription: existing.defaultDescription || "",
    });
  }

  try {
    ////////// code snippet from DeepAI API
    const resp = await fetch("https://api.deepai.org/api/text2img", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.DEEPAI_API_KEY,
      },
      body: JSON.stringify({
        text: `cartoon image of a cute ${animal1} / cute ${animal2} hybrid`,
      }),
    });

    const data = await resp.json();
    console.log(data);
    let newImageUrl = data.share_url;

    return res.status(200).json({
      imageUrl: newImageUrl,
      defaultName: "",
      defaultDescription: "",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "DeepAI did not return a valid image" });
  }
});

// @route: GET /api/image/seed
// @desc: SEED image data into DB
// @access: Public
// router.get("/seed", async (req, res) => {
//   try {
//     await Image.deleteMany({});

//     await Image.create(images);

//     return res.send("Seeded DB");
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ msg: "Server Error" });
//   }
// });

export default router;
