const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const instructorSchema = new Schema({
  instructorId: String,
  name: String,
  apartments: [{ type: Schema.Types.ObjectId, ref: "Apartment" }],
  signature: String,
  email: String,
  password: String,
  reports: [{ type: Schema.Types.ObjectId, ref: "Report" }],
});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
