const express = require("express");
const router = express.Router();
const {
  getApartmentsByInstructorId,
  getResidentsByApartmentName,
  getApartments,
  getApartmentByName,
  addApartment,
  getApartmentNameById,
} = require("../../utilities/controller/apartment-handler");
/// todo:add try and catch
router.get("/apartments/:instructorId", getApartmentsByInstructorId);
router.get("/residents/:apartmentName", getResidentsByApartmentName);
router.get("/apartments", getApartments);
router.get("/apartment/:apartmentName", getApartmentByName);
router.get("/apartmentName/:id", getApartmentNameById);
router.post("/apartments", addApartment);

module.exports = router;
