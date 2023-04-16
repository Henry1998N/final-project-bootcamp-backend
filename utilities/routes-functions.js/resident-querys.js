const Resident = require("../../server-manager/models/resident");

const generateResident = function (resident, residentId) {
  const newResident = new Resident({
    firstName: resident.firstName,
    lastName: resident.lastName,
    residentId: resident.residentId,
    birthDate: resident.birthDate,
    residentBudget: resident.residentBudget,
    medication: resident.medication,
    allergies: resident.allergies,
    medicalAppointments: resident.medicalAppointments,
    familyConnections: resident.familyConnections,
    picture: resident.picture,
  });
  newResident.save();
};
const getResidentDetailsByQueryString = function (
  specificFiledToGet,
  residentIdParameter
) {
  return Resident.find({ residentId: residentIdParameter }).then(
    (specificResident) => {
      const resident = {};
      if (specificFiledToGet.length > 0) {
        specificFiledToGet.forEach((field) => {
          resident[field] = specificResident[0][field];
        });
        return resident;
      }

      return specificResident;
    }
  );
};
module.exports = { generateResident, getResidentDetailsByQueryString };
