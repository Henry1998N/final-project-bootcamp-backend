const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResidentSchema = new Schema({
  firstName: String,
  lastName: String,
  residintId: String,
  birthDate: Date,
  residentBuget: Number,
  medication: Object,
  allergies: Array,
  medicalAppointments: Object,
  familyConnections: Array,
});

const Model = mongoose.model("Resident", ResidentSchema);
module.exports = Model;
