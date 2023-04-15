const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const model = new Schema({
  firstName: String,
  lastName: String,
  residentId: String,
  birthDate: Date,
  residentBudget: Number,
  medication: Object,
  allergies: Array,
  medicalAppointments: Object,
});

const Model = mongoose.model("Resident", model);
module.exports = Model;
