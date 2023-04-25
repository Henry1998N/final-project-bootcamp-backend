const express = require("express");
const router = express.Router();
const {
  addCoordinator,
  addNewInstructor,
  getCoordinatorApartments,
} = require("../../utilities/controller/coordinator-handler");
router.post("/coordinators", addCoordinator);
router.post("/coordinators/instructors/:id", addNewInstructor);
router.get("/coordinators/apartments/:id", getCoordinatorApartments);
module.exports = router;
