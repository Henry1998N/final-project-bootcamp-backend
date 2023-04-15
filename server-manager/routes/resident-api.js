const express = require("express");
const router = express.Router();
const residentsQuery = require("../../utilities/routes-functions.js/resident-querys");
router.post("/residents", function (req, res) {
  const resident = req.body.resident;
  residentsQuery.generateResident(resident);
  res.status(201).send({ message: "created", newResident: resident });
});
module.exports = router;
