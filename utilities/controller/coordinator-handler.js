const {
  saveCoordinator,
  addInstructor,
  getCoordinatorApartmentsByInstructors,
  getInstructors,
  getInstructorById,
} = require("../routes-functions.js/coordinator-queries");
const { filterApartments } = require("../routes-functions.js/helperFunctions");

const addCoordinator = async function (req, res) {
  try {
    const { newCoordinator } = req.body;
    const response = await saveCoordinator(newCoordinator);
    if (response) {
      res.status(201).send({ message: "created" });
      return;
    }
    res.status(409).send({ message: "user already exist" });
  } catch (err) {
    res.status(400).send(err);
  }
};

const addNewInstructor = async function (req, res) {
  try {
    const { instructorId } = req.body;
    const coordinatorId = req.params.id;
    const response = await addInstructor(coordinatorId, instructorId);
    if (!response) {
      res.status(401).send({ message: "err with query" });
    }
    res.status(201).send({ message: "created", instructors: response });
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};
const getCoordinatorApartments = async function (req, res) {
  try {
    const coordinatorId = req.params.id;

    const response = await getCoordinatorApartmentsByInstructors(coordinatorId);

    if (!response) {
      res.status(400).send({ message: "mongo error " });
      return;
    }
    res.status(200).send(filterApartments(response));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const getInstructorsByCoordinatorId = async function (req, res) {
  try {
    const coordinatorId = req.params.id;
    const response = await getInstructors(coordinatorId);
    if (!response) {
      res.status(400).send({ message: "mongo error" });
      return;
    }
    res.status(200).send(response);
  } catch (err) {
    [];
  }
};

module.exports = {
  addCoordinator,
  addNewInstructor,
  getCoordinatorApartments,
  getInstructorsByCoordinatorId,
};
