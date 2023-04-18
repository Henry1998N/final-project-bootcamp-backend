const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  resident: { type: Schema.Types.ObjectId, ref: "Resident" },
  typeOfInspection: String,
  date: Date,
  attended: Boolean,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
