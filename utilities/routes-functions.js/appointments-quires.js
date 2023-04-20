const Appointment = require("../../server-manager/models/appointment");
const Resident = require("../../server-manager/models/resident");
const generateAppointment = function (appointment) {
  const newAppointment = new Appointment({
    date: appointment.date,
    attended: false,
    typeOfInspection: appointment.typeOfInspection,
  });
  return newAppointment;
};
const scheduleMedicalAppointment = async function (residentId, appointment) {
  const newAppointment = generateAppointment(appointment);
  newAppointment.save();
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
const changeMedicalAppointmentStatus = async function (appointmentId) {
  return Appointment.findOneAndUpdate(
    { _id: appointmentId },
    { attended: true }
  ).catch((err) => {
    return err.message;
  });
};

const deleteMedicalAppointment = async function (appointmentId) {
  return Appointment.findByIdAndDelete(appointmentId).catch((err) => {
    return err.message;
  });
};
const updateAppointmentDetails = async function (
  appointmentId,
  updatedAppointment
) {
  const fieldsToUpdate = {
    typeOfInspection: updatedAppointment.typeOfInspection,
    date: updatedAppointment.date,
  };
  return Appointment.findOneAndUpdate(
    { _id: appointmentId },
    { $set: fieldsToUpdate }
  ).catch((err) => {
    return err.message;
  });
};
module.exports = {
  generateAppointment,
  changeMedicalAppointmentStatus,
  scheduleMedicalAppointment,
  deleteMedicalAppointment,
  updateAppointmentDetails,
};
