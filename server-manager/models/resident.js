const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const residentSchema = new Schema({
  name: String,
});

const Resident = mongoose.model("Resident", residentSchema);
module.exports = Resident;
