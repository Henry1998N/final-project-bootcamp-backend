const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  apartmentName: String,
  location: String,
  budget: Number,
  residents: [{ type: Schema.Types.ObjectId, ref: "Resident" }],
  meals: Array,
});

const Apartment = mongoose.model("Apartment", apartmentSchema);
module.exports = Apartment;
