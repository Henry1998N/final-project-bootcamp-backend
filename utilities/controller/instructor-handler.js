const {
  validateUser,
  generateToken,
} = require("../jwt-google-auth/login-functions");
const {
  addInstructor,
  updateInstructorApartmentsById,
  getInstructorById,
  getInstructorShifts,
} = require("../../utilities/routes-functions.js/instructor-queries");
const { createShift } = require("../routes-functions.js/shift-queries");

const signIn = async function (req, res) {
  const { email, password } = req.body;
  const user = await validateUser(email, password);
  if (user) {
    const jwt = generateToken(email, user.id, user.name);
    res.status(200).json({ token: jwt, user: user });
  } else {
    res.status(401).send({ message: "Failure" });
  }
};
const addNewInstructor = async function (req, res) {
  try {
    const { instructor } = req.body;
    const response = await addInstructor(instructor);
    if (!response) {
      res.status(409).send({ message: "user already exist" });
      return;
    }
    res.status(200).send({ data: response });
  } catch (err) {}
};
const updateInstructorApartments = async function (req, res) {
  try {
    const { instructorId, apartmentId } = req.body;
    const response = await updateInstructorApartmentsById(
      instructorId,
      apartmentId
    );
    if (!response) {
      res.status(401).send({ message: "error with the updating" });
      return;
    }
    res
      .status(200)
      .send({ message: "updated successfully", apartments: response });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};
const addShift = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;
    const { coordinatorId, shift, selectedInstructor, selectedApartment } =
      req.body;

    const instructor = await getInstructorById(instructorId);
    const newShift = await createShift(
      coordinatorId,
      selectedInstructor.id,
      shift,
      selectedApartment.id
    );

    await newShift.save();

    instructor.shifts.push(newShift._id);
    await instructor.save();

    res
      .status(200)
      .json({ success: true, message: "Shift created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating shift" });
  }
};
const getInstructorShiftsById = async function (req, res) {
  try {
    const instructorId = req.params.id;
    const response = await getInstructorShifts(instructorId);
    if (!response) {
      res.status(401).send({ message: "failed" });
      return;
    }
    res.status(200).send(response.shifts);
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};
module.exports = {
  signIn,
  addNewInstructor,
  updateInstructorApartments,
  addShift,
  getInstructorShiftsById,
};
