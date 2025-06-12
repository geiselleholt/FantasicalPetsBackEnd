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

export default router;
