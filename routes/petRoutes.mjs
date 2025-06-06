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
// @desc:  CREATE new Pet
// @access: Public
router.post("/", async (req, res, next) => {
  const { name, description, image, user } = req.body;
  try {
    const newPet = await Pet.create({
      name,
      description,
      image,
      user,
    });
    res.status(201).json(newPet);
  } catch (error) {
    next(error);
  }
});

// @route: GET /api/pet/user
// @desc:  READ all pets for the logged-in user
// @access: Private
router.get("/user", auth, async (req, res, next) => {
  try {
    const userId = req.user;
    const userPets = await Pet.find({ user: userId });
    res.status(200).json(userPets);
  } catch (error) {
    next(error);
  }
});

// @route: GET /api/pet/:id
// @desc:  READ one pet
// @access: Public
router.get("/:id", async (req, res, next) => {
  try {
    const onepet = await Pet.findById(req.params.id);
    res.json(onepet);
  } catch (error) {
    next(error);
  }
});

// @route: PUT /api/pet/:id
// @desc:  UPDATE one pet
// @access: Private
router.put("/:id", auth, async (req, res, next) => {
  try {
    let updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedPet);
  } catch (error) {
    next(error);
  }
});

// @route: DELETE /api/pet/:id
// @desc:  DELETE one pet
// @access: Private
router.delete("/:id", auth, async (req, res, next) => {
  try {
    let deletePet = await Pet.findByIdAndDelete(req.params.id);
    res.json(deletePet);
  } catch (error) {
    next(error);
  }
});

export default router;
