const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: String,
  image: {
    date: Buffer
  }
});

const Apartment = mongoose.model("Apartment", apartmentSchema);
module.exports = Apartment;
