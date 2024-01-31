const express = require("express");
const users = require('./data.json');

const router = express.Router();


router.get("/user", (req, res) => {
  res.send(users);
});
router.get("/food", (req, res) => {
  res.send("eba");
});

module.exports = router;
