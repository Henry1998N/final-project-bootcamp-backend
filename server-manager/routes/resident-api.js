const express = require("express");
const router = express.Router();
const residentHandler = require("../../utilities/controller/resident-handler");
const {
  authenticateUser,
} = require("../../utilities/middleware/middlewareFunctions");
router.use(authenticateUser);
router.get(
  "/:id",

  residentHandler.getResidentDetailsByQueryString
);
// router.post("/residents", function (req, res) {
//   const resident = req.body.resident;
//   residentsQuery.generateResident(resident);
//   res.status(201).send({ message: "created", newResident: resident });
// });
router.put(
  "/:residentId/",
  residentHandler.updateResidentMedicationByMedicationName
);

router.put(
  "/familyConnections/:residentId",
  residentHandler.addContactToResidentFamilyConnection
);
/*
new relative: POST /resident/:residentId/familyConnection
del relative: DELETE /resident/:residentId/familyConnection/:relativeId
update: PUT /resident/:residentId/familyConnection/:relativeId
GET ALL: GET /resident/:residentId/familyConnection
Get specific relative: GET /resident/:residentId/familyConnection/:relativeId
*/

router.put(
  "/medicalAppointment/:residentId",
  residentHandler.scheduleResidentMedicalAppointment
);
router.put(
  "/medicalAppointment/status/:appointmentId",
  residentHandler.changeMedicalAppointmentAttendedStatus
);
router.get(
  "/medicalAppointment/:residentId",
  residentHandler.getResidentsMedicalAppointment
);
router.delete(
  "/medicalAppointment/:appointmentId",
  residentHandler.deleteMedicalAppointment
);

router.put(
  "/medicalAppointments/details/:appointmentId",
  residentHandler.updateAppointmentDetails
);

router.post('/contact', residentHandler.sendMessageToResidentContact)

module.exports = router;
