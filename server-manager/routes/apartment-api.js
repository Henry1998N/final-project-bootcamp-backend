const express = require("express");
const router = express.Router();
const apartmentController = require("../../utilities/controller/apartment-handler");
/// todo:add try and catch
router.get("/apartments/:instructorId",apartmentController.getApartmentsByInstructorId);
router.get("/residents/:apartmentName",apartmentController.getResidentsByApartmentName);
router.get("/apartments", apartmentController.getApartments);
router.get("/apartment/:apartmentName", apartmentController.getApartmentByName)

module.exports = router;
