const residentQuery = require("../routes-functions.js/resident-queries");
const appointmentQuires = require("../routes-functions.js/appointments-queries");
require("dotenv").config(); // Load the .env file
const multer = require("multer");

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
///change to add

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
    const appointmentId = req.params.appointmentId;
    await appointmentQuires.changeMedicalAppointmentStatus(appointmentId);
    res.status(200).send({ message: "updated" });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

const deleteMedicalAppointment = async function (req, res) {
  try {
    const appointmentId = req.params.appointmentId;
    const { residentId } = req?.query;
    await appointmentQuires.deleteMedicalAppointment(appointmentId);
    await residentQuery.deleteMedicalAppointment(residentId, appointmentId);
    res.status(204).end();
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};
const updateAppointmentDetails = async function (req, res) {
  try {
    const appointmentId = req.params.appointmentId;
    const { updatedAppointment } = req.body;
    let response = await appointmentQuires.updateAppointmentDetails(
      appointmentId,
      updatedAppointment
    );
    res.status(200).send(response);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const sendMessageToResidentContact = async (req, res) => {
  try {
    let MessageInformation = req.body;
    const client = require("twilio")(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: `${MessageInformation.body}`,
        to: `whatsapp:+972528156396`,
      })
      .then((message) =>
        res.status(200).send({ message: "Message was sent successfully" })
      );
  } catch (error) {
    res.status(404).send({ message: "Oops, something went wrong!" });
  }
};

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("img");

const addNewResident = async function (req, res) {
  try {
    upload(req, res, () => {
      const { firstName, lastName, birthday, adress, budget, residentId } =
        req.body;
      const { filename } = req.file;
    });

    let response = await residentQuery.addNewResident(
      firstName,
      lastName,
      dateOfBirth,
      address,
      budget,
      gender,
      residentId,
      filename
    );
    res.status(200).send('response');
  } catch (err) {
    res.status(404).send(err.message);
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
  updateAppointmentDetails,
  sendMessageToResidentContact,
  addNewResident,
};
