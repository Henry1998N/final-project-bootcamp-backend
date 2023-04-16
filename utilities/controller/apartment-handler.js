const apartmentQuerys = require("../routes-functions.js/apartment-querys");
const getApartmentsByInstructorId = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;
    const apartments = await apartmentQuerys.getApartmentsByInstructorId(
      instructorId
    );
    res.status(200).send(apartments);
  } catch (err) {
    res.status(409).send({ message: "instructorId undefined", error: err });
  }
};
const getResidentsByApartmentName = async function (req, res) {
  try {
    const apartmentName = req.params.apartmentName;
    const residents = await apartmentQuerys.getResidentsByApartmentName(
      apartmentName
    );
    res.send(residents);
  } catch (err) {
    res.status(409).send({ message: "apartmentName undefined", error: err });
  }
};
const getApartments = async function (req, res) {
  try {
    const apartments = await apartmentQuerys.getAllApartments();
    res.send(apartments);
  } catch (err) {
    res.status(409).send({ message: "apartments undefined", error: err });
  }
};
module.exports = {
  getApartmentsByInstructorId,
  getResidentsByApartmentName,
  getApartments,
};
// router.post("/apartment", function (req, res) {
//   const apartment = req.body.apartment;
//   apartmentQuerys.generateApartment(apartment);
//   res.status(201).send({ message: "created" });
// });
