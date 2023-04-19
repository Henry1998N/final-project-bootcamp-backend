const Resident = require("../../server-manager/models/resident");
const Appointment = require("../../server-manager/models/appointment");
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
  return Resident.find({ _id: residentIdParameter }).then(
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

const generateAppointment = function (appointment, residentId) {
  const newAppointment = new Appointment({
    date: appointment.date,
    attended: false,
    typeOfInspection:appointment.typeOfInspection
  });
  return newAppointment;
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
    { _id: residentCopy.residentId },
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
const addContactToResident = async (residentId, newContact) => {
  return Resident.findOneAndUpdate(
    { _id: residentId },
    { $push: { familyConnections: newContact } }
  )
    .then(() => {
      return "contact " + newContact.name + "added to family connections";
    })
    .catch((err) => {
      return err.message;
    });
};

const scheduleMedicalAppointment = async function (residentId, appointment) {
  const newAppointment = generateAppointment(appointment, residentId);
  newAppointment.save()
  return Resident.findOneAndUpdate(
    { _id: residentId },
    { $push: { medicalAppointments: newAppointment } }
  )
    .then(() => {
      return "appointment Scheduled at " + newAppointment.date;
    })
    .catch((err) => {
      return err.message;
    });
};
const getResidentMedicalAppointment = async function (residentId) {
  const resident = await getResidentDetailsByQueryString([], residentId);
  return Resident.findById(resident[0]._id, { medicalAppointments: 1 })
    .populate("medicalAppointments")
    .then((appointments) => {
      return appointments;
    })
    .catch((err) => {
      return err.message;
    });
};
const changeMedicalAppointmentStatus = async function (appointmentId) {
  console.log(appointmentId);
  return Apartment.findOneAndUpdate(
    { _id: appointmentId },
    { attended: true }
  ).catch((err) => {
    return err.message;
  });
};
module.exports = {
  generateResident,
  getResidentDetailsByQueryString,
  updateResidentMedication,
  addContactToResident,
  scheduleMedicalAppointment,
  getResidentMedicalAppointment,
  changeMedicalAppointmentStatus,
};
