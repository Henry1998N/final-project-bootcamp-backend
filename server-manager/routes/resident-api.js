const express = require("express");
const router = express.Router();
const residentHandler = require("../../utilities/controller/resident-handler");
router.get("/resident/:id", residentHandler.getResidentDetailsByQueryString);
// router.post("/residents", function (req, res) {
//   const resident = req.body.resident;
//   residentsQuery.generateResident(resident);
//   res.status(201).send({ message: "created", newResident: resident });
// });
module.exports = router;
