// const generateInstructor = function (instructor) {
//   const newInstructor = new Instructor({
//     instructorId: instructor.id,
//     apartments: instructor.apartments,
//   });
//   newInstructor.save();
// };

const Instructor = require("../../server-manager/models/instructor");

const getInstructor = async function (email) {
  return Instructor.find({ email: email }).then((instructor) => {
    return instructor;
  });
};
module.exports = { getInstructor };
