const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const residentSchema = new Schema({
  residentId: String,
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  image: {
    data: Buffer,
    contentType: String
  },
  address: Object,
  budget: Number,
  medication: Object,
  allergies: Array,
  medicalAppointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  familyConnections: Array,
});

const Resident = mongoose.model("Resident", residentSchema);
module.exports = Resident;
