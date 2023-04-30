const Coordinator = require("../../server-manager/models/coordinator");
const mongoose = require("mongoose");
const { generateUser } = require("../routes-functions.js/user-queries");
const bcrypt = require("bcrypt");
require("dotenv").config();

const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
const generateCoordinator = function (newCoordinator) {
  const coordinator = new Coordinator({
    email: newCoordinator.email,
    password: bcrypt.hashSync(newCoordinator.password, salt),
    fullName: newCoordinator.fullName,
    id: newCoordinator.id,
    phoneNumber: newCoordinator.phoneNumber,
    instructors: [],
  });
  return coordinator;
};
const saveCoordinator = async function (newCoordinator) {
  const coordinator = generateCoordinator(newCoordinator);
  const isExists = await checkIfCoordinatorExists(newCoordinator.id);
  if (!isExists) {
    coordinator.save();
    generateUser(
      {
        id: coordinator.id,
        email: coordinator.email,
        password: coordinator.password,
        objId: coordinator._id,
      },
      "Coordinator"
    );
    return coordinator;
  }
  return null;
};
const checkIfCoordinatorExists = async function (newCoordinatorId) {
  const coordinators = await Coordinator.find({ id: newCoordinatorId });
  return coordinators.length > 0;
};
const getCoordinatorApartmentsByInstructors = async function (coordinatorId) {
  const coordinator = await Coordinator.findById(coordinatorId).populate({
    path: "instructors",
    populate: {
      path: "apartments",
      populate: {
        path: "residents",
        model: "Resident",
      },
    },
  });
  return coordinator;
};
const addInstructor = async function (coordinatorId, instructorId) {
  return Coordinator.findByIdAndUpdate(coordinatorId, {
    $push: { instructors: instructorId },
  });
};
const getInstructors = async function (coordinatorId) {
  return Coordinator.findById(coordinatorId, { instructors: 1 }).populate({
    path: "instructors",
    populate: {
      path: "apartments",
      model: "Apartment",
    },
  });
};
const getCoordinatorResidents = async function (coordinatorId) {
  const coordinator = await Coordinator.findById(coordinatorId).populate({
    path: "instructors",
    select: "_id apartments",

    populate: {
      path: "apartments",
      select: "_id residents",

      populate: {
        path: "residents",
        model: "Resident",
      },
    },
  });
  return coordinator;
};
module.exports = {
  saveCoordinator,
  addInstructor,
  getCoordinatorApartmentsByInstructors,
  getInstructors,
  getCoordinatorResidents,
};
