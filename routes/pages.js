const express = require("express");
const router = express.Router();

router.get("/home", function(req, res) {
  res.render("home");
});

router.get("/glass_partitions", function(req, res) {
  res.render("glass_partitions");
})

module.exports = router;
