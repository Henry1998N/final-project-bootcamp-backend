const express = require("express");
const router = express.Router();
const apartmentQuerys = require("../../utilities/routes-functions.js/apartment-querys");

router.get("/apartments/:instructorId", async function (req, res) {
  const instructorId = req.params.instructorId;
  const apartments = await apartmentQuerys.getApartmentsByInstructorId(
    instructorId
  );
  res.status(200).send(apartments);
});
router.get("/residents/:apartmentName", async function (req, res) {
  const apartmentName = req.params.apartmentName;
  const residents = await apartmentQuerys.getResidentsByApartmentName(
    apartmentName
  );
  res.send(residents);
});
router.post("/apartment", function (req, res) {
  const apartment = req.body.apartment;
  apartmentQuerys.generateApartment(apartment);
  res.status(201).send({ message: "created" });
});
module.exports = router;
