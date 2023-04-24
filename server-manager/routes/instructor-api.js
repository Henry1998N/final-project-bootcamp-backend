const express = require("express");
const router = express.Router();
const instructorHandler = require("../../utilities/controller/instructor-handler");
router.post("/sign-in", instructorHandler.signIn);
module.exports = router;
