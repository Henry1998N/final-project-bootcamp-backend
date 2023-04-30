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

const updateInstructorById = async function (instructorId, name, phoneNumber) {
  return await Instructor.findOneAndUpdate(
    { instructorId: instructorId },
    {
      name: name,
      phoneNumber: phoneNumber,
    },
    { new: true }
  );
};

const deleteInstructorById = async function (instructorId) {
  return await Instructor.deleteOne({ intructorId: instructorId });
};

const getInstructorById = async function (instructorId) {
  return Instructor.findById(instructorId);
};

const getInstructorShifts = async function (instructorId) {
  const shifts = await Instructor.findById(instructorId).populate("shifts");
  return shifts;
};

const getInstructorApartments = async function (instructorId) {
  const apartments = await Instructor.findOne({ _id: instructorId }).populate(
    "apartments"
  );
  return apartments;
};

const getMedicalAppointments = async function (instructorId) {
  const medicalAppointments = await Instructor.findById(instructorId, {
    image: 1,
    apartments: 1,
  }).populate({
    path: "apartments",
    select: "_id residents apartmentName",

    populate: {
      path: "residents",
      select: "_id firstName lastName",

      populate: {
        path: "medicalAppointments",
        model: "Appointment",
      },
    },
  });
  return medicalAppointments;
};
const getResidentsBirthdays = async function (instructorId) {
  return Instructor.findById(instructorId, { apartments: 1 }).populate({
    path: "apartments",
    select: "_id residents apartmentName",

    populate: {
      path: "residents",
      select: "_id dateOfBirth firstName lastName",
    },
  });
};
module.exports = {
  getInstructor,
  addInstructor,
  updateInstructorApartmentsById,
  updateInstructorById,
  deleteInstructorById,
  getInstructorById,
  getInstructorShifts,
  getInstructorApartments,

  getMedicalAppointments,
  getResidentsBirthdays,
};
