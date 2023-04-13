const express = require("express");
const router = express.Router();
const Model = require("../models/model");
router.post("/house", function (req, res) {
  const newData = new Model({ name: "hiii orii" });
  newData.save();
  res.send("yeah ori");
});
router.get("/houses", async function (req, res) {
  const houses = await Model.find({});
  res.send(houses);
});
module.exports = router;
