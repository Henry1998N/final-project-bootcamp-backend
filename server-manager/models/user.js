const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: String,
  password: String,
  id: String,
  type: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
