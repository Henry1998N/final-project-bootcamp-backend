const residentQuery = require("../routes-functions.js/resident-querys");
const appointmentQuires = require("../routes-functions.js/appointments-quires");
const mongoose = require("mongoose");
const getResidentDetailsByQueryString = async function (req, res) {
  try {
    const queryString = req?.query;
    const residentId = req.params.id;
    let fields = [];
    if (queryString != undefined) {
      fields = Object.keys(queryString);
    }
    const resident = await residentQuery.getResidentDetailsByQueryString(
      fields,
      residentId
    );
    res.status(200).send(resident);
  } catch (err) {
    console.log(err);
    res.send({ message: err.message });
  }
};
const updateResidentMedicationByMedicationName = async function (req, res) {
  try {
    const residentId = req.params.residentId;
    const { period, medicationName } = req.query;
    const resMessage = await residentQuery.updateResidentMedication(
      residentId,
      period,
      medicationName
    );
    res.send({ message: resMessage });
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: err.message.message });
  }
};

const addContactToResidentFamilyConnection = async function (req, res) {
  try {
    const residentId = req.params.residentId;
    const { newContact } = req.body;
    const responseMessage = await residentQuery.addContactToResident(
      residentId,
      newContact
    );
    res.status(200).send({ message: responseMessage });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

const scheduleResidentMedicalAppointment = async function (req, res) {
  try {
    const residentId = req.params.residentId;
    const { newAppointment } = req.body;
    const responseMessage = await appointmentQuires.scheduleMedicalAppointment(
      residentId,
      newAppointment
    );
    res.status(200).send({ message: responseMessage });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};
const getResidentsMedicalAppointment = async function (req, res) {
  try {
    const residentId = req.params.residentId;
    const response = await residentQuery.getResidentMedicalAppointment(
      residentId
    );
    res.status(200).send(response);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};
const changeMedicalAppointmentAttendedStatus = async function (req, res) {
  try {
    const { appointmentId } = req.body;
    await appointmentQuires.changeMedicalAppointmentStatus(appointmentId);
    res.status(200).send({ message: "updated" });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

const deleteMedicalAppointment = async function (req, res) {
  try {
    const { appointmentId } = req?.query;
    await appointmentQuires.deleteMedicalAppointment(appointmentId);
    res.status(204).end();
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};
module.exports = {
  getResidentDetailsByQueryString,
  updateResidentMedicationByMedicationName,
  addContactToResidentFamilyConnection,
  scheduleResidentMedicalAppointment,
  getResidentsMedicalAppointment,
  changeMedicalAppointmentAttendedStatus,
  deleteMedicalAppointment,
};
