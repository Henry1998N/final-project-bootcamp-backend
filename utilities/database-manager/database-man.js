const mongoose = require("mongoose");
require("dotenv").config(); // Load the .env file
const DataBaseManager = function () {
  const connect = function () {
    mongoose
      .connect(process.env.MONGO_URL, {
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
