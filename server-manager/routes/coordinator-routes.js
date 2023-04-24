const express = require("express");
const router = express.Router();
const {
  addCoordinator,
} = require("../../utilities/controller/coordinator-handler");
router.post("/coordinators", addCoordinator);
module.exports = router;
