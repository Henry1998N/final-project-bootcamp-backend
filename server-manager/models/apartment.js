const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const model = new Schema({
  apartmentName: String,
  location: String,
  budget: Number,
  residents: [{ type: Schema.Types.ObjectId, ref: "Residnt" }],
  meals: Array,
});

const Model = mongoose.model("Apartment", model);
module.exports = Model;
