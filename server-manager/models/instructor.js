const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  instructorId: String,
  apartments: [{ type: Schema.Types.ObjectId, ref: "Apartment" }],
});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
