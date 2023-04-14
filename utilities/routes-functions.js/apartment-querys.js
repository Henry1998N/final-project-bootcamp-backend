const Instructor = require("../../server-manager/models/instructor");
const Apartment = require("../../server-manager/models/apartment");

const generateApartment = function (apartment) {
  const newApartment = new Apartment({ name: apartment.name });
  newApartment.save();
};

const getApartmentsByInstructorId = function (instructorId) {
  return Instructor.findOne({ instructorId: instructorId }, { apartments: 1 })
    .populate("apartments")
    .then((data) => {
      return data.apartments;
    });
};
module.exports = { getApartmentsByInstructorId, generateApartment };
