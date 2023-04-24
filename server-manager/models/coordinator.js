const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coordinatorSchema = new Schema({
  email: String,
  password: String,
  fullName: String,
  id: String,
  phoneNumber: String,
  instructors: [{ type: Schema.Types.ObjectId, ref: "Instructor" }],
});

const Coordinator = mongoose.model("Coordinator", coordinatorSchema);

module.exports = Coordinator;
