const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  apartmentName: String,
  location: String,
  budget: Number,
  residents: [{ type: Schema.Types.ObjectId, ref: "Residnt" }],
  meals: Array,
});

const Model = mongoose.model("Apartment", apartmentSchema);
module.exports = Model;
