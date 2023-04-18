const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  residentId: { type: Schema.Types.ObjectId, ref: "Resident" },
  time: Date,
  typeOfInspection: String,
  date: Date,
  attended: Boolean,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
