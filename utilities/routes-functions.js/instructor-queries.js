const generateInstructor = function (instructor) {
  const newInstructor = new Instructor({
    instructorId: instructor.instructorId,
    name: instructor.name,
    apartments: [],
    signature: instructor.signature,
    email: instructor.email,
    phoneNumber: String,
    password: String,
    reports: [{ type: Schema.Types.ObjectId, ref: "Report" }], //apartmentId
  });
  newInstructor.save();
};

const Instructor = require("../../server-manager/models/instructor");

const getInstructor = async function (email) {
  return Instructor.find({ email: email }).then((instructor) => {
    return instructor;
  });
};
module.exports = { getInstructor };
