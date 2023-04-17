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
const updateMedicineStatus = function (resident, period, medicationName) {
  const residentCopy = resident[0];

  const medication = residentCopy.medication;
  const periodMedication = medication[period];
  const medicineIndex = periodMedication.findIndex(
    (m) => m.medicationName == medicationName
  );
  periodMedication[medicineIndex].status = true;
  return residentCopy;
};

const updateResidentMedication = async function (
  residentId,
  period,
  medicationName
) {
  const resident = await getResidentDetailsByQueryString([], residentId);
  const residentCopy = updateMedicineStatus(resident, period, medicationName);
  return Resident.findOneAndUpdate(
    { residentId: residentCopy.residentId },
    { medication: residentCopy.medication },
    { new: true }
  )
    .then((doc) => {
      return doc;
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  generateResident,
  getResidentDetailsByQueryString,
  updateResidentMedication,
};
