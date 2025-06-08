import express from "express";
import Pet from "../models/petSchema.mjs";
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
    const user = req.user.id;

    const newPet = await Pet.create({
      name,
      description,
      image,
      user,
    });
    res.status(201).json(newPet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route: GET /api/pet/user
// @desc:  READ all pets for the logged-in user
// @access: Private
router.get("/user", auth, async (req, res) => {
  try {
    const userId = req.user;
    const userPets = await Pet.find({ user: userId });
    res.status(200).json(userPets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route: GET /api/pet/:id
// @desc:  READ one pet
// @access: Public
router.get("/:id", async (req, res) => {
  try {
    const onepet = await Pet.findById(req.params.id);
    res.json(onepet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
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
