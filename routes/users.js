const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Get all the user details
router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post user details
router.post("/add", async (req, res) => {
  try {
    const user = new User({
      user: req.body.user,
      description: req.body.description,
    });

    await user.save().then((data) => {
      res.json(data);
    });
  } catch (err) {
    res.json({ message: err });
  }
});

//Get the user details based on id
router.get("/:userId", async (req, res) => {
  try {
    const data = await User.findById(req.params.userId);
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete user based on id
router.delete("/:userId", async (req, res) => {
  try {
    const data = await User.remove({ _id: req.params.userId });
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update user details based on id
router.patch("/:userId", async (req, res) => {
  try {
    const data = await User.updateOne(
      { _id: req.params.userId },
      { $set: { user: req.body.user } }
    );
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
