const mongoose = require("mongoose");
const constants = require("../constants/constant");
require("dotenv").config(); // Load the .env file
const DataBaseManager = function () {
  const connect = function () {
    mongoose
      .connect(process.env.MONGO_URL || constants.DEFAULT_DB, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("connected");
      })
      .catch((err) => console.log(err));
    //
  };
  return {
    connect,
  };
};
module.exports = DataBaseManager;
