require("dotenv").config();
const Instructor = require("../../server-manager/models/instructor");
const bcrypt = require("bcrypt");
const { generateUser } = require("../routes-functions.js/user-queries");

const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));

const generateInstructor = function (instructor) {
  const newInstructor = new Instructor({
    instructorId: instructor.instructorId,
    name: instructor.name,
    apartments: [],
    signature: instructor.signature,
    email: instructor.email,
    phoneNumber: instructor.phoneNumber,
    password: bcrypt.hashSync(instructor.password, salt),
    reports: [],
    image: instructor.image,
  });
  return newInstructor;
};

const addInstructor = async function (instructor) {
  const instructors = await getInstructor(instructor.email);
  if (instructors.length > 0) {
    return null;
  }
  const newInstructor = generateInstructor(instructor);
  newInstructor.save();
  generateUser(
    {
      id: newInstructor.instructorId,
      email: newInstructor.email,
      password: newInstructor.password,
      objId: newInstructor._id,
    },
    "Instructor"
  );

  return newInstructor;
};

const getInstructor = async function (email) {
  return Instructor.find({ email: email }).then((instructor) => {
    return instructor;
  });
};

const updateInstructorApartmentsById = async function (
  instructorId,
  apartmentId
) {
  return await Instructor.findByIdAndUpdate(
    instructorId,
    {
      $push: { apartments: apartmentId },
    },
    { new: true }
  );
};

const getInstructorById = async function (instructorId) {
  return Instructor.findById(instructorId);
};
const getInstructorShifts = async function (instructorId) {
  const shifts = await Instructor.findById(instructorId).populate("shifts");
  return shifts;
};
module.exports = {
  getInstructor,
  addInstructor,
  updateInstructorApartmentsById,
  getInstructorById,
  getInstructorShifts,
};
