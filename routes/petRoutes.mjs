import express from "express";
import Pet from "../models/petSchema.mjs";

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
router.post("/", async (req, res) => {
  const newpet = await Pet.insertOne(req.body);
  res.status(201).json(newpet);
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

// @route: GET /api/pet/:id
// @desc:  READ one pet
// @access: Public
router.get("/:id", async (req, res) => {
  const onepet = await Pet.findById(req.params.id, req.body);
  res.json(onepet);
});

// @route: PUT /api/pet/:id
// @desc:  UPDATE one pet
// @access: Public
router.put("/:id", async (req, res) => {
  let updatedpet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedpet);
});

// @route: DELETE /api/pet/:id
// @desc:  DELETE one pet
// @access: Public
router.delete("/:id", async (req, res) => {
  let deletepet = await Pet.findByIdAndDelete(req.params.id);
  res.json(deletepet);
});



export default router;

