const {
  saveCoordinator,
} = require("../routes-functions.js/coordinator-queries");
const addCoordinator = async function (req, res) {
  try {
    const { newCoordinator } = req.body;
    const response = await saveCoordinator(newCoordinator);
    if (response) {
      res.status(201).send("created");
      return;
    }
    res.status(409).send("user already exist");
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { addCoordinator };
