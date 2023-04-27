const apartmentQueries = require("../routes-functions.js/apartment-queries");

const getApartmentsByInstructorId = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;
    const apartments = await apartmentQueries.getApartmentsByInstructorId(
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
    const residents = await apartmentQueries.getResidentsByApartmentName(
      apartmentName
    );
    res.send(residents);
  } catch (err) {
    res.status(409).send({ message: "apartmentName undefined", error: err });
  }
};

const getApartments = async function (req, res) {
  try {
    const apartments = await apartmentQueries.getAllApartments();
    res.send(apartments);
  } catch (err) {
    res.status(409).send({ message: "apartments undefined", error: err });
  }
};

const getApartmentByName = async function (req, res) {
  try {
    const apartmentName = req.params.apartmentName;
    const apartment = await apartmentQueries.getApartmentByName(apartmentName);
    res.send(apartment);
  } catch (err) {
    res.status(409).send({ message: "apartmentName undefined", error: err });
  }
};
const addApartment = async function (req, res) {
  try {
    const { apartment } = req.body;
    await apartmentQueries.addNewApartment(apartment);
    res.status(201).send({ message: "created" });
  } catch (err) {}
};
const getApartmentNameById = async function (req, res) {
  try {
    const apartmentId = req.params.id;
    const response = await apartmentQueries.getApartmentName(apartmentId);
    if (!response) {
      res.status(400).send({ message: "Failed" });
      return;
    }
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};
module.exports = {
  getApartmentsByInstructorId,
  getResidentsByApartmentName,
  getApartments,
  getApartmentByName,
  addApartment,
  getApartmentNameById,
};
// router.post("/apartment", function (req, res) {
//   const apartment = req.body.apartment;
//   apartmentQuerys.generateApartment(apartment);
//   res.status(201).send({ message: "created" });
// });
