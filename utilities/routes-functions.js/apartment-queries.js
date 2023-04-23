const Instructor = require("../../server-manager/models/instructor");
const Apartment = require("../../server-manager/models/apartment");
const Resident = require("../../server-manager/models/resident");

const generateApartment = function (apartment) {
  const newApartment = new Apartment({ name: apartment.name });
  newApartment.save();
};

const getApartmentsByInstructorId = async function (instructorId) {
  return Instructor.findOne({ _id: instructorId }, { apartments: 1 })
    .populate("apartments")
    .then((data) => {
      return data.apartments;
    });
};

const getResidentsByApartmentName = async function (apartmentName) {
  return Apartment.findOne({ apartmentName: apartmentName }, { residents: 1 })
    .populate("residents")
    .then((data) => {
      return data.residents;
    });
};

const getAllApartments = async function () {
  return Apartment.find({}).then((apartments) => {
    return apartments;
  });
};

const getApartmentByName = async function (apartmentName) {
  let apartment = await Apartment.findOne({ apartmentName: apartmentName });
  return apartment;
};

module.exports = {
  getApartmentsByInstructorId,

  generateApartment,

  getResidentsByApartmentName,

  getAllApartments,
  getApartmentByName,
};
