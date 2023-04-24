const User = require("../../server-manager/models/user");

const generateUser = function (user, userType) {
  const newUser = new User({
    email: user.email,
    password: user.password,
    id: user.id,
    type: userType,
  });
  newUser.save();
};
const findUser = async function (userEmail) {
  const users = await User.find({ email: userEmail });
  return users;
};
module.exports = { generateUser, findUser };
