const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const model = new Schema({});

const Model = mongoose.model("Model", model);
module.exports = Model;
