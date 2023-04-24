const Instructor = require("../../server-manager/models/instructor");
const bcrypt = require("bcrypt");
const { generateUser } = require("../routes-functions.js/user-queries");

require("dotenv").config();
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
      id: coordinator.id,
      email: coordinator.email,
      password: coordinator.password,
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
module.exports = { getInstructor, addInstructor };
