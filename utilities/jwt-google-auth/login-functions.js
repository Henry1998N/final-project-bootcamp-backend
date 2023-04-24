const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config(); // Load the .env file

const secretKey = process.env.SECRET_KEY;
const { getInstructor } = require("../routes-functions.js/instructor-queries");
const { findUser } = require("../routes-functions.js/user-queries");
async function validateUser(email, password) {
  const users = await findUser(email);
  const user = users[0];
  if (!user) {
    return null;
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  return { id: user._id, email: user.email, name: user.name, type: user.type };
}
const generateToken = function (email, id, name) {
  const payload = { email, id, name };
  return jwt.sign(payload, secretKey);
};

module.exports = { validateUser, generateToken };
