const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: String,
});

const Apartment = mongoose.model("Apartment", apartmentSchema);
module.exports = Apartment;
