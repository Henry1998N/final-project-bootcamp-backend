const express = require("express");
const router = express.Router();
const {
  signIn,
  addInstructor,
} = require("../../utilities/controller/instructor-handler");
const {
  googleLogin,
} = require("../../utilities/jwt-google-auth/google-Handler");
router.post("/sign-in", signIn);
router.post("/auth/google-login", googleLogin);
router.post("/instructors", addInstructor);
module.exports = router;
