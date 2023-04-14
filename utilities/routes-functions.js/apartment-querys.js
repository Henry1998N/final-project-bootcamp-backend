const Instructor = require("../../server-manager/models/instructor");
const Apartment = require("../../server-manager/models/apartment");
const Resident = require("../../server-manager/models/resident");
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
const getResidentsByApartmentName = function (apartmentName) {
  return Apartment.findOne({ name: apartmentName }, { residents: 1 })
    .populate("residents")
    .then((data) => {
      return data.residents;
    });
};
module.exports = {
  getApartmentsByInstructorId,
  generateApartment,
  getResidentsByApartmentName,
};