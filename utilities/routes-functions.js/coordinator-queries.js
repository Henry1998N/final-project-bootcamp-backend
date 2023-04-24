const Coordinator = require("../../server-manager/models/coordinator");

const generateCoordinator = function (newCoordinator) {
  const coordinator = new Coordinator({
    email: newCoordinator.email,
    password: newCoordinator.password,
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
    return coordinator;
  }
  return null;
};
const checkIfCoordinatorExists = async function (newCoordinatorId) {
  const coordinators = await Coordinator.find({ id: newCoordinatorId });
  return coordinators.length > 0;
};
module.exports = { saveCoordinator };
