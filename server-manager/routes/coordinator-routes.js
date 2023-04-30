const express = require("express");
const router = express.Router();
const {
  addCoordinator,
  addNewInstructor,
  getCoordinatorApartments,
  getInstructorsByCoordinatorId,
  getCoordinatorResidentsById,
  addShift,
} = require("../../utilities/controller/coordinator-handler");
router.post("/coordinators", addCoordinator);
router.post("/coordinators/instructors/:id", addNewInstructor);
router.get("/coordinators/apartments/:id", getCoordinatorApartments);
router.get("/coordinators/instructors/:id", getInstructorsByCoordinatorId);
router.get("/residents/:id", getCoordinatorResidentsById);

// Create a new shift for an instructor

module.exports = router;
