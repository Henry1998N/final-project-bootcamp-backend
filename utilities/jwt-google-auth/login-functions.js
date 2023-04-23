const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config(); // Load the .env file

const secretKey = process.env.SECRET_KEY;
const Instructor = require("../../server/models/instructor");

const getInstructor = async function (email) {
  return Instructor.find({ email: email }).then((instructor) => {
    return instructor;
  });
};
async function validateUser(email, password) {
  const instructor = await getInstructor();
  const user = instructor[0];
  if (!user) {
    return null;
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  return { id: user.id, email: user.email, name: user.name };
}
const generateToken = function (email, id, name) {
  const payload = { email, id, name };
  return jwt.sign(payload, secretKey);
};

module.exports = { validateUser, generateToken };
