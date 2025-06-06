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
// @desc:  CREATE admin data
// @access: Public
router.post("/", async (req, res, next) => {
  const { name, imageUrl, description } = req.body;
  try {
    const ownerId = req.user.id;

    if (!name || !imageUrl) {
      return res.status(400).json({ msg: "Missing name or image" });
    }

    const newPet = await Pet.create({
      name,
      imageUrl,
      description,
      owner: ownerId,
    });
    res.status(201).json(newPet);
  } catch (error) {
    next(error);
  }
});

// @route: GET /api/pet/all
// @desc:  READ all pets
// @access: Public (for dev testing, not to be used on the FrontEnd)
router.get("/all", async (req, res) => {
  try {
    const allpets = await Pet.find({});
    res.json(allpets);
  } catch (error) {
    next(error);
  }
});

// @route: GET /api/pets/my
// @desc:  READ all pets for the logged-in user
// @access: Private
router.get("/my", auth, async (req, res, next) => {
  try {
    const ownerId = req.user.id;
    const userPets = await Pet.find({ owner: ownerId });

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
    const ownerId = req.user.id;
    let updatedpet = await Pet.findByIdAndUpdate(
      req.params.id,
      ownerId,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedpet);
  } catch (error) {
    next(error);
  }
});

// @route: DELETE /api/pet/:id
// @desc:  DELETE one pet
// @access: Private
router.delete("/:id", auth, async (req, res, next) => {
  try {
    let deletepet = await Pet.findByIdAndDelete(req.params.id, ownerId);
    res.json(deletepet);
  } catch (error) {
    next(error);
  }
});

export default router;
