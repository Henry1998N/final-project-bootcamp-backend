const {
  validateUser,
  generateToken,
} = require("../jwt-google-auth/login-functions");
const {
  addInstructor,
} = require("../../utilities/routes-functions.js/instructor-queries");
const signIn = async function (req, res) {
  const { email, password } = req.body;
  const user = await validateUser(email, password);
  if (user) {
    const jwt = generateToken(email, user.id, user.name);
    res.status(200).json({ token: jwt, user: user });
  } else {
    res.status(401).send({ message: "Failure" });
  }
};
const addNewInstructor = async function (req, res) {
  try {
    const { instructor } = req.body;
    const response = await addInstructor(instructor);
    if (!response) {
      res.status(409).send({ message: "user already exist" });
      return;
    }
    res.status(201).send({ message: "created" });
  } catch (err) {}
};
module.exports = { signIn, addNewInstructor };
