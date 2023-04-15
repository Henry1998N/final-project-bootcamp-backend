const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const residentSchema = new Schema({
  firstName: String,
  lastName: String,
  residentId: String,
  birthDate: Date,
  residentBudget: Number,
  medication: Object,
  allergies: Array,
  medicalAppointments: Object,
  familyConnections: Array,
  picture: String,
});

const Resident = mongoose.model("Resident", residentSchema);
module.exports = Resident;
