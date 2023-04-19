const express = require("express");
const router = express.Router();
const residentHandler = require("../../utilities/controller/resident-handler");
router.get("/:id", residentHandler.getResidentDetailsByQueryString);
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
router.put(
  "/medicalAppointment/:residentId",
  residentHandler.scheduleResidentMedicalAppointment
);
router.put(
  "/appointment/status",
  residentHandler.changeMedicalAppointmentAttendedStatus
);
router.get(
  "/medicalAppointment/:residentId",
  residentHandler.getResidentsMedicalAppointment
);
router.delete("/medicalAppointment", residentHandler.deleteMedicalAppointment);
module.exports = router;
