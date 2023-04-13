const mongoose = require("mongoose");
require("dotenv").config(); // Load the .env file
const DataBaseManager = function () {
  const connect = function () {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
      })
      .catch((err) => console.log(err));
    //
  };
  return {
    connect,
  };
};
module.exports = DataBaseManager;
