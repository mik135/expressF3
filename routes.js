const express = require("express");

const router = express.Router();


router.get("/user", (req, res) => {
  res.send("Ayodeji");
});
router.get("/food", (req, res) => {
  res.send("eba");
});

module.exports = router;
