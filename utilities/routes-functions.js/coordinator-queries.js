const Coordinator = require("../../server-manager/models/coordinator");
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
module.exports = { saveCoordinator };
