const express = require("express");
const router = express.Router();
const {
  addCoordinator,
  addNewInstructor,
  getCoordinatorApartments,
  getInstructorsByCoordinatorId,
} = require("../../utilities/controller/coordinator-handler");
router.post("/coordinators", addCoordinator);
router.post("/coordinators/instructors/:id", addNewInstructor);
router.get("/coordinators/apartments/:id", getCoordinatorApartments);
router.get("/coordinators/instructors/:id", getInstructorsByCoordinatorId);
module.exports = router;
