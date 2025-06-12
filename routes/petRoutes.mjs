import express from "express";
import Pet from "../models/petSchema.mjs";
import Image from "../models/imageSchema.mjs";
import auth from "../middleware/auth.mjs";

const router = express.Router();

//////////
// test route
// router.get("/", async (req, res) => {
//   res.send("Test Route ");
// });
//////////

// @route: POST /api/pet
// @desc:  CREATE new Pet for a user
// @access: Private
router.post("/", auth, async (req, res) => {
  let { name, description, animal1, animal2, imageUrl } = req.body;
  try {
    console.log(req.user);
    const userId = req.user.id;

    if (animal1 > animal2) {
      [animal1, animal2] = [animal2, animal1];
    }

    let image = await Image.findOne({
      animal1: animal1,
      animal2: animal2,
    });

    if (!image) {
      image = await Image.create({
        animal1: animal1,
        animal2: animal2,
        imageUrl: imageUrl,
      });
    }

    const newPet = await Pet.create({
      name,
      description,
      image: image._id,
      user: userId,
    });

    res.status(201).json(newPet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error Creating Pet" });
  }
});

// @route: GET /api/pet/user
// @desc:  READ all pets for the logged-in user
// @access: Private
router.get("/user", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const userPets = await Pet.find({ user: userId }).populate("image");
    res.status(200).json(userPets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error Getting All Pets for one User" });
  }
});

// @route: PUT /api/pet/:id
// @desc:  UPDATE one pet
// @access: Private
router.put("/:id", auth, async (req, res) => {
  try {
    let updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedPet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route: DELETE /api/pet/:id
// @desc:  DELETE one pet
// @access: Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let deletePet = await Pet.findByIdAndDelete(req.params.id);
    res.json(deletePet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route: POST /api/pet/aiDetails
// @desc:  Generate pet name and description using Gemini API
// @access: Public
router.post("/aiDetails", async (req, res) => {
  const { animal1, animal2 } = req.body;

  const prompt = `Generate a creative name and a short, silly 2nd grade description (around 2-3 sentences) for a hybrid animal made from a ${animal1} and a ${animal2}. Provide the output as a JSON object with 'name' and 'description' fields.`;

  ////////// code snippets from Gemini API
  let chatHistory = [];
  chatHistory.push({ role: "user", parts: [{ text: prompt }] });

  const payload = {
    contents: chatHistory,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          name: { type: "STRING" },
          description: { type: "STRING" },
        },
        propertyOrdering: ["name", "description"],
      },
    },
  };

  const geminiApiKey = process.env.GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      const jsonString = result.candidates[0].content.parts[0].text;
      const parsedJson = JSON.parse(jsonString);

      if (parsedJson.name && parsedJson.description) {
        return res.status(200).json(parsedJson);
      } else {
        return res
          .status(500)
          .json({ msg: "AI response missing name or description." });
      }
    } else {
      return res.status(500).json({ msg: "AI did not return valid content." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error generating AI details." });
  }
});

export default router;
