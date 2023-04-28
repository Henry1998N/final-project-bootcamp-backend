const express = require("express");
const router = express.Router();
const {
  signIn,
  addNewInstructor,
  updateInstructorApartments,
  addNewReport,
} = require("../../utilities/controller/instructor-handler");
const {
  googleLogin,
} = require("../../utilities/jwt-google-auth/google-Handler");
const {
  authenticateUser,
} = require("../../utilities/middleware/middlewareFunctions");
// router.use(authenticateUser);
router.post("/sign-in", signIn);
router.post("/auth/google-login", googleLogin);
router.post("/instructors", addNewInstructor);
router.post("/instructorApartment", updateInstructorApartments);
router.post('/instructor/report', addNewReport)
module.exports = router;
