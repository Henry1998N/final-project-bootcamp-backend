const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModelS = new Schema({
  name: String,
});

const Model = mongoose.model("Model", ModelS);
module.exports = Model;
