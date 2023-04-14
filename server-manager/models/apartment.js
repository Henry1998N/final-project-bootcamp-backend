const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: String,
  residents: [{ type: Schema.Types.ObjectId, ref: "Resident" }],
});

const Apartment = mongoose.model("Apartment", apartmentSchema);
module.exports = Apartment;
