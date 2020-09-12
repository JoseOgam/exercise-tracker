const express = require("express");
var router = express.Router();
const User = require("../models/user");

router.post("/users", (req, res) => {
  const username = req.body.username;

  const newUser = new User({
    username,
  });
  newUser
    .save()
    .then(() => {
      res.json("user added");
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});
module.exports = router;
